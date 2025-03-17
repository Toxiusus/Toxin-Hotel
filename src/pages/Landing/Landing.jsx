import Dropdown from "../../components/Dropdown/Dropdown";
import "./Landing.scss";
import DatePicker from "../../components/DatePicker/DatePicker";
import LargeButton from "../../components/LargeButton/LargeButton";

function Landing() {
  return (
    <section className="landing">
      <div className="landing__container">
        <div className="landing__card">
          <DatePicker />
          <Dropdown />
          <LargeButton text="подобрать номер"/>
        </div>
        <p className="landing__text">
          Лучшие номера для вашей работы, отдыха и просто вдохновения
        </p>
      </div>
    </section>
  );
}

export default Landing;
