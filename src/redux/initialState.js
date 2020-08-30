export const initialState = {
  products: {
    data: [
      {
        id: '1',
        title: 'i103-0',
        price: 2300,
        images: ['/images/i103-0.jpg'],
        description: 'Product of id = 1',
      },
      {
        id: '2',
        title: 'i20-0',
        price: 4850,
        images: ['/images/i20-0.jpg'],
        description: 'Product of id = 2',
      },
      {
        id: '3',
        title: 'i52-0',
        price: 5700,
        images: ['/images/i52-0.jpg'],
        description: 'Product of id = 3',
      },
      {
        id: '4',
        title: 'i66-0',
        price: 5700,
        images: ['/images/i66-0.jpg'],
        description: 'Product of id = 4',
      },
      {
        id: '5',
        title: 'i145-0',
        price: 5700,
        images: ['/images/i145-0.jpg'],
        description: 'Product of id = 5',
      },
    ],
    loading: {
      active: false,
      error: false,
    },
  },
};
