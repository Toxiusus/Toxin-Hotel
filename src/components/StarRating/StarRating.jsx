import React, { useState } from "react";
import "./StarRating.scss";

// Компонент для звездного рейтинга
const StarRating = ({ initialRating }) => {
  const [rating, setRating] = useState(initialRating); // Состояние для текущего рейтинга
  const stars = [1, 2, 3, 4, 5]; // Массив для 5 звезд

  const handleClick = (newRating) => {
    setRating(newRating); // Обновляем рейтинг при клике
  };

  return (
    <div className="star-rating">
      {stars.map((star) => (
        <span
          key={star}
          className={`star ${rating >= star ? "filled" : ""}`}
          onClick={() => handleClick(star)} // Обработчик клика
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;
