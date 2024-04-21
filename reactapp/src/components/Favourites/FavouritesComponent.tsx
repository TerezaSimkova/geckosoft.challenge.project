import React from "react";
import { ToggleButton } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';

import { Gif } from "../../api/proxy";
import './FavouritesStyles.scss';

type FavouritePros = {
    selected: boolean;
    setSelected: (value: boolean) => void;
    getAllFavouriteGifs: (value: string) => void;
}

const FavouritesComponent = ({ selected, setSelected, getAllFavouriteGifs }: FavouritePros) => {

    const username = "Tereya";
    return (
        <ToggleButton
            className="favouriteBtn"
            value="check"
            selected={selected}
            onChange={() => {
                getAllFavouriteGifs(username);
            }}
        >
            <span>See my favourites</span>
            <FavoriteIcon />
        </ToggleButton>
    )
}


export default FavouritesComponent;