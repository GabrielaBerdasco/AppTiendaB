import { PRODUCTS } from "../../data/products"

const INITIAL_STATE = {
    list: PRODUCTS,
    selected: null,
    filteredList: []
}

const ProductReducer = (state = INITIAL_STATE, action) => {
    return state
}

export default ProductReducer