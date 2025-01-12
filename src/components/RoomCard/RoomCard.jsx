import React, { useState } from "react";

import roomFirst from "../../assets/img/room-0.jpeg";
import roomSecond from "../../assets/img/room-1.jpeg";
import roomThird from "../../assets/img/room-2.jpeg";
import StarRating from "../StarRating/StarRating";

import "./RoomCard.scss";

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
        <button className="prev-btn card__slider-btn" onClick={prevImage}>
          prev
        </button>
        <a href="#">
          <img
            src={images[currentIndex]}
            alt={`Room ${currentIndex}`}
            className="card__slider-img"
          />
        </a>
        <button className="next-btn card__slider-btn" onClick={nextImage}>
          next
        </button>
      </div>
      <div className="card__info">
        <div className="card__data">
          <div className="card__number">
            <span className="card__number-symbol">№</span>
            <span className="card__number-value">888</span>
            <span className="card__number-text">люкс</span>
          </div>
          <div className="card__price">
            <span className="card__price-value">9990₽</span>
            <span className="card__price-text">в сутки</span>
          </div>
        </div>
        <div className="card__rating">
          <StarRating />
          <div className="comments">
            <span className="comments__value">145</span>
            <span className="comments__text">Отзывов</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoomCard;
