import React from "react";
import { ToggleButton } from "@mui/material";
import FilterListIcon from '@mui/icons-material/FilterList';

import './SortsButtonStyles.scss';

type SortPros = {
    sort: boolean;
    setSort: (value: boolean) => void;
}

const SortComponent = ({ sort, setSort }: SortPros) => {

    return (
        <div className="sortWrapper">
            <ToggleButton
                value="check"
                selected={sort}
                onChange={() => {
                    setSort(!sort);
                }}
            >
                <span>Sort by ascending</span>
                <FilterListIcon />
            </ToggleButton>
            <ToggleButton
                value="check"
                selected={sort}
                onChange={() => {
                    setSort(!sort);
                }}
            >
                <span>Sort by descending</span>
                <FilterListIcon />
            </ToggleButton>
        </div>

    )
}


export default SortComponent;