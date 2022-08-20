import { createReducer } from "@reduxjs/toolkit";
import { filterImages } from "../actions/actions";

const initialState = {
    images: [],
    loadImagesInProgress:false,
    loadImagesSuccess:false,
    loadImagesFailure:false,
}

export const imagesReducer = createReducer(initialState, (builder)=>{
    builder.addCase(filterImages, (state,action)=>{
		state.images.push(action.payload);
	});
});