import { SET_PRODUCTS_ALL, CREATE_NEW_PRODUCT } from '../../helpers/constants'

const initialState = {
    productsAll: [],
    newProduct: [],
}

export default function productReducer (state = initialState, action) {
    switch (action.type) {
        case SET_PRODUCTS_ALL: {
            const newState = {...state}
            newState.productsAll = action.payload
            newState.productsAll.reverse()
            return newState
        }
        case CREATE_NEW_PRODUCT: {
            const newState = {...state}
            newState.newProduct = action.payload
            return newState
        }
        default: {
            return state
        }
    }
}
