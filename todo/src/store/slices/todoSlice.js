import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    todos:[]
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) =>{
            state.todos.push(action.payload)
        },
        deleteTodo: (state, action) =>{
            state.todos = state.todos.filter(todo=> todo.id !== action.payload)
        },
        toggleTodo: (state, action)=>{

        }
    }
})

export const { addTodo, deleteTodo, toggleTodo } = todoSlice.actions
export default todoSlice.reducer