function dropDown() {
  return (
    <div class="dropdown">
      <h3>гости</h3>
      <div class="dropdown__select">
        <span class="dropdown__selected">Сколько гостей</span>
        <div class="dropdown__caret">
          <img src="/img/arrow-down.e85954bc.svg" alt="arrow-down" />
        </div>
      </div>
      <ul class="dropdown__menu list-reset">
        <li class="dropdown__item">
          <p class="dropdown__item-text">взрослые</p>
          <div class="dropdown__item-controls">
            <button
              class="dropdown__item-minus dropdown__btn"
              id="minus"
              data-target="adult"
            >
              -
            </button>
            <input
              class="dropdown__item-input"
              type="number"
              value="0"
              id="adultCounter"
            />
            <button
              class="dropdown__item-plus dropdown__btn"
              id="plus"
              data-target="adult"
            >
              +
            </button>
          </div>
        </li>
        <li class="dropdown__item">
          <p class="dropdown__item-text">дети</p>
          <div class="dropdown__item-controls">
            <button
              class="dropdown__item-minus dropdown__btn"
              id="minus"
              data-target="children"
            >
              -
            </button>
            <input
              class="dropdown__item-input"
              type="number"
              value="0"
              id="childrenCounter"
            />
            <button
              class="dropdown__item-plus dropdown__btn"
              id="plus"
              data-target="children"
            >
              +
            </button>
          </div>
        </li>
        <li class="dropdown__item">
          <p class="dropdown__item-text">младенцы</p>
          <div class="dropdown__item-controls">
            <button
              class="dropdown__item-minus dropdown__btn"
              id="minus"
              data-target="babies"
            >
              -
            </button>
            <input
              class="dropdown__item-input"
              type="number"
              value="0"
              id="babiesCounter"
            />
            <button
              class="dropdown__item-plus dropdown__btn"
              id="plus"
              data-target="babies"
            >
              +
            </button>
          </div>
        </li>
        <div class="dropdown__buttons">
          <button class="dropdown__button btn-reset">
            <span>удалить</span>
          </button>
          <button class="dropdown__button btn-reset">
            <span>применить</span>
          </button>
        </div>
      </ul>
    </div>
  );
}
