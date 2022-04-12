import { API_URL, API_KEY } from "@env"
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

            const adressResponse = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=${API_KEY}`)

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

            const adressData = await adressResponse.json()
            const adress = adressData['results'][0]['formatted_address']

            const data = await response.json()
            
            const result = await insertOrders(
                date,
                total,
                adress
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