import { PLACES } from "@/constants/places";
import { VEHICLES } from "@/constants/vehicles";
import { formatCurrency } from "@/core/utils/currency";
import { toPersianDateLong } from "@/core/utils/date";
import styles from "./index.module.css";

const MyTourCard = ({ tour }) => {
  const {
    title,
    fleetVehicle,
    origin,
    destination,
    price,
    startDate,
    endDate,
  } = tour;

  const vehicleInfo = VEHICLES[fleetVehicle];
  return (
    <div className={styles.card}>
      <span className={styles.status}>به اتمام رسیده</span>
      <div className={styles.header}>
        <div className={styles.cardRow}>
          <h3 className={styles.title}>
            <i className="fa-solid fa-mountain-city"></i>
            {title}
          </h3>
          <span className={styles.type}>
            {vehicleInfo.icon}
            سفر با {vehicleInfo.name}
          </span>
        </div>

        <div className={styles.dates}>
          <div className={styles.dateItem}>
            <span className={styles.dateLabel}>
              {PLACES[origin.name]} به {PLACES[destination.name]}
            </span>
            <span className={styles.dateValue}>
              {toPersianDateLong(startDate)}
            </span>
          </div>
          <div className={styles.dateItem}>
            <span className={styles.dateLabel}>تاریخ برگشت:</span>
            <span className={styles.dateValue}>
              {toPersianDateLong(endDate)}
            </span>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.info}>
          <span className={styles.infoLabel}>شماره تور:</span>
          <span className={styles.infoValue}>102095404</span>
        </div>
        <div className={styles.border}></div>
        <div className={styles.price}>
          <span className={styles.priceLabel}>مبلغ پرداخت شده:</span>
          <span className={styles.priceAmount}>
            {formatCurrency(price)} <span className={styles.unit}>تومان</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default MyTourCard;
