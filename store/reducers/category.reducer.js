import { CATEGORIES } from "../../data/categories"
import { SELECT_CATEGORY } from "../actions/category.action"

const INITIAL_STATE = {
    list: CATEGORIES,
    selected: null,
}

const CategoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SELECT_CATEGORY:
            const index = state.list.findIndex(cat => cat.id === action.categoryId)
            if (index === -1) {
                return state
            } else {
                return {
                    ...state,
                    selected: state.list[index]
                }
            }
        default:
            return state;
    }
}

export default CategoryReducer