// action creator
import baseUrl from "../../helpers/baseUrl";

export const setCartData = (type, data) => {
    return {
        type: type,
        payload: data,
    }
}

export const cartAction = (urlPath, method, type, body) => async (dispatch, getState) => {
    const { authReducer:{ token } } = getState();
    const url = baseUrl + urlPath;
    const config = {
        method: method,
        headers: new Headers({
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        }),
        body: body
    };

    const response = await fetch(url, config).catch((error) => console.log('in post fetch:', error));
    const data = await response.json();

    dispatch(setCartData(type, data));
};
