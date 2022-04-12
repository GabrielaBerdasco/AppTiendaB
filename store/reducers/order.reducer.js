import { ORDERS_BACKUP, LOAD_ORDERS } from "../actions/order.action";

const INITIAL_STATE ={
    list: [],
}

const OrderReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOAD_ORDERS:
            return {
                ...state,
                list: action.payload,
            }
        default:
            return state
    }
}

export default OrderReducer