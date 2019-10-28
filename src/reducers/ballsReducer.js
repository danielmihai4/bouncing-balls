import { ADD_BALL, REMOVE_BALL } from '../actions/actions';

const initialState = [];

function ballReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_BALL: 
            return [...state, action.ball];
        case REMOVE_BALL:
            return state.filter(({ id }) => { 
                return id !== action.id });
        default: 
            return state;
    }
}

export default ballReducer;