import React, { useState } from "react";

import roomFirst from "../../assets/img/room-0.jpeg";
import roomSecond from "../../assets/img/room-1.jpeg";
import roomThird from "../../assets/img/room-2.jpeg";
import roomFourth from "../../assets/img/room-3.jpeg";
import roomFifth from "../../assets/img/room-4.jpeg";
import roomSixth from "../../assets/img/room-5.jpeg";
import roomSeventh from "../../assets/img/room-6.jpeg";
import roomEighth from "../../assets/img/room-7.jpeg";
import roomNinth from "../../assets/img/room-8.jpeg";
import roomTenth from "../../assets/img/room-9.jpeg";
import roomEleventh from "../../assets/img/room-10.jpeg";
import roomTwelfth from "../../assets/img/room-11.jpeg";
import StarRating from "../StarRating/StarRating";

import "./RoomCard.scss";

function RoomCard({ img, number, lux, price, comments }) {
  const images = [
    roomFirst,
    roomSecond,
    roomThird,
    roomFourth,
    roomFifth,
    roomSixth,
    roomSeventh,
    roomEighth,
    roomNinth,
    roomTenth,
    roomEleventh,
    roomTwelfth,
  ];

  const [currentIndex, setCurrentIndex] = useState(img);

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
        <button
          className="prev-btn card__slider-btn btn-reset"
          onClick={prevImage}
        ></button>
        <a href="/room-details">
          <img
            src={images[currentIndex]}
            alt={`Room ${currentIndex}`}
            className="card__slider-img"
          />
        </a>
        <button
          className="next-btn card__slider-btn btn-reset"
          onClick={nextImage}
        ></button>
      </div>
      <div className="card__info">
        <div className="card__data">
          <div className="card__number">
            <span className="card__number-symbol">№</span>
            <span className="card__number-value">{number}</span>
            <span className="card__number-text">{lux}</span>
          </div>
          <div className="card__price">
            <span className="card__price-value">{price}₽</span>
            <span className="card__price-text">в сутки</span>
          </div>
        </div>
        <div className="card__rating">
          <StarRating />
          <div className="comments">
            <span className="comments__value">{comments}</span>
            <span className="comments__text">Отзывов</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoomCard;
