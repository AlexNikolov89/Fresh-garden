import { SET_TOKEN, USER_LOGOUT } from '../../helpers/constants'

const initialState = {
    token: null, //localStorage.getItem("token")
}

export default function authReducer (state = initialState, action) {
    switch (action.type) {
        case SET_TOKEN: {
            const newState = {...state}
            newState.token = action.payload
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
