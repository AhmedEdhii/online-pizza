import { ADD_TO_CART, REMOVE_ITEM_CART } from '../constants/cartConstants'

export const cartReducer = (state = { cartItems: [], shippingInfo: {} }, action) => {
    switch (action.type) {

        case ADD_TO_CART:
            const item = action.payload;

            return {
                ...state,
                cartItems: [...state.cartItems, item]
            }

            // const isItemExist = state.cartItems.find(i => i.product === item.product)

            // if (isItemExist) {
            //     return {
            //         ...state,
            //         cartItems: state.cartItems.map(i => i.product === isItemExist.product ? item : i)
            //     }
            // } else {
            //     return {
            //         ...state,
            //         cartItems: [...state.cartItems, item]
            //     }
            // }

        case REMOVE_ITEM_CART:
            const cart = [...state.cartItems];
            cart.splice(action.payload, 1)
            return {
                ...state,
                cartItems: cart
            }

        default:
            return state
    }
}