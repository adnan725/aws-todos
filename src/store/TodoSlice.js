import { createSlice } from '@reduxjs/toolkit';

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

export default todoSlice