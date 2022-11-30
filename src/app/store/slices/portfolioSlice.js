import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    images: [],
    category: 'All',
    isLoading: true,
}

const portfolioSlice = createSlice({
    name: 'portfolio',
    initialState,
    reducers: {
        filterImages: {
            reducer: (state, { payload }) => {
                if (payload.length > 0) {
                    return {
                        ...state,
                        images: payload,
                    }
                }
            }
        },
        changeCategory: {
            reducer: (state, {payload}) => {
                return {
                    ...state,
                    category: payload,
                }
            }
        }
    }
});

export const { filterImages, changeCategory } = portfolioSlice.actions;

export default portfolioSlice.reducer;
