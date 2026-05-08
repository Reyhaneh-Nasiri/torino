import ReserveBuyCTA from "@/components/modules/ReserveBuyCTA";
import { formatCurrency } from "@/core/utils/currency";
import { diffDaysAndNights } from "@/core/utils/date";
import { e2p } from "@/core/utils/digit";
import styles from "./index.module.css";

const VEHICLE = {
  Bus: "اتوبوس",
  Train: "قطار",
  Airplane: "هواپیما",
  SUV: "شاسی‌بلند",
  Van: "ون",
};

const VEHICLE_ICONS = {
  Bus: <i className="fas fa-bus-alt"></i>,
  Train: <i className="fas fa-train-subway"></i>,
  Airplane: <i className="fas fa-plane"></i>,
  SUV: <i className="fas fa-car"></i>,
  Van: <i className="fas fa-shuttle-van"></i>,
};

const TourDetail = ({
  id,
  image,
  title,
  price,
  endDate,
  startDate,
  fleetVehicle,
  availableSeats,
}) => {
  return (
    <div className={styles.container}>
      <img src={image} alt="tour image" />
      <div className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.duration}>
          {diffDaysAndNights(endDate, startDate)}
        </p>
      </div>

      <div className={styles.properties}>
        <p>
          <i className="fa-solid fa-user-tie"></i> تورلیدر از مبدا
        </p>
        <p>
          <i className="fa-solid fa-route"></i> برنامه سفر
        </p>
        <p>
          <i className="fa-solid fa-award"></i> تضمین کیفیت
        </p>
      </div>

      <div className={styles.information}>
        <div>
          <p>
            {VEHICLE_ICONS[fleetVehicle]}
            حمل و نقل:
          </p>
          <p>{VEHICLE[fleetVehicle]}</p>
        </div>
        <div>
          <p>
            <i className="fa-solid fa-users"></i>
            ظرفیت:
          </p>
          <p>
            {availableSeats
              ? ` حداکثر
            ${e2p(availableSeats)} نفر`
              : "تکمیل"}
          </p>
        </div>
        <div>
          <p>
            <i className="fa-solid fa-shield-halved"></i>
            بیمه:
          </p>
          <p>بیمه {e2p(50)} هزار دیناری</p>
        </div>
      </div>
      <div className={styles.footer}>
        <ReserveBuyCTA id={id} availableSeats={availableSeats}/>
        <p>
          <span className={styles.price}>{formatCurrency(price)}</span>
          <span className={styles.unit}>تومان</span>
        </p>
      </div>
      {/* <li>مبدا: {origin.name}</li>
        <li>تاریخ رفت: {toPersianDate(startDate)}</li>
        <li>تاریخ برگشت: {toPersianDate(endDate)}</li> */}
    </div>
  );
};

export default TourDetail;
