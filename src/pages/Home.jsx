import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Categories, SortPopup, Card } from '../components';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';
import { addPizzaToCard } from '../redux/actions/cart';
import LoadingBlock from '../components/Card/LoadingBlock';

const categoriesNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortByNames = [
  { name: 'популярности', type: 'popular', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавиту', type: 'name', order: 'asc' }
];

function Home() {
  // This hook returns a reference to the dispatch function from the Redux store.
  const dispatch = useDispatch();
  // The selector will be called with the entire Redux store state as its only argument.
  // The selector will be run whenever the function component renders
  // (unless its reference hasn't changed since a previous render of the component
  // so that a cached result can be returned by the hook without re-running the selector).
  // useSelector() will also subscribe to the Redux store, and run your selector
  // whenever an action is dispatched.
  const items = useSelector(({ pizzas }) => pizzas.items);
  const cartItems = useSelector(({ cart }) => cart.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  useEffect(() => {
    dispatch(fetchPizzas(sortBy, category));
  }, [category, sortBy]);

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortType = useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  const handleAddPizzaToCart = (obj) => {
    dispatch(addPizzaToCard(obj));
  };

  return (
    <div className="container">
      <div className="content__top">
        <Categories activeCategory={category} onClickCategory={onSelectCategory} items={categoriesNames} />
        <SortPopup items={sortByNames} activeSortType={sortBy.type} onClickSortType={onSelectSortType} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((obj) => (
              <Card
                onAddtoCart={handleAddPizzaToCart}
                key={obj.id}
                addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
                {...obj}
              />
            ))
          : Array.from(Array(10), (_, index) => <LoadingBlock key={index} />)}
      </div>
    </div>
  );
}

export default Home;
