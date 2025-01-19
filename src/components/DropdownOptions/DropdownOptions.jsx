import React, { useState } from "react";

import ArrowDown from "../../assets/img/arrow-down.svg";

import "../Dropdown/Dropdown.scss";

function DropdownOptions() {
  const [adult, setAdult] = useState(0);
  const [children, setChildren] = useState(0);
  const [babies, setBabies] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const totalGuests = adult + children + babies;

  const guestsCounter = (guests) => {
    if (adult === 1) return `${guests} спальня`;
    if (adult > 1) return `${guests} спальни`;
    if (children === 1) return `${guests} кровать`;
  };

  const handleRemoveClick = () => {
    setAdult(0);
    setChildren(0);
    setBabies(0);
  };

  return (
    <div className="dropdown">
      <h3 className="dropdown__title">удобства номера</h3>
      <div className="dropdown__select" onClick={() => setIsActive(!isActive)}>
        <input
          type="text"
          className="dropdown__selected"
          placeholder="удобства"
          value={guestsCounter(totalGuests)}
          readOnly
        />
        <div className="dropdown__caret">
          <img src={ArrowDown} alt="arrow-down" />
        </div>
      </div>
      {isActive && (
        <ul className={"dropdown__menu list-reset"}>
          <li className="dropdown__item">
            <p className="dropdown__item-text">спальни</p>
            <div className="dropdown__item-controls">
              <button
                onClick={() => setAdult(adult > 0 ? adult - 1 : adult)}
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
                onClick={() => setAdult(adult + 1)}
                className="dropdown__item-plus dropdown__btn"
                id="plus"
                data-target="adult"
              >
                +
              </button>
            </div>
          </li>
          <li className="dropdown__item">
            <p className="dropdown__item-text">кровати</p>
            <div className="dropdown__item-controls">
              <button
                onClick={() =>
                  setChildren(children > 0 ? children - 1 : children)
                }
                className="dropdown__item-minus dropdown__btn"
                id="minus"
                data-target="children"
              >
                -
              </button>
              <input
                className="dropdown__item-input"
                type="number"
                value={children}
                id="childrenCounter"
              />
              <button
                onClick={() => setChildren(children + 1)}
                className="dropdown__item-plus dropdown__btn"
                id="plus"
                data-target="children"
              >
                +
              </button>
            </div>
          </li>
          <li className="dropdown__item">
            <p className="dropdown__item-text">ванные комнаты</p>
            <div className="dropdown__item-controls">
              <button
                onClick={() => setBabies(babies > 0 ? babies - 1 : babies)}
                className="dropdown__item-minus dropdown__btn"
                id="minus"
                data-target="babies"
              >
                -
              </button>
              <input
                className="dropdown__item-input"
                type="number"
                value={babies}
                id="babiesCounter"
              />
              <button
                onClick={() => setBabies(babies + 1)}
                className="dropdown__item-plus dropdown__btn"
                id="plus"
                data-target="babies"
              >
                +
              </button>
            </div>
          </li>
          <div className="dropdown__buttons">
            <button
              onClick={handleRemoveClick}
              className="dropdown__button btn-reset"
            >
              <span>удалить</span>
            </button>
            <button
              onClick={() => setIsActive(!isActive)}
              className="dropdown__button btn-reset"
            >
              <span>применить</span>
            </button>
          </div>
        </ul>
      )}
    </div>
  );
}

export default DropdownOptions;
