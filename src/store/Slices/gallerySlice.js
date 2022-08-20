import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    images: [],
    category: 'All',
    isLoading: true,
}

const gallerySlice = createSlice({
    name: 'gallery',
    initialState,
    reducers:{
        filterImages: (state,{ payload }) => {
            if(payload.length > 0){
                state.images=payload;
            }
        }
    }
});

export const { filterImages } = gallerySlice.actions;

export default gallerySlice.reducer;