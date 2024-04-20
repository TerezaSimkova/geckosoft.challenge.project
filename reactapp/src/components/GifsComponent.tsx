import React, { useEffect, useState } from "react";

import ImageList from "@mui/material/ImageList";
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';

import FavoriteIcon from '@mui/icons-material/Favorite';
import InfoIcon from '@mui/icons-material/InfoRounded';

import { fetchGifs, Gif } from "../api/proxy";

import './GifsStyles.scss';
import { Tooltip } from "@mui/material";
import GifDetailsComponent from "./Modal/GifDetailsComponent";


const GifsComponent = () => {

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

    const showGifDetails = (gif: Gif) => {
        setGif(gif);
        console.log(gif);
        setShowDetails(true);
    }

    const hideDatils = () => {
        setShowDetails(false);
    }

    return (
        <ImageList gap={3}>
            {
                gifs.map((item, key) => {

                    const image = item.images.original;
                    const label = item.alt_text ? "" : item.alt_text;

                    return (

                        <ImageListItem key={key} rows={4} cols={1} className="gif">
                            <img
                                src={image.webp}
                                alt={label}
                                aria-label={label}
                                loading="lazy"
                                width={image.width}
                                height={image.height} />
                            <ImageListItemBar
                                sx={{
                                    background:
                                        'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                                        'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                                }}
                                title={image === null ? "" : ""}
                                position="top"
                                actionIcon={
                                    <IconButton sx={{ color: 'white' }}>
                                        <Tooltip title="Add to favourites">
                                            <FavoriteIcon className="heart" />
                                        </Tooltip>
                                    </IconButton>
                                }
                                actionPosition="left"
                            />
                            <ImageListItemBar
                                className="subtitle"
                                title={item.title}
                                subtitle={item.user ? "@" + item.user?.username : ""}
                                actionIcon={
                                    <IconButton
                                        sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                        aria-label="Show Gif Details"
                                        onClick={() => showGifDetails(item)}
                                    >
                                        <Tooltip title="Show Gif Details">
                                            <InfoIcon className="details" />
                                        </Tooltip>
                                    </IconButton>
                                } />\
                        </ImageListItem>

                    );
                })
            }
            <GifDetailsComponent gif={gif} showDetails={showDetails} handleClose={hideDatils} />
        </ImageList>
    );
}

export default GifsComponent;