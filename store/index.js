import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import AuthReducer from "./reducers/auth.reducer";
import CategoryReducer from "./reducers/category.reducer";
import OrderReducer from "./reducers/order.reducer";
import ProductReducer from "./reducers/products.reducer";
import ItemsReducer from "./reducers/items.reducer";

const RootReducer = combineReducers({
    categories: CategoryReducer,
    products: ProductReducer,
    orders: OrderReducer,
    auth: AuthReducer,
    items: ItemsReducer
})

export default createStore(RootReducer, applyMiddleware(thunk))