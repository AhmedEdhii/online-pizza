import axios from 'axios';

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


export const newTopping = (toppingData) => async (dispatch) => {
    try {

        dispatch({ type: NEW_TOPPING_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }

        const { data } = await axios.post(`/api/admin/newtopping`, toppingData, config)

        dispatch({
            type: NEW_TOPPING_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: NEW_TOPPING_FAIL,
            payload: error.response.data.error
        })
    }
}

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