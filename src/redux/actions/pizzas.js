import axios from 'axios';

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload
});

export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items
});

export const fetchPizzas = (sortBy, category) => (dispatch) => {
  dispatch({
    type: 'SET_LOADED',
    payload: false
  });

  axios
    .get(
      `http://localhost:1338/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${
        sortBy.order
      }`
    )
    .then(({ data }) => {
      dispatch(setPizzas(data));
    })
    .catch((err) => {
      console.error(err);
    });
};
