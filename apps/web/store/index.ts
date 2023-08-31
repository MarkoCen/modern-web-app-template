import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';

import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { todoSlice } from './todo/todo-slice';

const reducer = combineReducers({
  [todoSlice.name]: todoSlice.reducer,
});

export const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
