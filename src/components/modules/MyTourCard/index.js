"use client";

import { BusFront, Mountain } from "lucide-react";

import { PLACES } from "@/constants/places";
import { VEHICLES } from "@/constants/vehicles";
import { formatCurrency } from "@/core/utils/currency";
import { toPersianDateLong } from "@/core/utils/date";

import styles from "./index.module.css";

const STATUS_LABEL = {
  upcoming: "به زودی",
  ongoing: "درحال برگزاری",
  finished: "به اتمام رسیده",
  unknown: "نامشخص",
};

const getTourStatus = (startDate, endDate) => {
  if (!startDate || !endDate) return "unknown";

  const start = new Date(startDate);
  const end = new Date(endDate);

  if (isNaN(start.getTime()) || isNaN(end.getTime())) return "unknown";

  const now = new Date();

  if (now < start) return "upcoming";
  if (now >= start && now <= end) return "ongoing";
  return "finished";
};

const displayTourId = (id, startChars = 6, endChars = 4) => {
  if (!id) return "---";
  if (id.length <= startChars + endChars) return id;
  return `${id.slice(0, startChars)}...${id.slice(-endChars)}`;
};

const MyTourCard = ({ tour = {} }) => {
  const {
    id,
    title,
    fleetVehicle,
    origin,
    destination,
    price,
    startDate,
    endDate,
  } = tour;

  const status = getTourStatus(startDate, endDate);

  const vehicleKey =
    typeof fleetVehicle === "string" ? fleetVehicle.toLowerCase() : "";
  const vehicleInfo = VEHICLES[vehicleKey];
  const vehicleIcon = vehicleInfo?.icon ? (
    <vehicleInfo.icon strokeWidth={3} />
  ) : (
    <BusFront strokeWidth={3} />
  );
  const originName =
    typeof origin?.name === "string" ? origin.name.toLowerCase() : "";
  const destinationName =
    typeof destination?.name === "string" ? destination.name.toLowerCase() : "";

  const originLabel = originName ? PLACES[originName] : "مبدأ نامشخص";
  const destinationLabel = destinationName
    ? PLACES[destinationName]
    : "مقصد نامشخص";

  const formattedStartDate = startDate
    ? toPersianDateLong(startDate)
    : "تاریخ نامشخص";
  const formattedEndDate = endDate
    ? toPersianDateLong(endDate)
    : "تاریخ نامشخص";

  return (
    <article
      className={styles.card}
      aria-label={`تور: ${title || "بدون عنوان"}`}
    >
      <span
        className={`${styles[status] || styles.unknown} ${styles.status}`}
        aria-label={`وضعیت تور: ${STATUS_LABEL[status]}`}
      >
        {STATUS_LABEL[status]}
      </span>

      <header className={styles.header}>
        <div className={styles.cardRow}>
          <h3 className={styles.title}>
            <Mountain />
            {title || "عنوان نامشخص"}
          </h3>
          <span className={styles.type}>
            {vehicleIcon}
            {vehicleInfo?.name ? `سفر با ${vehicleInfo?.name}` : "وسیله نامشخص"}
          </span>
        </div>

        <div className={styles.dates}>
          <div className={styles.dateItem}>
            <span className={styles.dateLabel}>
              {originLabel} به {destinationLabel}
            </span>
            <span className={styles.dateValue}>{formattedStartDate}</span>
          </div>
          <div className={styles.dateItem}>
            <span className={styles.dateLabel}>تاریخ برگشت</span>
            <span className={styles.dateValue}>{formattedEndDate}</span>
          </div>
        </div>
      </header>

      <footer className={styles.footer}>
        <div className={styles.info}>
          <span className={styles.infoLabel}>شماره تور</span>
          <span className={styles.infoValue} title={id}>
            {displayTourId(id)}
          </span>
        </div>
        <div className={styles.border} aria-hidden="true" />
        <div className={styles.price}>
          <span className={styles.priceLabel}>مبلغ پرداخت شده</span>
          <span className={styles.priceAmount}>
            {price != null ? (
              <>
                {formatCurrency(price)}
                <span className={styles.unit}>تومان</span>
              </>
            ) : (
              <span>نامشخص</span>
            )}
          </span>
        </div>
      </footer>
    </article>
  );
};

export default MyTourCard;
