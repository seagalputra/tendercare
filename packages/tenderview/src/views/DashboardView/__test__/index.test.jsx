import React from 'react';
import { shallow } from 'enzyme';
import DashboardView from '..';

describe('DashboardView', () => {
  it('renders without crashing', () => {
    const component = shallow(<DashboardView />);
    expect(component).toMatchSnapshot();
  });
});
