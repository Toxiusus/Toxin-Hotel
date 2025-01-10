import arrow from "../../assets/img/arrow-down.svg";
import Logo from "../../assets/img/Logo.svg";
import EnterButton from "../EnterButton/EnterButton";
import RegistrationButton from "../RegistrationButton/RegistrationButton";
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
                <img
                  className="header__link-img"
                  src={arrow}
                  alt="arrow-down"
                />
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
                <img
                  className="header__link-img"
                  src={arrow}
                  alt="arrow-down"
                />
              </a>
            </li>
          </ul>
          <div className="header__buttons">
            <EnterButton />
            <RegistrationButton />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
