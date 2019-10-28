import uuid from 'uuid';

export const ADD_BALL = 'ADD_BALL';
export const REMOVE_BALL = 'REMOVE_BALL';
export const SET_MOUSE_X_COORDINATE = 'SET_MOUSE_X_COORDINATE';
export const SET_MOUSE_Y_COORDINATE = 'SET_MOUSE_Y_COORDINATE';

export function addBall(ball) {
    return {type: ADD_BALL, ball: { id: uuid(), ...ball}};
} 

export function removeBall(id) {
    return {type: REMOVE_BALL, id: id};
}

export function setMouseXCoordinate(xCoordinate) {
    return {type: SET_MOUSE_X_COORDINATE, xCoordinate: xCoordinate};
}

export function setMouseYCoordinate(yCoordinate) {
    return {type: SET_MOUSE_Y_COORDINATE, yCoordinate: yCoordinate};
}