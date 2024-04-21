import React, { useState } from "react";

import SearchbarComponent from "../Serachbar/SearchbarComponent";
import FavouritesComponent from "../Favourites/FavouritesComponent";
import SortComponent from "../SortButton/SortButtonComponent";

import { Gif } from "../../api/proxy";
import './HeaderSectionStyles.scss';

type HeaderProps = { 
    sortByOldest: () => void;
    sortByNewest: () => void;
    handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
    searchTermValue: string;
    getAllFavouriteGifs: (value: string) => void;
}

const HeaderSection = ({ sortByOldest, sortByNewest, searchTermValue,handleSearch,getAllFavouriteGifs}:HeaderProps) => {

    const [selected, setSelected] = useState(false);
    const [sort, setSort] = useState(false);

    return (
        <div className="headerWrapper">
            <div className="search">
                <SearchbarComponent searchTermValue={searchTermValue} handleSearch={handleSearch} />
            </div>
            <div className="buttons">
                <SortComponent sort={sort} setSort={setSort} sortByOldest={sortByOldest} sortByNewest={sortByNewest} />
                <FavouritesComponent selected={selected} setSelected={setSelected} getAllFavouriteGifs={getAllFavouriteGifs } />
            </div>
        </div>


    );
}

export default HeaderSection;