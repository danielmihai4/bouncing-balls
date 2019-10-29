import React from 'react';
import { shallow } from 'enzyme';
import Animation from '../../components/Animation';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<Animation />);
});

test('should render Animation correctly', () => {
    expect(wrapper).toMatchSnapshot();
});