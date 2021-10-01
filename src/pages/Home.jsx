import React from 'react';
import { Categories, SortPopup } from '../components';

function Home() {
  return (
    <div className="container">
      <div className="content__top">
        <Categories items={['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']} />
        <SortPopup items={['популярности', 'цене', 'алфавиту']} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        <div className="pizza-card">
          <img className="pizza-card__image" width="260" height="260" src="./img/pizza/pizza-1.jpg" alt="pizza" />
          <h4 className="pizza-card__title">Чизбургер-пицца</h4>
          <div className="pizza-card__selector">
            <ul className="pizza-card__top-selector">
              <li className="pizza-card__top-elem pizza-card__top-elem--active">тонкое</li>
              <li className="pizza-card__top-elem">традиционное</li>
            </ul>
            <ul className="pizza-card__bottom-selector">
              <li className="pizza-card__bottom-elem pizza-card__bottom-elem--active">26 см.</li>
              <li className="pizza-card__bottom-elem">30 см.</li>
              <li className="pizza-card__bottom-elem">40 см.</li>
            </ul>
          </div>
          <div className="pizza-card__bottom">
            <div className="pizza-card__price">от 395 ₽</div>
            <div className="button button--outline button--add">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                  fill="white"
                />
              </svg>
              <span>Добавить</span>
              <i>2</i>
            </div>
          </div>
        </div>
        <div className="pizza-card">
          <img className="pizza-card__image" width="260" height="260" src="./img/pizza/pizza-1.jpg" alt="pizza" />
          <h4 className="pizza-card__title">Чизбургер-пицца</h4>
          <div className="pizza-card__selector">
            <ul className="pizza-card__top-selector">
              <li className="pizza-card__top-elem pizza-card__top-elem--active">тонкое</li>
              <li className="pizza-card__top-elem">традиционное</li>
            </ul>
            <ul className="pizza-card__bottom-selector">
              <li className="pizza-card__bottom-elem pizza-card__bottom-elem--active">26 см.</li>
              <li className="pizza-card__bottom-elem">30 см.</li>
              <li className="pizza-card__bottom-elem">40 см.</li>
            </ul>
          </div>
          <div className="pizza-card__bottom">
            <div className="pizza-card__price">от 395 ₽</div>
            <div className="button button--outline button--add">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                  fill="white"
                />
              </svg>
              <span>Добавить</span>
              <i>2</i>
            </div>
          </div>
        </div>
        <div className="pizza-card">
          <img className="pizza-card__image" width="260" height="260" src="./img/pizza/pizza-1.jpg" alt="pizza" />
          <h4 className="pizza-card__title">Чизбургер-пицца</h4>
          <div className="pizza-card__selector">
            <ul className="pizza-card__top-selector">
              <li className="pizza-card__top-elem pizza-card__top-elem--active">тонкое</li>
              <li className="pizza-card__top-elem">традиционное</li>
            </ul>
            <ul className="pizza-card__bottom-selector">
              <li className="pizza-card__bottom-elem pizza-card__bottom-elem--active">26 см.</li>
              <li className="pizza-card__bottom-elem">30 см.</li>
              <li className="pizza-card__bottom-elem">40 см.</li>
            </ul>
          </div>
          <div className="pizza-card__bottom">
            <div className="pizza-card__price">от 395 ₽</div>
            <div className="button button--outline button--add">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                  fill="white"
                />
              </svg>
              <span>Добавить</span>
              <i>2</i>
            </div>
          </div>
        </div>
        <div className="pizza-card">
          <img className="pizza-card__image" width="260" height="260" src="./img/pizza/pizza-1.jpg" alt="pizza" />
          <h4 className="pizza-card__title">Чизбургер-пицца</h4>
          <div className="pizza-card__selector">
            <ul className="pizza-card__top-selector">
              <li className="pizza-card__top-elem pizza-card__top-elem--active">тонкое</li>
              <li className="pizza-card__top-elem">традиционное</li>
            </ul>
            <ul className="pizza-card__bottom-selector">
              <li className="pizza-card__bottom-elem pizza-card__bottom-elem--active">26 см.</li>
              <li className="pizza-card__bottom-elem">30 см.</li>
              <li className="pizza-card__bottom-elem">40 см.</li>
            </ul>
          </div>
          <div className="pizza-card__bottom">
            <div className="pizza-card__price">от 395 ₽</div>
            <div className="button button--outline button--add">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                  fill="white"
                />
              </svg>
              <span>Добавить</span>
              <i>2</i>
            </div>
          </div>
        </div>
        <div className="pizza-card">
          <img className="pizza-card__image" width="260" height="260" src="./img/pizza/pizza-1.jpg" alt="pizza" />
          <h4 className="pizza-card__title">Чизбургер-пицца</h4>
          <div className="pizza-card__selector">
            <ul className="pizza-card__top-selector">
              <li className="pizza-card__top-elem pizza-card__top-elem--active">тонкое</li>
              <li className="pizza-card__top-elem">традиционное</li>
            </ul>
            <ul className="pizza-card__bottom-selector">
              <li className="pizza-card__bottom-elem pizza-card__bottom-elem--active">26 см.</li>
              <li className="pizza-card__bottom-elem">30 см.</li>
              <li className="pizza-card__bottom-elem">40 см.</li>
            </ul>
          </div>
          <div className="pizza-card__bottom">
            <div className="pizza-card__price">от 395 ₽</div>
            <div className="button button--outline button--add">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                  fill="white"
                />
              </svg>
              <span>Добавить</span>
              <i>2</i>
            </div>
          </div>
        </div>
        <div className="pizza-card">
          <img className="pizza-card__image" width="260" height="260" src="./img/pizza/pizza-1.jpg" alt="pizza" />
          <h4 className="pizza-card__title">Чизбургер-пицца</h4>
          <div className="pizza-card__selector">
            <ul className="pizza-card__top-selector">
              <li className="pizza-card__top-elem pizza-card__top-elem--active">тонкое</li>
              <li className="pizza-card__top-elem">традиционное</li>
            </ul>
            <ul className="pizza-card__bottom-selector">
              <li className="pizza-card__bottom-elem pizza-card__bottom-elem--active">26 см.</li>
              <li className="pizza-card__bottom-elem">30 см.</li>
              <li className="pizza-card__bottom-elem">40 см.</li>
            </ul>
          </div>
          <div className="pizza-card__bottom">
            <div className="pizza-card__price">от 395 ₽</div>
            <div className="button button--outline button--add">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                  fill="white"
                />
              </svg>
              <span>Добавить</span>
              <i>2</i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
