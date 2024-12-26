import React, { useState } from "react";

import "./Dropdown.scss";

function Dropdown() {
  const [adult, setAdult] = useState(0);

  const clickMinus = () => {
    setAdult(adult -1)
  }

  return (
    <div className="dropdown">
      <h3>гости</h3>
      <div className="dropdown__select">
        <span className="dropdown__selected">Сколько гостей</span>
        <div className="dropdown__caret">
          <img src="/img/arrow-down.e85954bc.svg" alt="arrow-down" />
        </div>
      </div>
      <ul className="dropdown__menu list-reset">
        <li className="dropdown__item">
          <p className="dropdown__item-text">взрослые</p>
          <div className="dropdown__item-controls">
            <button
              onClick={clickMinus}
              className="dropdown__item-minus dropdown__btn"
              id="minus"
              data-target="adult"
            >
              -
            </button>
            <input
              className="dropdown__item-input"
              type="number"
              value={adult}
              id="adultCounter"
            />
            <button
              className="dropdown__item-plus dropdown__btn"
              id="plus"
              data-target="adult"
            >
              +
            </button>
          </div>
        </li>
        <li className="dropdown__item">
          <p className="dropdown__item-text">дети</p>
          <div className="dropdown__item-controls">
            <button
              className="dropdown__item-minus dropdown__btn"
              id="minus"
              data-target="children"
            >
              -
            </button>
            <input
              className="dropdown__item-input"
              type="number"
              value="0"
              id="childrenCounter"
            />
            <button
              className="dropdown__item-plus dropdown__btn"
              id="plus"
              data-target="children"
            >
              +
            </button>
          </div>
        </li>
        <li className="dropdown__item">
          <p className="dropdown__item-text">младенцы</p>
          <div className="dropdown__item-controls">
            <button
              className="dropdown__item-minus dropdown__btn"
              id="minus"
              data-target="babies"
            >
              -
            </button>
            <input
              className="dropdown__item-input"
              type="number"
              value="0"
              id="babiesCounter"
            />
            <button
              className="dropdown__item-plus dropdown__btn"
              id="plus"
              data-target="babies"
            >
              +
            </button>
          </div>
        </li>
        <div className="dropdown__buttons">
          <button className="dropdown__button btn-reset">
            <span>удалить</span>
          </button>
          <button className="dropdown__button btn-reset">
            <span>применить</span>
          </button>
        </div>
      </ul>
    </div>
  );
}

export default Dropdown;
