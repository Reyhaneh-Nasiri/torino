"use client";
import { useEffect, useState } from "react";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DatePicker from "react-multi-date-picker";
import "./index.css";

const TourDatePicker = () => {
  const [value, setValue] = useState("");

  useEffect(() => {
    persian_fa["weekDays"] = persian_fa.weekDays.map((day) => {
      const dayName = day[0];
      const shortDayName = day[1].charAt(0);
      return [dayName, shortDayName];
    });
  }, []);

  return (
    <>
      <div className="tour-date-picker">
        <DatePicker
          mapDays={({ date }) => {
            const isFriday = date.weekDay.index === 6;
            if (isFriday) {
              return {
                className: "holiday-day",
              };
            }
          }}
          calendar={persian}
          locale={persian_fa}
          value={value}
          onChange={setValue}
          format={"YYYY/MM/DD"}
          calendarPosition="bottom-center"
          render={(value, openCalendar) => (
            <div className="tour-input" onClick={openCalendar}>
              <i className="fa-solid fa-calendar"></i>
              <span>{value || "انتخاب تاریخ"}</span>
            </div>
          )}
        />
      </div>
    </>
  );
};

export default TourDatePicker;

{
  /* <DatePicker
        range
        rangeHover
        calendar={persian}
        locale={persian_fa}
        value={value}
        onChange={setValue}
        />  */
}
