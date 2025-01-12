import React, { useState } from "react";
import "./SearchRoom.scss";
import roomFirst from "../../assets/img/room-0.jpeg";
import roomSecond from "../../assets/img/room-1.jpeg";
import roomThird from "../../assets/img/room-2.jpeg";

function SearchRoom() {
  const images = [roomFirst, roomSecond, roomThird];

  const [currentIndex, setCurrentIndex] = useState(0);
  
  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  
  return (
    <section className="room">
      <div className="room__container container">
        <aside></aside>
        <div className="room__selection">
          <ul className="cards">
            <li className="cards__items">
              <div className="cards__item">
                <div className="cards__item-img">
                  <button className="prev-btn" onClick={prevImage}>
                    prev
                  </button>
                  <a href="#">
                    <img src={images[currentIndex]} alt={`Room ${currentIndex}`} />
                  </a>
                  <button className="next-btn" onClick={nextImage}>
                    next
                  </button>
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
