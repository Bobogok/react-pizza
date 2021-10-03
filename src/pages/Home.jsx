import React from 'react';
import { Categories, SortPopup, Card } from '../components';

function Home({ items }) {
  console.log(items);

  return (
    <div className="container">
      <div className="content__top">
        <Categories items={['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']} />
        <SortPopup items={['популярности', 'цене', 'алфавиту']} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items.map((obj) => (
          <Card key={obj.id} {...obj} />
        ))}
      </div>
    </div>
  );
}

export default Home;
