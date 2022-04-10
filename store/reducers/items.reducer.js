import { ADD_ITEM, REMOVE_ITEM, CONFIRM_REMOVE, REMOVE_ALL_ITEMS } from "../actions/items.action";

const initialState = {
    items: [],
    selected: null,
}

const ItemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            if (state.items.find(item => item.id === action.payload.id)) {
                return {
                    ...state,
                    items: state.items.map(item => {
                        if (item.id === action.payload.id) {
                            return {
                                ...item,
                                quantity: item.quantity + 1,
                                price: item.price + action.payload.price
                            }
                        }
                        return item
                    })
                }
            } else {
                return {
                    ...state,
                    items: [...state.items, {...action.payload, quantity: 1}]
                };
            }
        case REMOVE_ITEM:
            return {
                ...state,
                selected: state.items.find(item => item.id == action.payload)
            };
        case CONFIRM_REMOVE:
            return {
                ...state,
                items: state.items.filter(item => item.id !== state.selected.id),
                selected: null
            };
        case REMOVE_ALL_ITEMS:
            return {
                ...state,
                items: [],
                selected: null
            };
        default:
            return state;
    }
}

export default ItemsReducer;