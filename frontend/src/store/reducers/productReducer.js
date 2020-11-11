import { SET_PRODUCTS_ALL, CREATE_NEW_PRODUCT } from '../../helpers/constants'

const initialState = {
    postsAllChron: [],
    newPost: null,
    specificPost: null,
}

export default function productReducer (state = initialState, action) {
    switch (action.type) {
        case SET_PRODUCTS_ALL: {
            const newState = {...state}
            newState.postsAllChron = action.payload
            newState.postsAllChron.reverse()
            return newState
        }
        case CREATE_NEW_PRODUCT: {
            const newState = {...state}
            newState.newPost = action.payload
            return newState
        }
        default: {
            return state
        }
    }
}
