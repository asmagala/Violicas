import React from 'react';
import { shallow } from 'enzyme';
import { CostFormComponent } from './CostForm';

describe('Component CostForm', () => {
  it('should render without crashing', () => {
    const component = shallow(<CostFormComponent />);
    expect(component).toBeTruthy();
  });
});
