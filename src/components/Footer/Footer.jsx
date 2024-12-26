import "./Footer.scss"
import Facebook from "../../assets/img/facebook.svg"
import Instagram from "../../assets/img/instagram.svg"
import Twitter from "../../assets/img/twitter.svg"
import Logo from "../../assets/img/Logo.svg"
import ArrowRight from "../../assets/img/arrow-right.svg"

function Footer() {
  return(
    <footer class="footer">
  <div class="footer__container">
    <div class="footer__top container">
      <div class="footer__about">
        <a href="#">
          <img src={Logo} alt="logo" />
        </a>
        <p class="footer__about-text">
          Бронирование номеров в лучшем отеле 2019 года по версии ассоциации
          «Отельные взгляды»
        </p>
      </div>
      <div class="footer__column">
        <h3 class="footer__title">навигация</h3>
        <ul class="list-reset footer__list">
          <li class="footer__item">
            <a class="footer__link" href="#">
              О нас
            </a>
          </li>
          <li class="footer__item">
            <a class="footer__link" href="#">
              Новости
            </a>
          </li>
          <li class="footer__item">
            <a class="footer__link" href="#">
              Служба поддержки
            </a>
          </li>
          <li class="footer__item">
            <a class="footer__link" href="#">
              Услуги
            </a>
          </li>
        </ul>
      </div>
      <div class="footer__column">
        <h3 class="footer__title">о нас</h3>
        <ul class="list-reset footer__list">
          <li class="footer__item">
            <a class="footer__link" href="#">
              О сервисе
            </a>
          </li>
          <li class="footer__item">
            <a class="footer__link" href="#">
              Наша команда
            </a>
          </li>
          <li class="footer__item">
            <a class="footer__link" href="#">
              Вакансии
            </a>
          </li>
          <li class="footer__item">
            <a class="footer__link" href="#">
              Инвесторы
            </a>
          </li>
        </ul>
      </div>
      <div class="footer__column">
        <h3 class="footer__title">Служба поддержки</h3>
        <ul class="list-reset footer__list">
          <li class="footer__item">
            <a class="footer__link" href="#">
              Соглашения
            </a>
          </li>
          <li class="footer__item">
            <a class="footer__link" href="#">
              Сообщества
            </a>
          </li>
          <li class="footer__item">
            <a class="footer__link" href="#">
              Связь с нами
            </a>
          </li>
        </ul>
      </div>
      <div class="footer__subscribe">
        <h3 class="footer__title">навигация</h3>
        <p class="footer__subscribe-text">
          Получайте специальные предложения и новости сервиса
        </p>
        <form action="footer__form form">
          <input
            class="footer__input form__input"
            type="email"
            name="email"
            required=""
            placeholder="Email"
          />
          <button class="btn-reset footer__btn">
            <img src={ArrowRight} alt="arrow-right" />
          </button>
        </form>
        <p></p>
      </div>
    </div>
    <div class="footer__bottom">
      <div class="footer__bottom-container">
        <span class="footer__copyright">
          Copyright © 2018 Toxin отель. Все права защищены.
        </span>
        <ul class="list-reset footer__social">
          <li class="footer__social-item">
            <a class="footer__social-link" href="#">
              <img src={Twitter} alt="twitter" />
            </a>
          </li>
          <li class="footer__social-item">
            <a class="footer__social-link" href="#">
              <img src={Facebook} alt="facebook" />
            </a>
          </li>
          <li class="footer__social-item">
            <a class="footer__social-link" href="#">
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