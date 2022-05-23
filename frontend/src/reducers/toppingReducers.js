import {
    ALL_TOPPINGS_REQUEST,
    ALL_TOPPINGS_SUCCESS,
    ALL_TOPPINGS_FAIL,
    CLEAR_ERRORS

} from '../constants/toppingConstants'

export const toppingsReducer = (state = { toppings: [] }, action) => {
    switch (action.type) {

        case ALL_TOPPINGS_REQUEST:
            return {
                loading: true,
                toppings: []
            }

        case ALL_TOPPINGS_SUCCESS:
            return {
                loading: false,
                toppings: action.payload.toppings,
                toppingsCount: action.payload.count,
            }

        case ALL_TOPPINGS_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
}