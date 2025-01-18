import Checkbox from "../../components/Checkbox/Checkbox";
import DatePicker from "../../components/DatePicker/DatePicker";
import Dropdown from "../../components/Dropdown/Dropdown";
import PriceRangeSlider from "../../components/PriceRangeSlider/PriceRangeSlider";
import RoomCard from "../../components/RoomCard/RoomCard";
import "./SearchRoom.scss";

function SearchRoom() {
  return (
    <section className="room">
      <div className="room__container">
        <aside className="room__aside">
          <h3 className="room__title">даты пребывания в отеле</h3>
          <DatePicker />
          <Dropdown />
          <PriceRangeSlider min={5000} max={13000} step={100} />
          <h3 className="room__title room__title-checkbox">правила дома</h3>
          <Checkbox text="Можно курить" />
          <Checkbox text="Можно с питомцами" />
          <Checkbox text="Можно пригласить гостей (до 10 человек)" />
          <h3 className="room__title room__title-checkbox">доступность</h3>
          <Checkbox
            toptext="Широкий коридор"
            text="Ширина коридоров в номере не менее 91 см."
          />
          <Checkbox
            toptext="Помощник для инвалидов"
            text="На 1 этаже вас встретит специалист  и проводит до номера."
          />
        </aside>
        <div className="room__selection">
          <h1 className="room__selection-title">
            Номера, которые мы для вас подобрали
          </h1>
          <div className="cards">
            <RoomCard
              img={0}
              number="888"
              lux="люкс"
              price="9 990"
              comments="145"
            />
            <RoomCard img={1} number="840" price="9 990" comments="65" />
            <RoomCard img={2} number="980" price="8 500" comments="35" />
            <RoomCard img={3} number="856" price="7 300" comments="19" />
            <RoomCard img={4} number="740" price="6 000" comments="44" />
            <RoomCard img={5} number="982" price="5 800" comments="56" />
            <RoomCard img={6} number="678" price="5 500" comments="45" />
            <RoomCard img={7} number="450" price="5 300" comments="39" />
            <RoomCard img={8} number="350" price="5 000" comments="77" />
            <RoomCard img={9} number="666" price="5 000" comments="25" />
            <RoomCard img={10} number="444" price="5 000" comments="15" />
            <RoomCard img={11} number="352" price="5 000" comments="55" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SearchRoom;
