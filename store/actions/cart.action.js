import { API_URL } from "@env"
import { insertOrders } from "../../db"

export const CONFIRM_CART = 'CONFIRM_CART'

export const confirmCart = (payload, total, location) => {
    return async dispatch => {
        const date = new Date().toLocaleDateString()
        try {
            dispatch({
                type: CONFIRM_CART,
                status: 'loading'
            })

            const response = await fetch(`${API_URL}/ordenDeCompra.json`, {
                method:'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    date: date,
                    items: payload,
                    total: total,
                    location: {
                        lat: location.lat,
                        lng: location.lng,
                    },
                })
            })
            const data = await response.json()
            
            const result = await insertOrders(
                date,
                total,
                location.lat,
                location.lng
            )

            dispatch({
                type: CONFIRM_CART,
                confirm: true,
                status: 'success'
            })
            
        } catch (error) {
            console.log(error.message);
            dispatch({
                type: CONFIRM_CART,
                error: error.message,
                status: 'error'
            })
        }
    }
}