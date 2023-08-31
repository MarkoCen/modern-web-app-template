import { createSlice } from '@reduxjs/toolkit';

import type { Todo } from '@gql/types';
import type { PayloadAction, SliceCaseReducers } from '@reduxjs/toolkit';

interface TodoSliceState {
  todos: Todo[];
}

const initialState: TodoSliceState = {
  todos: [],
};

export const todoSlice = createSlice<
  TodoSliceState,
  SliceCaseReducers<TodoSliceState>
>({
  name: 'todo',
  initialState,
  reducers: {
    setTodos: (state, action: PayloadAction<Todo[]>) => {
      state.todos = action.payload;
    },
  },
});
