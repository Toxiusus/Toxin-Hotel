import React, { useState, useEffect } from "react";
import "./SearchRoom.scss";
import roomFirst from "../../assets/img/room-0.jpeg";

function SearchRoom() {
  const [image, setImage] = useState();

  const images = [roomFirst];

  return (
    <section className="room">
      <div className="room__container container">
        <aside></aside>
        <div className="room__selection">
          <ul className="cards">
            <li className="cards__items">
              <div className="cards__item">
                <div className="cards__item-img">
                  <button>prev</button>
                  <a href="#">
                    <img src={roomFirst} alt="room-0" />
                  </a>
                  <button>next</button>
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
