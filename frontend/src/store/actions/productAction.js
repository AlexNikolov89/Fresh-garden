// action creator
import baseUrl from "../../helpers/baseUrl";

export const setProductData = (type, data) => {
    return {
        type: type,
        payload: data,
    }
}

export const productAction = (urlPath, method, type, body) => async (dispatch, getState) => {
    const { authReducer:{ token } } = getState();
    const url = baseUrl + urlPath;

    // creating fetch config header depending on request type
    const createConfig = () => {
        if (method !== 'GET') {
            return {
                method: method,
                headers: new Headers({
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                }),
                body: body
            }
        } else {
            return {
                method: method,
                headers: new Headers({
                    'Content-Type': 'application/json',
                }),
                body: body
            }
        }
    }
    const config = createConfig();

    const response = await fetch(url, config);
    const data = await response.json();
    console.log("in da productAction, data", response)

    dispatch(setProductData(type, data));
};
