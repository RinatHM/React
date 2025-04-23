import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [
    {
      id: 1,
      name: 'Пример продукта',
      description: 'Это пример описания продукта',
      price: 100,
      available: true
    }
  ]
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const newProduct = {
        id: Date.now(),
        name: action.payload.name,
        description: action.payload.description,
        price: action.payload.price,
        available: action.payload.available || true
      };
      state.products.push(newProduct);
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(product => product.id !== action.payload);
    },
    updateProduct: (state, action) => {
      const index = state.products.findIndex(product => product.id === action.payload.id);
      if (index !== -1) {
        state.products[index] = { ...state.products[index], ...action.payload };
      }
    },
    toggleAvailability: (state, action) => {
      const product = state.products.find(product => product.id === action.payload);
      if (product) {
        product.available = !product.available;
      }
    }
  }
});

export const { addProduct, deleteProduct, updateProduct, toggleAvailability } = productsSlice.actions;
export default productsSlice.reducer;