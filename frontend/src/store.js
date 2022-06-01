import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import { productsReducer, newProductReducer, productDetailsReducer, productReducer } from './reducers/productReducers'
import { authReducer, userReducer } from './reducers/userReducers'
import { toppingsReducer, newToppingReducer } from './reducers/toppingReducers';
import { cartReducer } from './reducers/cartReducers'
import { myOrdersReducer, newOrderReducer } from './reducers/orderReducers'

const reducer = combineReducers({
    products: productsReducer,
    productDetails: productDetailsReducer,
    product: productReducer,
    newProduct: newProductReducer,
    newTopping: newToppingReducer,
    toppings: toppingsReducer,
    auth: authReducer,
    user: userReducer,
    cart: cartReducer,
    myOrders: myOrdersReducer,
    newOrder: newOrderReducer
})

let initialState = {
    cart: {
        cartItems: localStorage.getItem('cartItems')
            ? JSON.parse(localStorage.getItem('cartItems'))
            : [],
    }
}

const middlware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlware)))

export default store; 