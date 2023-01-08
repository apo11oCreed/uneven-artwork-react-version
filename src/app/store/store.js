import { configureStore } from '@reduxjs/toolkit';
import portfolioReducer from './slices/portfolioSlice';
import modalReducer from './slices/modalSlice';

const reducer = {
  portfolio: portfolioReducer,
  modal: modalReducer,
}

export const store = configureStore({
    reducer,
})