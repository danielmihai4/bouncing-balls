import mouseCoordinatesReducer from '../../reducers/mouseCoordinatesReducer';
import { SET_MOUSE_X_COORDINATE, SET_MOUSE_Y_COORDINATE } from '../../actions/actions';
import coordinates from '../fixtures/coordinates';

test('should set default state', () => {
    const state = mouseCoordinatesReducer(undefined, { type: '@@INIT' });
    
    expect(state).toEqual({xCoordinate: 0, yCoordinate: 0});
});

test('should set the mouse X Coordinate', () => {
    const action = { type: SET_MOUSE_X_COORDINATE, xCoordinate: 111 };
    const state = mouseCoordinatesReducer(coordinates, action);

    expect(state).toEqual({ xCoordinate: 111, yCoordinate: coordinates.yCoordinate });
});

test('should set the mouse X Coordinate', () => {
    const action = { type: SET_MOUSE_Y_COORDINATE, yCoordinate: 111 };
    const state = mouseCoordinatesReducer(coordinates, action);

    expect(state).toEqual({ xCoordinate: coordinates.xCoordinate, yCoordinate: 111 });
});