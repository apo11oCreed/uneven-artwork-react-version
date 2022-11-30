import { configureStore } from '@reduxjs/toolkit';
import portfolioReducer from './slices/portfolioSlice';
import modalReducer from './slices/modalSlice';

export const store = configureStore({
    reducer: {
        portfolio: portfolioReducer,
        modal: modalReducer,
    },
})