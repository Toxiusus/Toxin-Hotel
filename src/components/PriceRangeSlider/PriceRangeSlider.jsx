import React, { useState, useEffect } from "react";
import "./PriceRangeSlider.scss";

const PriceRangeSlider = ({ min, max, step }) => {
  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);

  // Инициализация значений слайдера при первом рендере
  useEffect(() => {
    // Начальные значения слайдеров — половина диапазона
    const initialMinValue = min + (max - min) / 4;
    const initialMaxValue = max - (max - min) / 4;
    setMinValue(initialMinValue);
    setMaxValue(initialMaxValue);
  }, [min, max]); // Этот эффект срабатывает, если min и max изменяются

  const handleMinChange = (e) => {
    const value = Math.min(e.target.value, maxValue - step); // Ограничиваем минимальное значение
    setMinValue(Number(value)); // Обновляем minValue
  };

  const handleMaxChange = (e) => {
    const value = Math.max(e.target.value, minValue + step); // Ограничиваем максимальное значение
    setMaxValue(Number(value)); // Обновляем maxValue
  };

  return (
    <div className="slider-container">
      <div className="range-labels">
        <div>
          <span className="range-labels__title">диапазон цены</span>
        </div>
        <div>
          <span className="range-labels__value">{minValue}</span>
          <span>-</span>
          <span className="range-labels__value">{maxValue}</span>
        </div>
      </div>

      <div className="slider">
        <div className="slider-track">
          <div
            className="slider-range"
            style={{
              left: `${((minValue - min) / (max - min)) * 100}%`,
              width: `${((maxValue - minValue) / (max - min)) * 100}%`,
            }}
          />
        </div>

        {/* Слайдер для minValue */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={minValue}
          onChange={handleMinChange}
          className="slider-input min-slider"
        />

        {/* Слайдер для maxValue */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={maxValue}
          onChange={handleMaxChange}
          className="slider-input max-slider"
        />
      </div>
      <div>
        <span className="under-text">
          Стоимость за сутки пребывания в номере
        </span>
      </div>
    </div>
  );
};

export default PriceRangeSlider;
