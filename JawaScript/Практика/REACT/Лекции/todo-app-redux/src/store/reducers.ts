import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Todo {
  id: number;
  description: string;
  isCompleted: boolean;
}

type FilterType = 'ALL' | 'COMPLETED' | 'ACTIVE';

interface TodoState {
  items: Todo[];
  filter: FilterType;
}

const initialState: TodoState = {
  items: [],
  filter: 'ALL',
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Omit<Todo, 'id' | 'isCompleted'>>) => {
      const newTodo: Todo = {
        id: Date.now(),
        description: action.payload.description,
        isCompleted: false,
      };
      state.items.push(newTodo);
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(todo => todo.id !== action.payload);
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.items.find(todo => todo.id === action.payload);
      if (todo) {
        todo.isCompleted = !todo.isCompleted;
      }
    },
    setFilter: (state, action: PayloadAction<FilterType>) => {
      state.filter = action.payload;
    },
  },
});

export const { addTodo, deleteTodo, toggleTodo, setFilter } = todoSlice.actions;
export default todoSlice.reducer;