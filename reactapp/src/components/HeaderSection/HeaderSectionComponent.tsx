import React, { useState } from "react";

import SearchbarComponent from "../Serachbar/SearchbarComponent";
import FavouritesComponent from "../Favourites/FavouritesComponent";
import SortComponent from "../SortButton/SortButtonComponent";

import './HeaderSectionStyles.scss';

type HeaderProps = { 
    sortByOldest: () => void;
    sortByNewest: () => void;
}

const HeaderSection = ({ sortByOldest,sortByNewest }:HeaderProps) => {

    const [selected, setSelected] = useState(false);
    const [sort, setSort] = useState(false);

    return (
        <div className="headerWrapper">
            <SearchbarComponent />
            <div className="buttons">
                <SortComponent sort={sort} setSort={setSort} sortByOldest={sortByOldest} sortByNewest={sortByNewest} />
                <FavouritesComponent selected={selected} setSelected={setSelected} />
            </div>
        </div>


    );
}

export default HeaderSection;