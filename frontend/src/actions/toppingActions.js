import axios from 'axios';

import {
    ALL_TOPPINGS_REQUEST,
    ALL_TOPPINGS_SUCCESS,
    ALL_TOPPINGS_FAIL,
    CLEAR_ERRORS

} from '../constants/toppingConstants'

export const getToppings = () => async (dispatch) => {
    try {

        dispatch({ type: ALL_TOPPINGS_REQUEST })

        const { data } = await axios.get(`/api/toppings`)

        dispatch({
            type: ALL_TOPPINGS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ALL_TOPPINGS_FAIL,
            payload: error.response.data.error
        })
    }
}

// Clear Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}