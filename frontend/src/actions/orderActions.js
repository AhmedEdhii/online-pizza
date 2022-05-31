import axios from 'axios'

import {
    MY_ORDERS_REQUEST,
    MY_ORDERS_SUCCESS,
    MY_ORDERS_FAIL,
    CLEAR_ERRORS
} from '../constants/orderConstants'

// Get currently logged in user orders
export const myOrders = () => async (dispatch) => {
    try {
        dispatch({ type: MY_ORDERS_REQUEST });

        const { data } = await axios.get('/api/myorders')

        dispatch({
            type: MY_ORDERS_SUCCESS,
            payload: data.orders
        })

    } catch (error) {
        dispatch({
            type: MY_ORDERS_FAIL,
            payload: error.response.data.message
        })
    }
}

// Clear Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}