import React from 'react';
import { shallow } from 'enzyme';
import { Canvas } from '../../components/Canvas';
import { CANVAS_WIDTH } from '../../components/Constants';

let wrapper, removeBall;

beforeEach(() => {
    removeBall = jest.fn();
    wrapper = shallow(<Canvas removeBall = {removeBall}/>);
});

test('should render Canvas correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should correctly update ball coordinates', () => {
    const ball = {
        id: '1',
        xCoordinate: 100,
        yCoordinate: 200,
        xVelocity: 1,
        yVelocity: -1
    };

    wrapper.instance().updateCoordinates(ball);

    expect(ball).toEqual({
        id: '1',
        xCoordinate: 101,
        yCoordinate: 199.2,
        xVelocity: 1,
        yVelocity: -0.8
    });
});

test('should correctly remove outside bounds ball', () => {
    const ball = {
        id: '1',
        xCoordinate: CANVAS_WIDTH + 1,
        yCoordinate: 200,
        xVelocity: 1,
        yVelocity: -1
    };

    wrapper.instance().updateCoordinates(ball);

    expect(removeBall).toHaveBeenLastCalledWith(ball.id);
});