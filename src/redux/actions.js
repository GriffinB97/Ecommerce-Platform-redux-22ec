// src/redux/actions.js

// Product Actions
export const setProducts = (products) => ({
    type: 'SET_PRODUCTS',
    payload: products,
  });
  
  // Cart Actions
  export const addToCart = (product) => ({
    type: 'ADD_TO_CART',
    payload: product,
  });
  
  export const removeFromCart = (productId) => ({
    type: 'REMOVE_FROM_CART',
    payload: productId,
  });
  
  // Auth Actions
  export const login = (userData) => ({
    type: 'LOGIN',
    payload: userData,
  });
  
  export const logout = () => ({
    type: 'LOGOUT',
  });
  