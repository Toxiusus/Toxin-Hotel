import React, { useState, useEffect } from "react";
import prev from "../../assets/img/arrow-prev.svg";
import next from "../../assets/img/arrow-next.svg";

const DatePicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());
  const [daysInMonth, setDaysInMonth] = useState([]);
  const [open, setOpen] = useState(false);

  const handleRemoveClick = () => {
    setStartDate(null);
    setEndDate(null);
  };

  const monthNames = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];

  const getDaysInMonth = (month, year) => {
    const date = new Date(year, month + 1, 0);
    const days = [];
    for (let day = 1; day <= date.getDate(); day++) {
      days.push(day);
    }
    return days;
  };

  useEffect(() => {
    const days = getDaysInMonth(month, year);
    setDaysInMonth(days);
  }, [month, year]);

  const formatDate = (date) => {
    if (!date) return "";
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = String(date.getFullYear()).slice(2);
    return `${day}.${month}.${year}`;
  };

  const handleDateClick = (day) => {
    if (!startDate || endDate) {
      setStartDate(new Date(year, month, day));
      setEndDate(null);
    } else if (!endDate && startDate && day >= startDate.getDate()) {
      setEndDate(new Date(year, month, day));
    }
  };

  const isLanding = window.location.pathname === "/";

  // Форматируем диапазон дат для отображения в input
  const formattedDateRange = startDate && endDate
    ? `${formatDate(startDate)} - ${formatDate(endDate)}`
    : formatDate(startDate);

  return (
    <div className="datepicker">
      <div className="datepicker__container">
        {isLanding && (
          <>
            <h1 className="datepicker__maintitle">
              Найдём номера под ваши пожелания
            </h1>
          </>
        )}
        <div className="datepicker__status">
          {isLanding && (
            <>
              <h3>Прибытие</h3>
              <h3>Выезд</h3>
            </>
          )}
        </div>
        {isLanding && (
          <div className="datepicker__inputs">
            <div className="datepicker__inputs-arrow">
              <input
                onClick={() => setOpen(!open)}
                className="datepicker__input"
                type="text"
                value={formatDate(startDate)}
                placeholder="ДД.ММ.ГГГГ"
                readOnly
              />
            </div>
            <div className="datepicker__inputs-arrow">
              <input
                onClick={() => setOpen(!open)}
                className="datepicker__input"
                type="text"
                value={formatDate(endDate)}
                placeholder="ДД.ММ.ГГГГ"
                readOnly
              />
            </div>
          </div>
        )}
        {!isLanding && (
          <div className="datepicker__inputs-arrow">
            <input
              onClick={() => setOpen(!open)}
              className="datepicker__input"
              type="text"
              value={formattedDateRange}  // Показываем диапазон дат
              placeholder="ДД.ММ.ГГГГ - ДД.ММ.ГГГГ"
              readOnly
            />
          </div>
        )}
        {open && (
          <div className="datepicker__box">
            <div className="datepicker__navigation">
              <button
                className="datepicker__prev btn-reset datepicker__btn"
                onClick={() => setMonth((prev) => (prev === 0 ? 11 : prev - 1))}
              >
                <img src={prev} alt="prev" />
              </button>
              <div className="datepicker__title">
                <div className="datepicker__month">{monthNames[month]}</div>
                <div className="datepicker__year">{year}</div>
              </div>
              <button
                className="datepicker__next btn-reset datepicker__btn"
                onClick={() => setMonth((prev) => (prev === 11 ? 0 : prev + 1))}
              >
                <img src={next} alt="next" />
              </button>
            </div>
            <div className="datepicker__daysnames">
              <div>Пн</div>
              <div>Вт</div>
              <div>Ср</div>
              <div>Чт</div>
              <div>Пт</div>
              <div>Сб</div>
              <div>Вс</div>
            </div>
            <div className="datepicker__dates">
              {daysInMonth.map((day) => (
                <div
                  key={day}
                  className={`datepicker__day ${
                    (startDate && startDate.getDate() === day) ||
                    (endDate && endDate.getDate() === day)
                      ? "selected"
                      : ""
                  }`}
                  onClick={() => handleDateClick(day)}
                >
                  {day}
                </div>
              ))}
            </div>
            <div className="datepicker__buttons">
              <button
                onClick={handleRemoveClick}
                className="datepicker__delete btn-reset"
              >
                <span>Очистить</span>
              </button>
              <button
                onClick={() => setOpen(!open)}
                className="datepicker__submit btn-reset"
              >
                <span>Применить</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DatePicker;
