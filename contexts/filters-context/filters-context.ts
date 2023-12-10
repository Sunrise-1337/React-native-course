import React from "react";
import { FiltersState } from "../../models/filters-state.model";

export const FiltersContext = React.createContext({
    filtersState: new FiltersState(),
    setFiltersState: null
})

interface FiltersContextInterface {
    filtersState: FiltersState,
    setFiltersState: React.Dispatch<React.SetStateAction<FiltersState>>
}