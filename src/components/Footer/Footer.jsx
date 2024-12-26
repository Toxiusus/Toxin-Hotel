import "./Footer.scss"
import Facebook from "../../assets/img/facebook.svg"
import Instagram from "../../assets/img/instagram.svg"
import Twitter from "../../assets/img/twitter.svg"
import Logo from "../../assets/img/Logo.svg"
import ArrowRight from "../../assets/img/arrow-right.svg"

function Footer() {
  return(
    <footer className="footer">
  <div className="footer__container">
    <div className="footer__top container">
      <div className="footer__about">
        <a href="#">
          <img src={Logo} alt="logo" />
        </a>
        <p className="footer__about-text">
          Бронирование номеров в лучшем отеле 2019 года по версии ассоциации
          «Отельные взгляды»
        </p>
      </div>
      <div className="footer__column">
        <h3 className="footer__title">навигация</h3>
        <ul className="list-reset footer__list">
          <li className="footer__item">
            <a className="footer__link" href="#">
              О нас
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href="#">
              Новости
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href="#">
              Служба поддержки
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href="#">
              Услуги
            </a>
          </li>
        </ul>
      </div>
      <div className="footer__column">
        <h3 className="footer__title">о нас</h3>
        <ul className="list-reset footer__list">
          <li className="footer__item">
            <a className="footer__link" href="#">
              О сервисе
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href="#">
              Наша команда
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href="#">
              Вакансии
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href="#">
              Инвесторы
            </a>
          </li>
        </ul>
      </div>
      <div className="footer__column">
        <h3 className="footer__title">Служба поддержки</h3>
        <ul className="list-reset footer__list">
          <li className="footer__item">
            <a className="footer__link" href="#">
              Соглашения
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href="#">
              Сообщества
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href="#">
              Связь с нами
            </a>
          </li>
        </ul>
      </div>
      <div className="footer__subscribe">
        <h3 className="footer__title">навигация</h3>
        <p className="footer__subscribe-text">
          Получайте специальные предложения и новости сервиса
        </p>
        <form action="footer__form form">
          <input
            className="footer__input form__input"
            type="email"
            name="email"
            required=""
            placeholder="Email"
          />
          <button className="btn-reset footer__btn">
            <img src={ArrowRight} alt="arrow-right" />
          </button>
        </form>
        <p></p>
      </div>
    </div>
    <div className="footer__bottom">
      <div className="footer__bottom-container">
        <span className="footer__copyright">
          Copyright © 2018 Toxin отель. Все права защищены.
        </span>
        <ul className="list-reset footer__social">
          <li className="footer__social-item">
            <a className="footer__social-link" href="#">
              <img src={Twitter} alt="twitter" />
            </a>
          </li>
          <li className="footer__social-item">
            <a className="footer__social-link" href="#">
              <img src={Facebook} alt="facebook" />
            </a>
          </li>
          <li className="footer__social-item">
            <a className="footer__social-link" href="#">
              <img src={Instagram} alt="instagram" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>
  )
}

export default Footer