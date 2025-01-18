import React, { useState } from "react";
import "./Checkbox.scss";

function Checkbox({ text, toptext }) {
  // Состояния для каждого чекбокса
  const [checked1, setChecked1] = useState(false);

  // Обработчики изменения состояния для каждого чекбокса
  const handleChange1 = (event) => setChecked1(event.target.checked);

  return (
    <div className="checkbox">
      <label className="checkbox__label">
        <p className="checkbox__text">{toptext}</p>
        <input
          className="checkbox__input"
          type="checkbox"
          checked={checked1}
          onChange={handleChange1}
        />
        <span className="checkbox__span"></span>
        {text}
      </label>
    </div>
  );
}

export default Checkbox;
