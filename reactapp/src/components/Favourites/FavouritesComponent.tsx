import React from "react";
import { ToggleButton } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';

import './FavouritesStyles.scss';

type FavouritePros = {
    openUserPopup: () => void;
}

const FavouritesComponent = ({ openUserPopup }: FavouritePros) => {

    return (
        <ToggleButton
            className="favouriteBtn"
            value="check"
            onChange={() => {
                openUserPopup()
            }}
        >
            <span>See my favourites</span>
            <FavoriteIcon />
        </ToggleButton>
    )
}


export default FavouritesComponent;