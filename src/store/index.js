import { configureStore, createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'name',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload)
        },
        deleteTodo: (state, action) => {
            return state.filter(todo => todo.id !== action.payload)
        }
    }
})

const store = configureStore({
    reducer: {
        todos: todoSlice.reducer
    }
})

export const { addTodo, deleteTodo } = todoSlice.actions;

export default store;