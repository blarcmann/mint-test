import { combineReducers } from 'redux';
import utilityReducer from './utils';

export default combineReducers({
    utils: utilityReducer,
});