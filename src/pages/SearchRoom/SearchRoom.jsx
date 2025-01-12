import RoomCard from "../../components/RoomCard/RoomCard";
import "./SearchRoom.scss";

function SearchRoom() {
  return (
    <section className="room">
      <div className="room__container container">
        <aside></aside>
        <div className="room__selection">
          <div className="cards">
            <RoomCard />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SearchRoom;
