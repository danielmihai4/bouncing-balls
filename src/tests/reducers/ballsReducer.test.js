import ballsReducer from '../../reducers/ballsReducer';
import { ADD_BALL, REMOVE_BALL } from '../../actions/actions';
import balls from '../fixtures/balls';

test('should set default state', () => {
    const state = ballsReducer(undefined, { type: '@@INIT' });
    
    expect(state).toEqual([]);
});

test('should remove ball by id', () => {
    const action = { type: REMOVE_BALL, id: '1' };
    const state = ballsReducer(balls, action);

    expect(state).toEqual([balls[1]]);
});

test('should add ball', () => {
    const ball = {
        id: '3',
        xCoordinate: 300,
        yCoordinate: 333,
        xVelocity: 3,
        yVelocity: -3
    };
    const action = { type: ADD_BALL,  ball};
    const state = ballsReducer(balls, action);

    expect(state).toEqual([...balls, ball]);
});