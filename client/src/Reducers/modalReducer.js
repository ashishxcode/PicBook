export const ModalReducer = (state = false, action) => {
	switch (action.type) {
		default:
			return state;

		case 'SHOW_MODAL':
			return action.payload;
	}
};
