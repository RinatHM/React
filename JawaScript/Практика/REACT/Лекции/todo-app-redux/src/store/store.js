import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsSlice';

const loggerMiddleware = (store) => (next) => (action) => {
  // Логируем только в development среде
  if (process.env.NODE_ENV === 'development') {
    console.groupCollapsed(`Redux Action: ${action.type}`);
    console.log('Payload:', action.payload);
    console.log('State Before:', store.getState());
    
    const result = next(action);
    
    console.log('State After:', store.getState());
    console.groupEnd();
    return result;
  }
  return next(action);
};

export default configureStore({
  reducer: {
    products: productsReducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(loggerMiddleware)
});