import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

interface Todo {
  text: string;
  isCompleted: boolean;
}

const initialState = {
  todos: [] as Todo[],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      console.log({ action });
      state.todos.push(action.payload);
    },
  },
});

export const { addTodo } = todoSlice.actions;

export const selectTodos = (state: RootState) => state.todoStore.todos;

export default todoSlice.reducer;
