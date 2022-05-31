import {
    ALL_TOPPINGS_REQUEST,
    ALL_TOPPINGS_SUCCESS,
    ALL_TOPPINGS_FAIL,
    NEW_TOPPING_REQUEST,
    NEW_TOPPING_SUCCESS,
    NEW_TOPPING_RESET,
    NEW_TOPPING_FAIL,
    CLEAR_ERRORS

} from '../constants/toppingConstants'

export const newToppingReducer = (state = { topping: {} }, action) => {
    switch (action.type) {

        case NEW_TOPPING_REQUEST:
            return {
                ...state,
                loading: true
            }

        case NEW_TOPPING_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                product: action.payload.product
            }

        case NEW_TOPPING_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case NEW_TOPPING_RESET:
            return {
                ...state,
                success: false
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}


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