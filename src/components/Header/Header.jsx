import Logo from "../../assets/img/Logo.svg";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="header__container container">
        <a className="header__logo" href="#">
          <img src={Logo} alt="logo" />
        </a>
        <div className="header__details">
          <ul className="header__list list-reset">
            <li className="header__item">
              <a className="header__link" href="#">
                О нас
              </a>
            </li>
            <li className="header__item">
              <a className="header__link" href="#">
                Услуги
              </a>
            </li>
            <li className="header__item">
              <a className="header__link" href="№">
                Вакансии
              </a>
            </li>
            <li className="header__item">
              <a className="header__link" href="#">
                Новости
              </a>
            </li>
            <li className="header__item">
              <a className="header__link" href="#">
                Соглашения
              </a>
            </li>
          </ul>
          <div className="header__buttons">
            <button className="header__button header__enter" aria-label="enter">
              <span>Войти</span>
            </button>
            <button
              className="header__button header__registration"
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
