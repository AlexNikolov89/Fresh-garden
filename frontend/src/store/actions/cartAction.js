// action creator
import baseUrl from "../../helpers/baseUrl";
import {NOT_LOGGED_IN, RESET_NOT_LOGGED_IN, TOGGLE_CART_VIEW} from "../../helpers/constants";

export const setCartData = (type, data) => {
            console.log("in da cartAction payload", data)

    return {
        type: type,
        payload: data,
    }
}

export const cartAction = (urlPath, method, type, body) => async (dispatch, getState) => {
    const { authReducer:{ token } } = getState();
    console.log("in cartAction, TOKEN", token)
    const url = baseUrl + urlPath;
    const config = {
        method: method,
        credentials: 'same-origin',
        headers: new Headers({
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
            // 'httpOnly': 'false',
            // 'Access-Control-Allow-Headers': '*',
            // 'Access-Control-Allow-Origin': '*',
            // 'httpOnlyCookies'
            // 'Cookie': '*',

        }),
        body: body,
    };
    console.log("in da cartAction, config ->", config)

    if (type === TOGGLE_CART_VIEW) {
        dispatch(setCartData(type));
    } else if (type === RESET_NOT_LOGGED_IN) {
        dispatch(setCartData(type));
    } else {
        const response = await fetch(url, config).catch((error) => console.log('in post fetch:', error));
        const data = await response.json();
        console.log("in da cartAction, data ->", data)
        if (data.code === 'token_not_valid') {
            dispatch(setCartData(NOT_LOGGED_IN));
        } else {
            dispatch(setCartData(type, data));
        }
    }
};
