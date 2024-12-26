import "./Landing.scss"

function Landing() {
  return (
    <section class="landing">
      <div class="landing__container">
        <div class="datepicker">
          <div class="datepicker__card">
            <h1 class="datepicker__card-title">
              Найдём номера под ваши пожелания
            </h1>
            <div class="datepciker__form">
              <div class="datepicker__inputs">
                <div class="datepicker__arrival">
                  <h3 class="datepicker__inputs-title">прибытие</h3>
                  <input
                    class="datepicker__input"
                    type="text"
                    placeholder="ДД.ММ.ГГГГ"
                  />
                </div>
                <div class="datepicker__departure">
                  <h3 class="datepicker__inputs-title">выезд</h3>
                  <input
                    class="datepicker__input datepicker__input-to"
                    type="text"
                    placeholder="ДД.ММ.ГГГГ"
                  />
                </div>
              </div>

              <div class="datepicker__box" hidden="">
                <div class="datepicker__header">
                  <button class="btn-reset datepicker__prev datepicker__btn">
                    <img src="/img/arrow-left.06265133.svg" alt="arrow-left" />
                  </button>
                  <div class="datepicker__seasons">
                    <select class="datepicker__month">
                      <option>Январь</option>
                      <option>Февраль</option>
                      <option>Март</option>
                      <option>Апрель</option>
                      <option>Май</option>
                      <option>Июнь</option>
                      <option>Июль</option>
                      <option>Август</option>
                      <option>Сентябрь</option>
                      <option>Октябрь</option>
                      <option>Ноябрь</option>
                      <option>Декабрь</option>
                    </select>
                    <input
                      class="datepicker__year"
                      type="number"
                      value="2024"
                    />
                  </div>
                  <button class="btn-reset datepicker__next datepicker__btn">
                    <img
                      src="/img/arrow-right.9baa87c8.svg"
                      alt="arrow-right"
                    />
                  </button>
                </div>
                <div class="datepicker__days">
                  <span>Пн</span>
                  <span>Вт</span>
                  <span>Ср</span>
                  <span>Чт</span>
                  <span>Пт</span>
                  <span>Сб</span>
                  <span>Вс</span>
                </div>
                <div class="datepicker__dates">
                  <button disabled="" class="btn-reset">
                    28
                  </button>
                  <button disabled="" class="btn-reset">
                    29
                  </button>
                  <button disabled="" class="btn-reset">
                    30
                  </button>
                  <button class="btn-reset">1</button>
                  <button class="btn-reset">2</button>
                  <button class="btn-reset">3</button>
                  <button class="btn-reset">4</button>
                  <button class="btn-reset">5</button>
                  <button class="btn-reset">6</button>
                  <button class="btn-reset">7</button>
                  <button class="btn-reset">8</button>
                  <button class="btn-reset">9</button>
                  <button class="btn-reset">10</button>
                  <button class="btn-reset">11</button>
                  <button class="btn-reset">12</button>
                  <button class="btn-reset">13</button>
                  <button class="btn-reset">14</button>
                  <button class="btn-reset">15</button>
                  <button class="btn-reset">16</button>
                  <button class="btn-reset">17</button>
                  <button class="btn-reset">18</button>
                  <button class="btn-reset">19</button>
                  <button class="btn-reset">20</button>
                  <button class="btn-reset">21</button>
                  <button class="btn-reset">22</button>
                  <button class="btn-reset">23</button>
                  <button class="btn-reset">24</button>
                  <button class="btn-reset">25</button>
                  <button class="btn-reset">26</button>
                  <button class="btn-reset">27</button>
                  <button class="btn-reset">28</button>
                  <button class="btn-reset">29</button>
                  <button class="btn-reset">30</button>
                  <button class="btn-reset">31</button>
                  <button disabled="" class="btn-reset">
                    1
                  </button>
                </div>
                <div class="datepicker__footer">
                  <button class="datepicker__delete btn-reset datepicker__btn">
                    очистить
                  </button>
                  <button class="datepicker__submit btn-reset datepicker__btn">
                    применить
                  </button>
                </div>
              </div>
            </div>
            <button class="btn-reset datepicker__find">
              <span class="datepicker__find-text">подобрать номер</span>
              <span class="datepicker__find-arrow"></span>
            </button>
          </div>
        </div>
        <p class="landing__text">
          Лучшие номера для вашей работы, отдыха и просто вдохновения
        </p>
      </div>
    </section>
  );
}

export default Landing;
