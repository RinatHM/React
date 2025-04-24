// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import tasksReducer from '../features/tasks/tasksSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, tasksReducer);

export const store = configureStore({
  reducer: {
    tasks: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);




// import { configureStore } from '@reduxjs/toolkit';
// import tasksReducer from '../features/tasks/tasksSlice';

// export const store = configureStore({
//   reducer: {
//     tasks: tasksReducer,
//   },
// });




// import { configureStore } from '@reduxjs/toolkit';
// import createSagaMiddleware from 'redux-saga';
// import usersReducer from '../features/users/usersSlice';
// import usersSaga from '../features/users/usersSaga';

// const sagaMiddleware = createSagaMiddleware();

// const store = configureStore({
//   reducer: {
//     users: usersReducer
//   },
//   middleware: (getDefaultMiddleware) => 
//     getDefaultMiddleware().concat(sagaMiddleware)
// });

// sagaMiddleware.run(usersSaga);
// console.log('Initial store state:', store.getState());
// export default store;


// import { configureStore } from '@reduxjs/toolkit';
// import productsReducer from './productsSlice';

// const loggerMiddleware = (store) => (next) => (action) => {
//   // Логируем только в development среде
//   if (process.env.NODE_ENV === 'development') {
//     console.groupCollapsed(`Redux Action: ${action.type}`);
//     console.log('Payload:', action.payload);
//     console.log('State Before:', store.getState());
    
//     const result = next(action);
    
//     console.log('State After:', store.getState());
//     console.groupEnd();
//     return result;
//   }
//   return next(action);
// };

// export default configureStore({
//   reducer: {
//     products: productsReducer
//   },
//   middleware: (getDefaultMiddleware) => 
//     getDefaultMiddleware().concat(loggerMiddleware)
// });