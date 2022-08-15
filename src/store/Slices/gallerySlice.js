import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    images: [],
    category: 'All',
    isLoading: true,
}

const gallerySlice = createSlice({
    name: 'gallery',
    initialState,
});

console.log(gallerySlice);

export default gallerySlice.reducer;