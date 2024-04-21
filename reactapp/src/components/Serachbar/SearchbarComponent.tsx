import React from "react";
import { IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

import './SearchbarStyles.scss';

type SearchbarProps = {
    searchTermValue: string;
    handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchbarComponent = ({ searchTermValue, handleSearch }: SearchbarProps) => {
    return (
        <div className="searchbar">
            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search Gifs"
                    inputProps={{ 'aria-label': 'search for gifs' }}
                    value={searchTermValue}
                    onChange={handleSearch}
                />
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper>
        </div>
        
    )
}


export default SearchbarComponent;