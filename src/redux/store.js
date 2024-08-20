import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers'; // Make sure to create and import your root reducer

const store = configureStore({
  reducer: rootReducer,
  // Uncomment the next line to enable Redux DevTools in production
  // devTools: process.env.NODE_ENV !== 'production',
});

export default store;
