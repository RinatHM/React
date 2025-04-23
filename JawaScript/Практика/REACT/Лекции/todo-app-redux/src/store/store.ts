// store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './reducers';

const store = configureStore({
  reducer: {
    todos: todoReducer, // теперь редюсер находится под ключом 'todos'
  },
  // Опционально: можно добавить middleware и другие настройки
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  // devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;