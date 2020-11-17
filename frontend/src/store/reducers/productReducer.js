import {SET_PRODUCTS_ALL, CREATE_NEW_PRODUCT, SET_PRODUCTS_SUBSET} from '../../helpers/constants'

const initialState = {
    productsAll: [],
    newProduct: [],
}

export default function productReducer (state = initialState, action) {
    switch (action.type) {
        case SET_PRODUCTS_ALL: {
            const newState = {...state}
            newState.productsAll = action.payload
            newState.productsSubset = action.payload
            newState.productsAll.reverse()
            newState.productsSubset.reverse()
            return newState
        }
        case SET_PRODUCTS_SUBSET: {
            const newState = {...state}
            console.log("productReducer SUBSET, payload", action.payload.length)
            if (action.payload && action.payload.length !== 0) {
                console.log("productReducer: INSIDE IF, payload")
                newState.productsSubset = action.payload
                newState.productsSubset.reverse()
                return newState
            } else return newState
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
