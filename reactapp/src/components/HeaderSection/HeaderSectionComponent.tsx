import React, { useState } from "react";

import SearchbarComponent from "../Serachbar/SearchbarComponent";
import FavouritesComponent from "../Favourites/FavouritesComponent";
import SortComponent from "../SortButton/SortButtonComponent";

import './HeaderSectionStyles.scss';


const HeaderSection = () => {

    const [selected, setSelected] = useState(false);
    const [sort, setSort] = useState(false);

    return (
        <div className="headerWrapper"> 
            <SearchbarComponent />
            <SortComponent sort={sort} setSort={setSort } />
            <FavouritesComponent selected={selected} setSelected={setSelected} />
        </div>
       
    );
}

export default HeaderSection;