import axios from 'axios';

export const fetchPizzas = () => (dispatch) => {
  axios
    .get('http://localhost:1488/pizzas')
    .then(({ data }) => {
      // eslint-disable-next-line no-use-before-define
      dispatch(setPizzas(data));
    })
    .catch((err) => {
      console.error(err);
    });
};

export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items
});
