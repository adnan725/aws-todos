import { configureStore } from '@reduxjs/toolkit';
import todoSlice from './TodoSlice';

const store = configureStore({
    reducer: {
        todos: todoSlice.reducer
    }
})

export const { addTodo, deleteTodo } = todoSlice.actions;

export default store;