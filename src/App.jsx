import React from 'react';

function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <div className="header__inner container">
          <div className="header__logo">
            <img width="38" height="38" className="header__logo-image" src="./img/pizza-logo.svg" alt="pizza" />
            <div className="header__logo-textBox">
              <h1 className="header__logo-title">REACT PIZZA</h1>
              <p className="header__logo-text">самая вкусная пицца во вселенной</p>
            </div>
          </div>
          <div className="header__cart">
            <div className="button button--cart">
              <span>520 ₽</span>
              <div className="button__delimiter"></div>
              <svg
                className="button__icon"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>3</span>
            </div>
          </div>
        </div>
      </header>
      <div className="content">
        <div className="container">
          <div className="content__top">
            <div className="categories">
              <ul className="categories__inner">
                <li className="categories__item categories__item--active">Все</li>
                <li className="categories__item">Мясные</li>
                <li className="categories__item">Вегетарианская</li>
                <li className="categories__item">Гриль</li>
                <li className="categories__item">Острые</li>
                <li className="categories__item">Закрытые</li>
              </ul>
            </div>
            <div className="sort">
              <div className="sort__inner">
                <svg
                  className="sort__icon"
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                    fill="#2C2C2C"
                  />
                </svg>
                <b className="sort__text">Сортировка по:</b>
                <span className="sort__choice">популярности</span>
              </div>
              <div className="sort__popup">
                <ul className="sort__items">
                  <li className="sort__item sort__item--active">популярности</li>
                  <li className="sort__item">цене</li>
                  <li className="sort__item">алфавиту</li>
                </ul>
              </div>
            </div>
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
      </div>
    </div>
  );
}

export default App;
