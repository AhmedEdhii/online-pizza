import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import { productsReducer, productDetailsReducer } from './reducers/productReducers'
import { authReducer, userReducer } from './reducers/userReducers'
import { toppingsReducer } from './reducers/toppingReducers';

const reducer = combineReducers({
    products: productsReducer,
    productDetails: productDetailsReducer,
    toppings: toppingsReducer,
    auth: authReducer,
    user: userReducer
})

let initialState = {}

const middlware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlware)))

export default store; 