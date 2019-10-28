import ballsReducer from './ballsReducer';
import mouseCoordinatesReducer from './mouseCoordinatesReducer';
import { combineReducers } from 'redux';

const reducers = combineReducers({
    balls: ballsReducer,
    mouseCoordinates: mouseCoordinatesReducer
});

export default reducers;