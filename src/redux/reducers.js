// src/redux/reducers.js
import { combineReducers } from 'redux';

const productsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return action.payload;
    default:
      return state;
  }
};

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.payload];
    case 'REMOVE_FROM_CART':
      return state.filter(product => product.id !== action.payload);
    default:
      return state;
  }
};

const authReducer = (state = { isAuthenticated: false, user: null }, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, isAuthenticated: true, user: action.payload };
    case 'LOGOUT':
      return { ...state, isAuthenticated: false, user: null };
    default:
      return state;
  }
};

// Combine all reducers into the root reducer
const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  auth: authReducer,
});

export default rootReducer;
