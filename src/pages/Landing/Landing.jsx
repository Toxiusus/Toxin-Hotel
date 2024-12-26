import Dropdown from "../../components/Dropdown/Dropdown";
import DatePicker from "../../components/Datepicker/Datepicker";
import "./Landing.scss";

function Landing() {
  return (
    <section className="landing">
      <div className="landing__container">
        <Datepicker/>
        <Dropdown />
        <p className="landing__text">
          Лучшие номера для вашей работы, отдыха и просто вдохновения
        </p>
      </div>
    </section>
  );
}

export default Landing;
