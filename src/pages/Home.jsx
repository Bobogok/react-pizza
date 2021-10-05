import React from 'react';
import { useSelector } from 'react-redux';
import { Categories, SortPopup, Card } from '../components';

function Home() {
  // The selector will be called with the entire Redux store state as its only argument.
  // The selector will be run whenever the function component renders
  // (unless its reference hasn't changed since a previous render of the component
  // so that a cached result can be returned by the hook without re-running the selector).
  // useSelector() will also subscribe to the Redux store, and run your selector
  // whenever an action is dispatched.
  const { items } = useSelector(({ pizzas }) => {
    console.log(pizzas);
    return {
      items: pizzas.items
    };
  });

  return (
    <div className="container">
      <div className="content__top">
        <Categories items={['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']} />
        <SortPopup
          items={[
            { name: 'популярности', type: 'popular' },
            { name: 'цене', type: 'price' },
            { name: 'алфавиту', type: 'alphabet' }
          ]}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{items && items.map((obj) => <Card key={obj.id} {...obj} />)}</div>
    </div>
  );
}

export default Home;
