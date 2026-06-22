"use client";

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

const MyTourCard = ({ tour = {} }) => {
  const {
    title,
    fleetVehicle,
    origin,
    destination,
    price,
    startDate,
    endDate,
  } = tour;

  const status = getTourStatus(startDate, endDate);

  const vehicleInfo = VEHICLES[fleetVehicle] || {};
  const originLabel = origin?.name ? PLACES[origin.name] : "مبدأ نامشخص";
  const destinationLabel = destination?.name
    ? PLACES[destination.name]
    : "مقصد نامشخص";
  const formattedStartDate = toPersianDateLong(startDate);
  const formattedEndDate = toPersianDateLong(endDate);

  return (
    <div className={styles.card}>
      <span className={`${styles[status]} ${styles.status}`}>
        {STATUS_LABEL[status]}
      </span>
      <div className={styles.header}>
        <div className={styles.cardRow}>
          <h3 className={styles.title}>
            <i className="fa-solid fa-mountain-city"></i>
            {title || "عنوان نامشخص"}
          </h3>
          <span className={styles.type}>
            {vehicleInfo.icon || <i className="fa-solid fa-bus"></i>}
            سفر با {vehicleInfo.name || "وسیله نامشخص"}
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
      </div>

      <div className={styles.footer}>
        <div className={styles.info}>
          <span className={styles.infoLabel}>شماره تور</span>
          <span className={styles.infoValue}>102095404</span>
        </div>
        <div className={styles.border}></div>
        <div className={styles.price}>
          <span className={styles.priceLabel}>مبلغ پرداخت شده</span>
          <span className={styles.priceAmount}>
            {formatCurrency(price ?? 0)}{" "}
            <span className={styles.unit}>تومان</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default MyTourCard;
