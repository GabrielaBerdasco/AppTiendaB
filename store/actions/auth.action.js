import { SIGNUP_API_URL } from "@env";

export const SIGN_UP = "SIGN_UP"

export const signUp = (email, password) => {
    return async dispatch => {
        try {
            const response = await fetch(SIGNUP_API_URL, {
                method:'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                    returnSecureToken: true
                })
            })

            const data = await response.json()

            dispatch({
                type: SIGN_UP,
                token: data.idToken,
                userId: data.localId
            })
        } catch (error) {
            console.log(error.message);
            dispatch({
                type: SIGN_UP,
                error: error.message
            })
        }
    }
}