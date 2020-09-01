import React from 'react';
import { shallow } from 'enzyme';
import { ProductsSummaryComponent } from './ProductsSummary';

describe('Component ProductsSummary', () => {
  it('should render without crashing', () => {
    const component = shallow(<ProductsSummaryComponent />);
    expect(component).toBeTruthy();
  });
});
