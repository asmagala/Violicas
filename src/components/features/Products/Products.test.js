import React from 'react';
import { shallow } from 'enzyme';
import { ProductsComponent } from './Products';

const mockItems = {
  products: [
    {id: '1', title: 'title of 1', image: 'image1.jpg', price: 3000},
    {id: '2', title: 'title of 2', image: 'image2.jpg', price: 6000},
  ],
};

describe('Component Products', () => {
  it('should render without crashing', () => {
    const component = shallow(<ProductsComponent {...mockItems} />);
    expect(component).toBeTruthy();
  });
});
