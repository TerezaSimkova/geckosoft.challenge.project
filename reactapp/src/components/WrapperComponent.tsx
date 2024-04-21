import React, { useEffect, useState } from "react";

import GifDetailsComponent from "./Modal/GifDetailsComponent";
import GifsComponent from "./Gifs/GifsComponent";

import HeaderSection from "./HeaderSection/HeaderSectionComponent";

import { fetchGifs, Gif } from "../api/proxy";
import { IsMobile, stringToDate } from "./utilities/utilities";
import './WrapperStyles.scss';

const WrapperComponent = () => {

    const [gifs, setGifs] = useState<Gif[]>([]);
    const [gif, setGif] = useState<Gif | undefined>();
    const [showDetails, setShowDetails] = useState(false);
    const [loadingGif, setLoadingGif] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [isMobile, setIsMobile] = useState(false);


    const fetchData = async () => {
        
        setLoadingGif(true);
        //Check windows size 
        const ismobile = IsMobile();
        setIsMobile(ismobile);

        //Set timeout just to see loading placeholders
        setTimeout(async () => {
            try {
                const response = await fetchGifs();
                const data = await response.data;

                setGifs(data);
                setLoadingGif(false);

            } catch {
                //Show error messege for user 
                console.log('Error');
                setLoadingGif(false);
            } 
        }, 3000);
    };

    useEffect(() => {
         fetchData();
    }, [])

    //Search 
    const filterGifs = gifs.filter(gif => gif.title.toLowerCase().includes(searchTerm.toLowerCase()));
    const handleSearchGif = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    }

    //Sort by date
    const sortByOldest = () => {
        const sortedGifs = [...gifs].sort((a, b) => stringToDate(a.import_datetime) - stringToDate(b.import_datetime));
        setGifs(sortedGifs);
    };
    const sortByNewest = () => {
        const sortedGifs = [...gifs].sort((a, b) => stringToDate(b.import_datetime) - stringToDate(a.import_datetime));
        setGifs(sortedGifs);
    };

    //Details 
    const showGifDetails = (gif: Gif) => {
        setGif(gif);
        setShowDetails(true);
    }
    const hideDatils = () => {
        setShowDetails(false);
    }

    return (
        <>
            <HeaderSection
                sortByOldest={sortByOldest}
                sortByNewest={sortByNewest}
                searchTermValue={searchTerm}
                handleSearch={handleSearchGif}
            />
            <GifsComponent
                gifs={searchTerm === '' ? gifs : filterGifs}
                showGifDetails={showGifDetails}
                loading={loadingGif}
                isMobile={isMobile }
            />
            <GifDetailsComponent
                gif={gif}
                showDetails={showDetails}
                handleClose={hideDatils}
            />
        </>

    );
}

export default WrapperComponent;