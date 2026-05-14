import jalaali from "jalaali-js";
import { e2p } from "./digit";
import { formatTime } from "./time";

const toPersianDate = (isoString) => {
  const date = new Date(isoString);

  return new Intl.DateTimeFormat("fa-IR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
};

const toPersianDateLong = (isoString) => {
  if (!isoString) {
    return "تاریخ نامعتبر";
  }

  const date = new Date(isoString);

  if (isNaN(date.getTime())) {
    return "تاریخ نامعتبر";
  }

  return new Intl.DateTimeFormat("fa-IR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
};

const formatTransactionDate = (isoString) => {
  const date = new Date(isoString);
  return `${e2p(formatTime(date))} - ${new Intl.DateTimeFormat("fa-IR").format(date)}`;
};

const diffDaysAndNights = (date1, date2) => {
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  const diffMs = d1 - d2;
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  return `${e2p(days + 1)} روز و ${e2p(days)} شب`;
};

const jalaliToGregorianString = (jalaliStr) => {
  const parts = jalaliStr.replaceAll("-", "/").split("/");
  const jy = parseInt(parts[0], 10);
  const jm = parseInt(parts[1], 10);
  const jd = parseInt(parts[2], 10);

  const g = jalaali.toGregorian(jy, jm, jd);
  const yyyy = g.gy.toString().padStart(4, "0");
  const mm = g.gm.toString().padStart(2, "0");
  const dd = g.gd.toString().padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
};

const gregorianToJalaliString = (gregorianStr) => {
  if (!gregorianStr) return;
  const parts = gregorianStr.replaceAll("-", "/").split("/");
  const gy = parseInt(parts[0], 10);
  const gm = parseInt(parts[1], 10);
  const gd = parseInt(parts[2], 10);

  const j = jalaali.toJalaali(gy, gm, gd);

  const yyyy = j.jy.toString().padStart(4, "0");
  const mm = j.jm.toString().padStart(2, "0");
  const dd = j.jd.toString().padStart(2, "0");

  return `${yyyy}-${mm}-${dd}`;
};

export {
  diffDaysAndNights,
  formatTransactionDate,
  gregorianToJalaliString,
  jalaliToGregorianString,
  toPersianDate,
  toPersianDateLong
};

