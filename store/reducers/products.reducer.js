import { PRODUCTS } from "../../data/products"
import { SELECT_PRODUCT } from "../actions/products.action"

const INITIAL_STATE = {
    list: PRODUCTS,
    selected: null,
}

const ProductReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SELECT_PRODUCT:
            return {
                ...state,
                selected: state.list.find(p => p.id === action.productId)
            }
        default:
            return state
    }
}

export default ProductReducer