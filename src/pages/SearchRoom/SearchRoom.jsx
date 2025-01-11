import "./SearchRoom.scss";
import room from "../../assets/img/room-0.jpg";

function SearchRoom() {
  return (
    <section className="room">
      <div className="room__container container">
        <aside></aside>
        <div className="room__selection">
          <ul className="cards">
            <li className="cards__items">
              <div className="cards__item">
                <div className="cards__item-img">
                  <img src={room} alt="room-0" />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default SearchRoom;
