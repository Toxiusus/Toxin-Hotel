import Logo from "../../assets/img/Logo.svg";
import "./Header.scss"

function Header() {
  return (
    <header class="header">
      <div class="header__container container">
        <a class="header__logo" href="#">
          <img src={Logo} alt="logo" />
        </a>
        <div class="header__details">
          <ul class="header__list list-reset">
            <li class="header__item">
              <a className="header__link" href="#">О нас</a>
            </li>
            <li class="header__item">
              <a className="header__link" href="#">Услуги</a>
            </li>
            <li class="header__item">
              <a className="header__link" href="№">Вакансии</a>
            </li>
            <li class="header__item">
              <a className="header__link" href="#">Новости</a>
            </li>
            <li class="header__item">
              <a className="header__link" href="#">Соглашения</a>
            </li>
          </ul>
          <div class="header__buttons">
            <button class="header__button header__enter" aria-label="enter">
              <span>Войти</span>
            </button>
            <button
              class="header__button header__registration"
              aria-label="registration"
            >
              <span>Зарегистрироваться</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
