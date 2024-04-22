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
    openUserPopup: () => void;  
    sort: boolean;
    setSort: (value: boolean) => void;
}

const HeaderSection = ({sort, setSort, sortByOldest, sortByNewest, searchTermValue,handleSearch,openUserPopup}:HeaderProps) => {

    return (
        <div className="headerWrapper">
            <div className="search">
                <SearchbarComponent searchTermValue={searchTermValue} handleSearch={handleSearch} />
            </div>
            <div className="buttons">
                <SortComponent
                    sort={sort}
                    setSort={setSort}
                    sortByOldest={sortByOldest}
                    sortByNewest={sortByNewest} />
                <FavouritesComponent
                    openUserPopup={openUserPopup }
                />
            </div>
        </div>


    );
}

export default HeaderSection;