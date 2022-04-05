import { API_URL } from "@env"
import { loadOrders } from "../../db"

export const GET_ORDERS = 'GET_ORDERS'
export const LOAD_ORDERS = 'LOAD_ORDERS'

export const getOrders = () => {
    return async dispatch => {
        try {
            dispatch({
                type: GET_ORDERS,
                status: 'loading'
            })

            const response = await fetch(`${API_URL}/ordenDeCompra.json`)

            const result = await response.json()

            const orders = Object.keys(result).map(key => ({
                ...result[key],
                id: key,
                })
            )

            dispatch({
                type: GET_ORDERS,
                payload: orders,
                status: 'success'
            })

        } catch (error) {
            console.log(error.message);
            dispatch({
                type: GET_ORDERS,
                status: 'error'
            })
        }
    }
}

export const persistentOrders = () => {
    return async dispatch => {
        try {
            const result = await loadOrders()
            
            dispatch({
                type: LOAD_ORDERS,
                payload: result.rows._array,
            }) 
        } catch(error) {
            throw error
        }
    }
}