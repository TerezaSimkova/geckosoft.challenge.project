import React, { useEffect, useState } from "react";

import GifDetailsComponent from "./Modal/GifDetailsComponent";
import GifsComponent from "./Gifs/GifsComponent";

import HeaderSection from "./HeaderSection/HeaderSectionComponent";

import { fetchGifs, Gif } from "../api/proxy";
import { stringToDate } from "./utilities/utilities";
import './WrapperStyles.scss';

const WrapperComponent = () => {

    const [gifs, setGifs] = useState<Gif[]>([]);
    const [gif, setGif] = useState<Gif | undefined>();
    const [showDetails, setShowDetails] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            await fetchGifs()
                .then(json => {
                    setGifs(json.data);
                })
        };
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
            <HeaderSection sortByOldest={sortByOldest} sortByNewest={sortByNewest} searchTermValue={searchTerm} handleSearch={handleSearchGif} />
            <GifsComponent gifs={searchTerm === '' ? gifs : filterGifs} showGifDetails={showGifDetails} />
            <GifDetailsComponent gif={gif} showDetails={showDetails} handleClose={hideDatils} />
        </>

    );
}

export default WrapperComponent;