import { loadOrders } from "../../db"

export const LOAD_ORDERS = 'LOAD_ORDERS'

export const persistentOrders = () => {
    return async dispatch => {
        try {
            const result = await loadOrders()
            const orders = result.rows._array
            dispatch({
                type: LOAD_ORDERS,
                payload: orders,
            }) 
        } catch(error) {
            throw error
        }
    }
}