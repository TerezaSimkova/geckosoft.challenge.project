import React, { useState } from "react";

import SearchbarComponent from "../Serachbar/SearchbarComponent";
import FavouritesComponent from "../Favourites/FavouritesComponent";
import SortComponent from "../SortButton/SortButtonComponent";

import './HeaderSectionStyles.scss';

type HeaderProps = { 
    sortByOldest: () => void;
    sortByNewest: () => void;
    handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
    searchTermValue: string;
}

const HeaderSection = ({ sortByOldest, sortByNewest, searchTermValue,handleSearch }:HeaderProps) => {

    const [selected, setSelected] = useState(false);
    const [sort, setSort] = useState(false);

    return (
        <div className="headerWrapper">
            <SearchbarComponent searchTermValue={searchTermValue} handleSearch={handleSearch} />
            <div className="buttons">
                <SortComponent sort={sort} setSort={setSort} sortByOldest={sortByOldest} sortByNewest={sortByNewest} />
                <FavouritesComponent selected={selected} setSelected={setSelected} />
            </div>
        </div>


    );
}

export default HeaderSection;