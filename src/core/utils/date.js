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
  const date = new Date(isoString);

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

export {
  diffDaysAndNights,
  formatTransactionDate,
  toPersianDate,
  toPersianDateLong,
};
