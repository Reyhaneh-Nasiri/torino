"use client";
import { useEffect, useState } from "react";

import gregorian from "react-date-object/calendars/gregorian";
import persian from "react-date-object/calendars/persian";
import gregorian_en from "react-date-object/locales/gregorian_en";
import persian_fa from "react-date-object/locales/persian_fa";
import DatePicker from "react-multi-date-picker";

import "./TourDatePicker.css";

const TourDatePicker = () => {
  const [value, setValue] = useState("");
  const [lang, setLang] = useState("fa");

  const isFa = lang === "fa";

  useEffect(() => {
    persian_fa["weekDays"] = persian_fa.weekDays.map((day) => {
      const dayName = day[0];
      const shortDayName = day[1].charAt(0);
      return [dayName, shortDayName];
    });
  }, []);

  return (
    <>
      <div style={{ direction: isFa ? "rtl" : "ltr" }}>
        <DatePicker
          mapDays={({ date }) => {
            const isFriday = date.weekDay.index === 6;
            if (isFriday) {
              return {
                className: "holiday-day",
              };
            }
          }}
          calendar={isFa ? persian : gregorian}
          locale={isFa ? persian_fa : gregorian_en}
          value={value}
          onChange={setValue}
          format={isFa ? "YYYY/MM/DD" : "YYYY-MM-DD"}
          calendarPosition="bottom-center"
          render={(value, openCalendar) => (
            <div className="tour-input" onClick={openCalendar}>
              <i className="fa-solid fa-calendar"></i>
              <span>{value || (isFa ? "انتخاب تاریخ" : "Select date")}</span>
            </div>
          )}
        />
      </div>
    </>
  );
};

export default TourDatePicker;

// <div style={{ marginBottom: 16 }}>
//   <button onClick={() => setLang("fa")}>فارسی</button>
//   <button onClick={() => setLang("en")}>English</button>
// </div>

{
  /* <DatePicker
        range
        rangeHover
        calendar={isFa ? persian : gregorian}
        locale={isFa ? persian_fa : gregorian_en}
        value={value}
        onChange={setValue}
        />  */
}
