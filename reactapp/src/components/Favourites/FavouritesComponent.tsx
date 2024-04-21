import React from "react";
import { ToggleButton } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';

import './FavouritesStyles.scss';

type FavouritePros = {
    selected: boolean;
    setSelected: (value: boolean) => void;
}

const FavouritesComponent = ({ selected, setSelected }: FavouritePros) => {

    return (
        <ToggleButton
            className="favouriteBtn"
            value="check"
            selected={selected}
            onChange={() => {
                setSelected(!selected);
            }}
        >
            <span>See my favourites</span>
            <FavoriteIcon />
        </ToggleButton>
    )
}


export default FavouritesComponent;