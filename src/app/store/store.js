import { configureStore } from '@reduxjs/toolkit';
import portfolioReducer from './slices/portfolioSlice';

export const store = configureStore({
    reducer: {
        portfolio: portfolioReducer
    },
})