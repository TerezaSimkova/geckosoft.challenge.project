import React from "react";
import { ToggleButton } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';

type FavouritePros = {
    selected: boolean;
    setSelected: (value: boolean) => void;
}

const FavouritesComponent = ({selected,setSelected }: FavouritePros) => {

    return (
        <ToggleButton
                value="check"
                selected={selected}
                onChange={() => {
                    setSelected(!selected);
                }}
            >
                 <FavoriteIcon />
         </ToggleButton>
    )
}


export default FavouritesComponent;