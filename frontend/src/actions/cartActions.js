import axios from 'axios'
import { ADD_TO_CART, REMOVE_ITEM_CART } from '../constants/cartConstants'

export const addItemToCart = (id, quantity, price, size, toppingids) => async (dispatch, getState) => {

const toppings = []

    if(toppingids.length != 0) {
        for (let i = 0; i < toppingids.length; i++) {
            console.log(toppingids[i]);
            const { data } = await axios.get(`/api/topping/${toppingids[i]}`)
            console.log(data);
            toppings.push(data)
            console.log(toppings);
        }
    }

    const { data } = await axios.get(`/api/product/${id}`)

    dispatch({
        type: ADD_TO_CART,
        payload: { 
            product: data.product._id,
            name: data.product.name,
            category: data.product.category,
            description: data.product.description,
            price: price,
            size: size,
            toppings: toppings,
            // PizzaDetails: data.product.PizzaDetails,
            // BeverageDetails: data.product.BeverageDetails,
            // SauceDetails: data.product.SauceDetails,
            image: data.product.url,
            quantity
        }
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeItemFromCart = (id) => async (dispatch, getState) => {

    dispatch({
        type: REMOVE_ITEM_CART,
        payload: id
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))

}