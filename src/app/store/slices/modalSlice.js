import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	image: {},
	visible: false,
};

const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		defineImage: {
			reducer: (state, { payload }) => {
				return {
					...state,
					image: payload,
				};
			},
		},
		isVisible: {
            reducer: (state, { payload }) => {
				return {
					...state,
					visible: payload,
				};
			},
        },
	},
});

export const { defineImage, isVisible } = modalSlice.actions;

export default modalSlice.reducer;
