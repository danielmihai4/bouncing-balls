import {
    ADD_BALL,
    REMOVE_BALL,
    SET_MOUSE_X_COORDINATE,
    SET_MOUSE_Y_COORDINATE,
    addBall,
    removeBall,
    setMouseXCoordinate,
    setMouseYCoordinate
} from '../../actions/actions';

test('should setup add ball action object', () => {
    const action = addBall({
        id: '1234-abcd', 
        xCoordinate: 100, 
        yCoordinate: 200, 
        xVelocity: 4,
        yVelocity: -2});

    expect(action).toEqual({
        type: ADD_BALL,
        ball: {
            id: '1234-abcd',
            xCoordinate: 100,
            yCoordinate: 200,
            xVelocity: 4,
            yVelocity: -2
        }
    });
});

test('should setup remove ball action object', () => {
    const action = removeBall('1234-abcd');

    expect(action).toEqual({type: REMOVE_BALL, id: '1234-abcd'});
});

test('should setup set X Coordinate action object', () => {
    const action = setMouseXCoordinate(100);

    expect(action).toEqual({type: SET_MOUSE_X_COORDINATE, xCoordinate: 100});
});

test('should setup set Y Coordinate action object', () => {
    const action = setMouseYCoordinate(200);

    expect(action).toEqual({type: SET_MOUSE_Y_COORDINATE, yCoordinate: 200});
});