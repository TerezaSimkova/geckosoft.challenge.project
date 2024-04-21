import React, { useEffect, useState } from "react";

import { ImageList, ImageListItem, ImageListItemBar, IconButton, Tooltip, Avatar, Skeleton } from "@mui/material";

import FavoriteIcon from '@mui/icons-material/Favorite';
import InfoIcon from '@mui/icons-material/InfoRounded';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';

import { Gif } from "../../api/proxy";
import './GifStyles.scss';
import { IsMobile } from "../utilities/utilities";

type GifsProps = {
    gifs: Gif[];
    showGifDetails: (value: Gif) => void;
    loading: boolean;
}

const GifsComponent = ({ gifs, showGifDetails, loading }: GifsProps) => {

    console.log(gifs.length)

    const gifList = () => {
        return (
            <ImageList gap={3} cols={3} rowHeight={100} className="imageList">
                {
                    loading ?

                        gifs.map((_, index) => {
                            return <Skeleton key={index} variant="rectangular" width="auto" height={400} />
                        })
                        :
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
                                        subtitle={item.user ? "@" + item.user?.username : "@anonymous user"}
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
                                        } />
                                </ImageListItem>);

                        })
                }
            </ImageList>
        );
    }

    const noGifs = () => {
        return (
            <div className="noGifs">
                <Avatar>
                    <ImageSearchIcon />
                </Avatar>
                <span>No Results</span>
            </div>
        );
    }

    return (

        gifs.length > 0 ? gifList() : noGifs()

    );
}

export default GifsComponent;


