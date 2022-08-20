import { configureStore } from '@reduxjs/toolkit';
import galleryReducer from './Slices/gallerySlice';

export const store = configureStore({
    reducer: {
        gallery: galleryReducer
    },
})