import Dropdown from "../../components/Dropdown/Dropdown";
import "./Landing.scss";

function Landing() {
  return (
    <section className="landing">
      <div className="landing__container">
        <Dropdown />
        <p className="landing__text">
          Лучшие номера для вашей работы, отдыха и просто вдохновения
        </p>
      </div>
    </section>
  );
}

export default Landing;
