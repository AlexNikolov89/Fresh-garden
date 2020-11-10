import { SET_PRODUCTS_ALL, TOGGLE_CART_VIEW } from '../../helpers/constants'

const initialState = {
    productsInCart: [],
    viewCart: false,
}

export default function cartReducer (state = initialState, action) {
    switch (action.type) {
        case SET_PRODUCTS_ALL: {
            const newState = {...state}
            newState.productsInCart = action.payload
            newState.productsInCart.reverse()
            return newState
        }
        case TOGGLE_CART_VIEW: {
            const newState = {...state}
            newState.viewCart = !state.viewCart
            return newState
        }
        default: {
            return state
        }
    }
}
