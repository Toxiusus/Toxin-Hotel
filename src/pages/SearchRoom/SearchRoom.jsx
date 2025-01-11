import "./SearchRoom.scss";
import room from "../../assets/img/room-0.jpeg";

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
                  <a href="/">
                    <img src={room} alt="room-0" />
                  </a>
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
