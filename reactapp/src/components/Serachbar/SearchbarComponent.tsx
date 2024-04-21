import React from "react";
import { IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';


type SearchbarProps = {
    searchTermValue: string;
    handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchbarComponent = ({ searchTermValue,handleSearch }: SearchbarProps) => {
    return (

        <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
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
    )
}


export default SearchbarComponent;