import React, { useEffect, useState } from "react";

import GifDetailsComponent from "./Modal/GifDetailsComponent";
import GifsComponent from "./Gifs/GifsComponent";

import HeaderSection from "./HeaderSection/HeaderSectionComponent";

import { fetchGifs, getFavouritesGifs, Gif, saveGif } from "../api/proxy";
import { stringToDate } from "./utilities/utilities";
import './WrapperStyles.scss';

export enum FavouriteState {
    active = 'active',
    unselected = 'unselected'
}


const WrapperComponent = () => {

    const [gifs, setGifs] = useState<Gif[]>([]);
    const [favouriteGifs, setFavouriteGifs] = useState<Gif[]>([]);
    const [gif, setGif] = useState<Gif | undefined>();
    const [showDetails, setShowDetails] = useState(false);
    const [loadingGif, setLoadingGif] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [favourite, setFavourite] = useState<boolean[]>(new Array(gifs.length).fill(false));


    const fetchData = async () => {

        setLoadingGif(true);

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

    };

    useEffect(() => {
        fetchData();
    }, [])

    //See All Favourite
    const GetAllFavouriteGifs = (username: string) => {
        getFavouritesGifs(username).then(async(res) => {
            const data = await res.json();
            setFavouriteGifs(data);
        }).catch((err) => {console.log("Errore getting favourites gifs.") })
    }

    //Add To favourite
    const AddToFavourite = (gifItem: Gif, key: number) => {

        if (key !== -1) {
            const newFavouriteGif = [...favourite];
            newFavouriteGif[key] = !favourite[key];
            setFavourite(newFavouriteGif);
            saveGif(gifItem).then((res) => {
                const response = res.json();
                console.log("aggiunto");
            }).catch((err) => {console.log("Errrorrrrr") })
        }
        
    }

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
                getAllFavouriteGifs={GetAllFavouriteGifs}
            />
            <GifsComponent
                gifs={searchTerm === '' ? gifs : filterGifs}
                showGifDetails={showGifDetails}
                loading={loadingGif}
                addToFavourite={AddToFavourite}
                favourite={favourite}
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