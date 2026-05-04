"use client";
import { useEffect } from "react";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { Controller } from "react-hook-form";
import DatePicker from "react-multi-date-picker";
import "./index.css";

const BirthDatePicker = ({ control }) => {
  useEffect(() => {
    persian_fa["weekDays"] = persian_fa.weekDays.map((day) => {
      const dayName = day[0];
      const shortDayName = day[1].charAt(0);
      return [dayName, shortDayName];
    });
  }, []);
  return (
    <>
      <Controller
        control={control}
        name="birthDate"
        render={({ field: { onChange, value } }) => (
          <>
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
              onChange={(date) => {
                const jalaliDate = date ? date.toString() : "";
                onChange(jalaliDate);
              }}
              format="YYYY/MM/DD"
              calendarPosition="bottom-center"
              render={(value, openCalendar) => (
                <div className={`tour-input ${value ? "value" : "emptyValue"}`} onClick={openCalendar}>
                  <i className="fa-solid fa-calendar"></i>
                  <span className={`${value ? "value" : "emptyValue"}`}>{value || "تاریخ تولد"}</span>
                </div>
              )}
            />
          </>
        )}
      />
    </>
  );
};

export default BirthDatePicker;
