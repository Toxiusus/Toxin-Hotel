import { useState } from "react";

import "./RoomDetails.scss";

import firstphoto from "../../assets/img/det-1.jpeg";
import secondphoto from "../../assets/img/det-2.jpeg";
import thirdthphoto from "../../assets/img/det-3.jpeg";
import dignities1 from "../../assets/img/dignities-1.svg";
import dignities2 from "../../assets/img/dignities-2.svg";
import dignities3 from "../../assets/img/dignities-3.svg";
import chart from "../../assets/img/chart.jpeg";
import user from "../../assets/img/user-1.jpg";
import user2 from "../../assets/img/user-2.jpg";
import dislike from "../../assets/img/dislike.svg";
import like from "../../assets/img/like.svg";

import DatePicker from "../../components/DatePicker/DatePicker.jsx";
import Dropdown from "../../components/Dropdown/Dropdown";
import LargeButton from "../../components/LargeButton/LargeButton";

function RoomDetails() {
  const [count, setCount] = useState(13);
  const [secondCount, setSecondCount] = useState(2);
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    if (liked) {
      setCount(count - 1);
    } else {
      setCount(count + 1);
    }
    setLiked(!liked);
  };

  const toggleSecondLike = () => {
    if (liked) {
      setSecondCount(secondCount - 1);
    } else {
      setSecondCount(secondCount + 1);
    }
    setLiked(!liked);
  };

  return (
    <div className="room-details">
      <div className="room-details__photo container">
        <div className="room-details__photo-main">
          <img src={firstphoto} alt="large-photo" />
        </div>
        <div className="room-details__photo-aside">
          <div className="room-details__photo-top">
            <img src={secondphoto} alt="small-photo" />
          </div>
          <div className="room-details__photo-bottom">
            <img src={thirdthphoto} alt="small-photo" />
          </div>
        </div>
      </div>
      <div className="room-details__container container">
        <div className="room-details__content">
          <div className="room-details__information">
            <section className="room-details__dignities">
              <div className="heading">
                <h2 className="heading__title">Сведения о номере</h2>
              </div>
              <div className="dignities">
                <div className="dignities__item">
                  <div>
                    <img src={dignities1} alt="degnities-1" />
                  </div>
                  <div className="dignities__description">
                    <span className="dignities__description-title">
                      Комфорт
                    </span>
                    <span className="dignities__description-subtitle">
                      Шумопоглощающие стены
                    </span>
                  </div>
                </div>
                <div className="dignities__border"></div>
              </div>
              <div className="dignities">
                <div className="dignities__item">
                  <div>
                    <img src={dignities2} alt="degnities-1" />
                  </div>
                  <div className="dignities__description">
                    <span className="dignities__description-title">
                      Удобство
                    </span>
                    <span className="dignities__description-subtitle">
                      Окно в каждой из спален
                    </span>
                  </div>
                </div>
                <div className="dignities__border"></div>
              </div>
              <div className="dignities">
                <div className="dignities__item">
                  <div>
                    <img src={dignities3} alt="degnities-1" />
                  </div>
                  <div className="dignities__description">
                    <span className="dignities__description-title">Уют</span>
                    <span className="dignities__description-subtitle">
                      Номер оснащён камином
                    </span>
                  </div>
                </div>
                <div className="dignities__border"></div>
              </div>
            </section>
            <section className="room-details__impressions">
              <div className="heading">
                <h2 className="heading__title">Впечатления от номера</h2>
              </div>
              <div className="chart">
                <div className="chart__img">
                  <img src={chart} alt="chart" />
                </div>
                <div className="chart__grade">
                  <ul className="chart__grade-list list-reset">
                    <li className="chart__grade-item orange">Великолепно</li>
                    <li className="chart__grade-item green">Хорошо</li>
                    <li className="chart__grade-item purple">
                      Удовлетворительно
                    </li>
                    <li className="chart__grade-item black">Разочарован</li>
                  </ul>
                </div>
              </div>
            </section>
            <section className="room-details__feedback">
              <div className="heading">
                <h2 className="heading__title">Отзывы посетителей номера</h2>
                <span className="heading__descr">2 отзыва</span>
              </div>
              <div className="room-details__feedback-item">
                <div className="comment">
                  <div className="comment__header">
                    <img className="comment__img" src={user} alt="user-1" />
                    <div className="comment__descr">
                      <div className="comment__name">Мурад Сарафанов</div>
                      <div className="comment__date">5 дней назад</div>
                    </div>
                  </div>
                  <div className="comment__bottom">
                    <div className="comment__like">
                      <button
                        onClick={toggleLike}
                        className="comment__btn comment__btn-active btn-reset"
                      >
                        <img className="comment__like" src={like} alt="like" />
                        <span className="comment__count comment__count-active">
                          {count}
                        </span>
                      </button>
                    </div>
                    <div className="comment__text">
                      Великолепный матрас на кровати в основной спальне! А пуфик
                      вообще потрясающий. И стены, действительно,
                      шумоподавляющие. Выкрикивал комплименты повару — никто не
                      жаловался из соседей
                    </div>
                  </div>
                </div>
              </div>
              <div className="room-details__feedback-item">
                <div className="comment">
                  <div className="comment__header">
                    <img className="comment__img" src={user2} alt="user-1" />
                    <div className="comment__descr">
                      <div className="comment__name">Патрисия Стёклышкова</div>
                      <div className="comment__date">Неделю назад</div>
                    </div>
                  </div>
                  <div className="comment__bottom">
                    <div className="comment__like">
                      <button
                        onClick={toggleSecondLike}
                        className="comment__btn btn-reset"
                      >
                        <img
                          className="comment__like"
                          src={dislike}
                          alt="dislike"
                        />
                        <span className="comment__count">{secondCount}</span>
                      </button>
                    </div>
                    <div className="comment__text">
                      Обслуживание на высоте! Всё аккуратно, чисто. Завтраки в
                      номер советую заказать, каждый день новое блюдо и десерт
                      как комплимент
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="room-details__rules">
              <div className="room-details__rules-container">
                <div className="heading">
                  <h2 className="heading__title">Правила</h2>
                </div>
                <div className="room-details__rules-list">
                  <ul className="bullet-list list-reset">
                    <li className="bullet-list__item">
                      <p className="bullet-list__item-text">Нельзя с питомцами</p>
                    </li>
                    <li className="bullet-list__item">
                      <p>Без вечеринок и мероприятий</p>
                    </li>
                    <li className="bullet-list__item">
                      <p>Время прибытия — после 13:00, а выезд до 12:00</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="room-details__rules-container">
                <div className="heading">
                  <h2 className="heading__title">Отмена</h2>
                </div>
                <div className="room-details__rules-text">
                  <p>
                    Бесплатная отмена в течение 48 ч. После этого при отмене не
                    позднее чем за 5 дн. до прибытия вы получите полный возврат
                    за вычетом сбора за услуги.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div>
          <DatePicker/>
          <Dropdown />
          <LargeButton />
        </div>
      </div>
    </div>
  );
}

export default RoomDetails;
