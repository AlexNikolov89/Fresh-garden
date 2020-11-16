import {GET_USER} from '../../helpers/constants';

const initialState = {
    author: {
        first_name: '',
        last_name: '',
        avatar: '',
        location: '',
        description: '',
        phone: '',
        city: '',
        zip: '',
        email: '',
        address: '',
    },
    myProducts: [],
    error: null
};

export const userProfileReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_USER: {
            return {
                ...state,
                meData: {...action.payload},
                error: null
            }
        }
        default:
            return state
    }
}