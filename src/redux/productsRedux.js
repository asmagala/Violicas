/* selectors */
export const getAll = ({ products }) => products.data;

export const getById = ({ products }, id) => {
  const prodArray = products.data.filter(item => item.id === id);
  return prodArray[0];
};



/* action name creator */
// const reducerName = 'products';
// const createActionName = name =>  `app/${reducerName}/${name}`;

/* action types */

/* action creators */

/* reducer */