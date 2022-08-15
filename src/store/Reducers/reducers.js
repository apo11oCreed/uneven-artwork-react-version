const initialState = {
	imagesShown:'all',
    page
};

function reducer(state = initialState, action) {
	switch (action.type) {
		case CHANGE_USERNAME:
			return {
				...state,
				username: action.username,
			}
        default:
            console.log(state);
            return state
	}
}

export default reducer;
