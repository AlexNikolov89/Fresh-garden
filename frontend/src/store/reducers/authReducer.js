import { SET_TOKEN, LOGOUT_UNSET_TOKEN } from '../../helpers/constants'

const initialState = {
    token: localStorage.getItem("token")
}

export default function authReducer (state = initialState, action) {
    switch (action.type) {
        case SET_TOKEN: {
            const newState = {...state}
            newState.token = action.payload
            return newState
        }
        case LOGOUT_UNSET_TOKEN: {
            const newState = {...state}
            newState.token = null
            localStorage.removeItem('token');
            return newState
        }
        default: {
            return state
        }
        case USER_LOGOUT : {
            console.log("clearing local storage")
            console.log(localStorage)
            localStorage.clear();
            let state = {...initialState};
            return state;

        }
    }
}
