import { SET_MOUSE_X_COORDINATE, SET_MOUSE_Y_COORDINATE } from '../actions/actions';

const initialState = {
    xCoordinate: 0,
    yCoordinate: 0
};

function mouseCoordinatesReducer(state = initialState, action) {
    switch(action.type) {
        case SET_MOUSE_X_COORDINATE: 
            return {...state, xCoordinate : action.xCoordinate};
        case SET_MOUSE_Y_COORDINATE: 
            return {...state, yCoordinate : action.yCoordinate};
        default: 
            return state;
    }
}

export default mouseCoordinatesReducer;