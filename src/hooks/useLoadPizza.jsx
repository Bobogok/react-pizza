import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPizzas } from '../redux/actions/pizzas';

function useLoadPizza() {
  const dispatch = useDispatch();

  const { category, sortBy } = useSelector(({ filters }) => filters);

  useEffect(() => {
    dispatch(fetchPizzas(sortBy, category));
  }, [category, sortBy]);

  return { category, sortBy };
}

export default useLoadPizza;
