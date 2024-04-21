import React from "react";
import { ToggleButton } from "@mui/material";
import FilterListIcon from '@mui/icons-material/FilterList';

type SortPros = {
    sort: boolean;
    setSort: (value: boolean) => void;
}

const SortComponent = ({ sort, setSort }: SortPros) => {

    return (
        <ToggleButton
            value="check"
            selected={sort}
            onChange={() => {
                setSort(!sort);
            }}
        >
            <FilterListIcon />
        </ToggleButton>
    )
}


export default SortComponent;