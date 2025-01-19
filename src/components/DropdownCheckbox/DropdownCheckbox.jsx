import React, { useState } from "react";
import Checkbox from "../Checkbox/Checkbox";
import "./DropdownCheckbox.scss";

function DropdownCheckbox() {
  return (
    <div className="dropdown-checkbox">
      <h3 className="dropdown-checkbox__title">дополнительные удобства</h3>
      <div className="dropdown-checkbox__container">
        <Checkbox text="Завтрак" />
        <Checkbox text="Письменный стол" />
        <Checkbox text="Стул для кормления" />
        <Checkbox text="Кроватка" />
        <Checkbox text="Телевизор" />
        <Checkbox text="Шампунь" />
        <Checkbox text="Телевизор" />
        <Checkbox text="Шампунь" />
      </div>
    </div>
  );
}

export default DropdownCheckbox;
