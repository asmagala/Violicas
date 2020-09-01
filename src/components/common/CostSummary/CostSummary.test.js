import React from 'react';
import { shallow } from 'enzyme';
import { CostSummaryComponent } from './CostSummary';

describe('Component CostSummary', () => {
  it('should render without crashing', () => {
    const component = shallow(<CostSummaryComponent />);
    expect(component).toBeTruthy();
  });
});
