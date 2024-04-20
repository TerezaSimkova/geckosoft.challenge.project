import React, { useEffect, useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import InfoIcon from '@mui/icons-material/InfoRounded';
import { fetchGifs, Gif } from "../api/proxy";
import { hexToRgb } from "@mui/material";



const Images = () => {

    const [gifs, setGifs] = useState<Gif[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            await fetchGifs()
                .then(json => {
                    setGifs(json.data);
                })
        };
        fetchData();
    }, [])


    return (
        <ImageList
            sx={{
                width: 'auto',
                height: 'auto',
                transform: 'translateZ(0)'
            }}
            rowHeight="auto"
            gap={3}
        >
            {
                gifs.map((item, key) => {

                    const image = item.images.original;

                    return (
                        <ImageListItem key={key} rows={2} cols={1}>
                            <img
                                src={image.webp}
                                alt={item.alt_text == 'undefined' ? "" : item.alt_text}
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
                                        <FavoriteBorderOutlinedIcon />
                                    </IconButton>
                                }
                                actionPosition="left"
                            />
                            <ImageListItemBar
                                title={item.title}
                                subtitle={"@" + item.user != 'undefiend' ? item.user?.username : "" }
                                actionIcon={
                                    <IconButton
                                        sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                        aria-label={`info about ${item.title}`}
                                    >
                                        <InfoIcon />
                                    </IconButton>
                                }/>
                        </ImageListItem>
                    );
                })
            }
        </ImageList>
    );
}

export default Images;