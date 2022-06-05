import axios from 'axios'

import {
    MY_ORDERS_REQUEST,
    MY_ORDERS_SUCCESS,
    MY_ORDERS_FAIL,
    MY_LATEST_ORDERS_REQUEST,
    MY_LATEST_ORDERS_SUCCESS,
    MY_LATEST_ORDERS_FAIL,
    ALL_ORDERS_REQUEST,
    ALL_ORDERS_SUCCESS,
    ALL_ORDERS_FAIL,
    UPDATE_ORDER_SUCCESS,
    UPDATE_ORDER_REQUEST,
    UPDATE_ORDER_FAIL,
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_SUCCESS,
    CREATE_ORDER_FAIL,
    ORDER_DETAILS_REQUEST,
    ORDER_DETAILS_SUCCESS,
    ORDER_DETAILS_FAIL,
    CLEAR_ERRORS
} from '../constants/orderConstants'



// Get my latest order
export const getmyLatestOrder = () => async (dispatch) => {
    try {

        dispatch({ type: MY_LATEST_ORDERS_REQUEST });

        const { data } = await axios.get(`/api/myorder`)

        console.log(data)
        dispatch({
            type: MY_LATEST_ORDERS_SUCCESS,
            payload: data.order
        })

    } catch (error) {
        dispatch({
            type: MY_LATEST_ORDERS_FAIL,
            payload: error.response.data.message
        })
    }
}

// Get order details - admin
export const getOrderDetails = (id) => async (dispatch) => {
    try {

        dispatch({ type: ORDER_DETAILS_REQUEST });

        const { data } = await axios.get(`/api/order/${id}`)

        dispatch({
            type: ORDER_DETAILS_SUCCESS,
            payload: data.order
        })

    } catch (error) {
        dispatch({
            type: ORDER_DETAILS_FAIL,
            payload: error.response.data.message
        })
    }
}

// update order
export const updateOrder = (id, orderData) => async (dispatch) => {
    try {

        dispatch({ type: UPDATE_ORDER_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.put(`/api/admin/order/${id}`, orderData, config)

        dispatch({
            type: UPDATE_ORDER_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: UPDATE_ORDER_FAIL,
            payload: error.response.data.message
        })
    }
}

// Get all orders
export const allOrders = () => async (dispatch) => {
    try {

        dispatch({ type: ALL_ORDERS_REQUEST });

        const { data } = await axios.get(`/api/admin/allorders`)

        dispatch({
            type: ALL_ORDERS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ALL_ORDERS_FAIL,
            payload: error.response.data.message
        })
    }
}


export const createOrder = (order) => async (dispatch, getState) => {
    try {

        dispatch({ type: CREATE_ORDER_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        console.log("order" + order)
        const { data } = await axios.post('/api/neworder', order, config)
        console.log("-------------------------------------------------------------------")
        console.log("data" + data)
        // console.log(data)
        dispatch({
            type: CREATE_ORDER_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: CREATE_ORDER_FAIL,
            payload: error.response.data.message
        })
    }
}

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