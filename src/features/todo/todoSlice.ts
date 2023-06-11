import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface TodoState {
  id: number;
  title: string;
  body: string;
}

const initialState: TodoState[] = [];

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoState>) => {
      state.push(action.payload);
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      // Immer does not detect the change if we try to entirely create a new state
      // state = state.filter((todo) => {return todo.id !== action.payload;}); DOES NOT WORK!

      return state.filter((todo) => {
        return todo.id !== action.payload;
      });
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
