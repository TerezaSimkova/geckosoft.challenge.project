import React, { useEffect, useState } from "react";

import GifDetailsComponent from "./Modal/GifDetailsComponent";
import GifsComponent from "./Gifs/GifsComponent";

import HeaderSection from "./HeaderSection/HeaderSectionComponent";

import { fetchGifs, Gif } from "../api/proxy";
import './WrapperStyles.scss';

const WrapperComponent = () => {

    const [gifs, setGifs] = useState<Gif[]>([]);
    const [showDetails, setShowDetails] = useState(false);
    const [gif, setGif] = useState<Gif | undefined>();

    useEffect(() => {
        const fetchData = async () => {
            await fetchGifs()
                .then(json => {
                    setGifs(json.data);
                })
        };
        fetchData();
    }, [])

    //Sort by date
    //const sortByOldest = () => {
    //    const sortedCards = [...cards].sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
    //    setCards(sortedCards);
    //};

    //const sortByNewest = () => {
    //    const sortedCards = [...cards].sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
    //    setCards(sortedCards);
    //};

    //Datails 
    const showGifDetails = (gif: Gif) => {
        setGif(gif);
        console.log(gif);
        setShowDetails(true);
    }
    const hideDatils = () => {
        setShowDetails(false);
    }

    return (
        <>
            <HeaderSection />            
            <GifsComponent gifs={gifs} showGifDetails={showGifDetails} />
            <GifDetailsComponent gif={gif} showDetails={showDetails} handleClose={hideDatils} />
        </>
    );
}

export default WrapperComponent;