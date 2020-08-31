import React from 'react';
import { shallow } from 'enzyme';
import { UpperStripeComponent } from './UpperStripe';

describe('Component UpperStripe', () => {
  it('should render without crashing', () => {
    const component = shallow(<UpperStripeComponent />);
    expect(component).toBeTruthy();
  });
});
