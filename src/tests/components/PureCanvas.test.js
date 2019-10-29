import React from 'react';
import { shallow } from 'enzyme';
import { PureCanvas } from '../../components/PureCanvas';

let addBall, setMouseXCoordinate, setMouseYCoordinate, wrapper;

beforeEach(() => {
    addBall = jest.fn();
    setMouseXCoordinate = jest.fn();
    setMouseYCoordinate = jest.fn();
    wrapper = shallow(
        <PureCanvas  
            addBall = {addBall}
            setMouseXCoordinate = {setMouseXCoordinate}
            setMouseYCoordinate = {setMouseYCoordinate}
            mouseXCoordinate = {0} 
            mouseYCoordinate = {0}
        />
    );
});

test('should render PureCanvas correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle mouse click', () => {
    wrapper.find('canvas').simulate('click');   
    expect(addBall).toHaveBeenCalled();
});

test('should handle mouse move', () => {
    wrapper.find('canvas').simulate('mousemove', {        
        clientX: 100,
        clientY: 200,
        target: {
            getBoundingClientRect: () => ({ left: 10, top: 20 })
        }
      });

    expect(setMouseXCoordinate).toHaveBeenLastCalledWith(90);
    expect(setMouseYCoordinate).toHaveBeenLastCalledWith(180);
});