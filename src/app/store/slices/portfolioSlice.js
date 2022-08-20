import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    images: [],
    category: 'All',
    isLoading: true,
}

const portfolioSlice = createSlice({
    name: 'portfolio',
    initialState,
    reducers:{
        filterImages: (state,{ payload }) => {
            if(payload.length > 0){
                state.images=payload;
            }
        }
    }
});

export const { filterImages } = portfolioSlice.actions;

export default portfolioSlice.reducer;