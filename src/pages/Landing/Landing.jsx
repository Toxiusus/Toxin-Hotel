import Dropdown from "../../components/Dropdown/Dropdown";
import "./Landing.scss"


function Landing() {
  return (
    <section className="landing">
      <div className="landing__container">
        <div className="datepicker">
          <div className="datepicker__card">
            <h1 className="datepicker__card-title">
              Найдём номера под ваши пожелания
            </h1>
            <div className="datepciker__form">
              <div className="datepicker__inputs">
                <div className="datepicker__arrival">
                  <h3 className="datepicker__inputs-title">прибытие</h3>
                  <input
                    className="datepicker__input"
                    type="text"
                    placeholder="ДД.ММ.ГГГГ"
                  />
                </div>
                <div className="datepicker__departure">
                  <h3 className="datepicker__inputs-title">выезд</h3>
                  <input
                    className="datepicker__input datepicker__input-to"
                    type="text"
                    placeholder="ДД.ММ.ГГГГ"
                  />
                </div>
              </div>
            <Dropdown/>
              <div className="datepicker__box" hidden="">
                <div className="datepicker__header">
                  <button className="btn-reset datepicker__prev datepicker__btn">
                    <img src="/img/arrow-left.06265133.svg" alt="arrow-left" />
                  </button>
                  <div className="datepicker__seasons">
                    <select className="datepicker__month">
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
                      className="datepicker__year"
                      type="number"
                      value="2024"
                    />
                  </div>
                  <button className="btn-reset datepicker__next datepicker__btn">
                    <img
                      src="/img/arrow-right.9baa87c8.svg"
                      alt="arrow-right"
                    />
                  </button>
                </div>
                <div className="datepicker__days">
                  <span>Пн</span>
                  <span>Вт</span>
                  <span>Ср</span>
                  <span>Чт</span>
                  <span>Пт</span>
                  <span>Сб</span>
                  <span>Вс</span>
                </div>
                <div className="datepicker__dates">
                  <button disabled="" className="btn-reset">
                    28
                  </button>
                  <button disabled="" className="btn-reset">
                    29
                  </button>
                  <button disabled="" className="btn-reset">
                    30
                  </button>
                  <button className="btn-reset">1</button>
                  <button className="btn-reset">2</button>
                  <button className="btn-reset">3</button>
                  <button className="btn-reset">4</button>
                  <button className="btn-reset">5</button>
                  <button className="btn-reset">6</button>
                  <button className="btn-reset">7</button>
                  <button className="btn-reset">8</button>
                  <button className="btn-reset">9</button>
                  <button className="btn-reset">10</button>
                  <button className="btn-reset">11</button>
                  <button className="btn-reset">12</button>
                  <button className="btn-reset">13</button>
                  <button className="btn-reset">14</button>
                  <button className="btn-reset">15</button>
                  <button className="btn-reset">16</button>
                  <button className="btn-reset">17</button>
                  <button className="btn-reset">18</button>
                  <button className="btn-reset">19</button>
                  <button className="btn-reset">20</button>
                  <button className="btn-reset">21</button>
                  <button className="btn-reset">22</button>
                  <button className="btn-reset">23</button>
                  <button className="btn-reset">24</button>
                  <button className="btn-reset">25</button>
                  <button className="btn-reset">26</button>
                  <button className="btn-reset">27</button>
                  <button className="btn-reset">28</button>
                  <button className="btn-reset">29</button>
                  <button className="btn-reset">30</button>
                  <button className="btn-reset">31</button>
                  <button disabled="" className="btn-reset">
                    1
                  </button>
                </div>
                <div className="datepicker__footer">
                  <button className="datepicker__delete btn-reset datepicker__btn">
                    очистить
                  </button>
                  <button className="datepicker__submit btn-reset datepicker__btn">
                    применить
                  </button>
                </div>
              </div>
            </div>
            <button className="btn-reset datepicker__find">
              <span className="datepicker__find-text">подобрать номер</span>
              <span className="datepicker__find-arrow"></span>
            </button>
          </div>
        </div>
        <p className="landing__text">
          Лучшие номера для вашей работы, отдыха и просто вдохновения
        </p>
      </div>
    </section>
  );
}

export default Landing;
