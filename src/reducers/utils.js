import { INITIALIZED } from '../constants';

const initialState = {
    loading: false
}

export default function utils(state = initialState, action) {
    switch (action.type) {
        case INITIALIZED:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}