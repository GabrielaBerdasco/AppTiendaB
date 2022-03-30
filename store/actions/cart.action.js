/* import { API_URL } from "@env" */
import { API_URL } from "../../constants/Database"
export const CONFIRM_CART = 'CONFIRM_CART'

export const confirmCart = (payload, total, location) => {
    return async dispatch => {
        try {
            const response = await fetch(`${API_URL}/ordenDeCompra.json`, {
                method:'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    date: Date.now().toString(),
                    items: payload,
                    total: total,
                    location: {
                        lat: location.lat,
                        lng: location.lng,
                    },
                })
            })
            const result = await response.json()
            console.log(result);
            
            dispatch({
                type: CONFIRM_CART,
                confirm: true,
            })
        } catch (error) {
            console.log(error.message);
            dispatch({
                type: CONFIRM_CART,
                confirm: false,
                error: error.message
            })
        }
    }
}