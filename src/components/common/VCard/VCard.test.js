import React from 'react';
import { shallow } from 'enzyme';
import { VCardComponent } from './VCard';

describe('Component VCard', () => {
  it('should render without crashing', () => {
    const component = shallow(<VCardComponent />);
    expect(component).toBeTruthy();
  });
});
