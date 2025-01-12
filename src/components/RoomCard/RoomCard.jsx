import React, { useState } from "react";

import roomFirst from "../../assets/img/room-0.jpeg";
import roomSecond from "../../assets/img/room-1.jpeg";
import roomThird from "../../assets/img/room-2.jpeg";

function RoomCard() {
  const images = [roomFirst, roomSecond, roomThird];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="card">
      <div className="card__slider">
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
      <div className="card__info">
        <div className="card__data">
          <div className="card__number">
            <span>№</span>
            <span>888</span>
            <span>люкс</span>
          </div>
          <div className="card__price">
            <span>9990₽</span>
            <span>в сутки</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoomCard;
