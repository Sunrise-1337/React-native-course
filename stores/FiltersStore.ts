import { action, makeObservable, observable } from "mobx";
import { FiltersState } from "../models/filters-state.model";

class FiltersStore {
    @observable filters: FiltersState = new FiltersState(false);

    constructor() {
        makeObservable(
            this,
            // {
            //     filters: observable,
            //     toToggleIsNewFilter: action,
            // }
        )
    }

    @action
    toToggleIsNewFilter(): void{
        this.filters = {
            ...this.filters,
            isNew: !this.filters.isNew
        }
    }
}


export default new FiltersStore()