// src/features/users/usersSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  loading: false,
  error: null
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    fetchUsersRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchUsersSuccess: (state, action) => {
      console.log('Reducer: saving data', action.payload.length); // Добавьте лог
      state.loading = false;
      state.data = action.payload; // Важно: сохраняем данные
    },
    fetchUsersFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }
  }
});

export const { 
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersFailure
} = usersSlice.actions;

export default usersSlice.reducer;