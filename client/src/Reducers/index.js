import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { ModalReducer } from './modalReducer';

export const rootReducer = combineReducers({
	user: userReducer,
	modal: ModalReducer,
});
