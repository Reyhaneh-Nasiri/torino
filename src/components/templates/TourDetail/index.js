import ReserveBuyCTA from "@/components/modules/ReserveBuyCTA";
import { PLACES } from "@/constants/places";
import { VEHICLES } from "@/constants/vehicles";
import { formatCurrency } from "@/core/utils/currency";
import { diffDaysAndNights, toPersianDate } from "@/core/utils/date";
import { e2p } from "@/core/utils/digit";
import Image from "next/image";
import styles from "./index.module.css";

const TourDetail = ({
  id,
  image,
  title,
  price,
  endDate,
  startDate,
  fleetVehicle,
  availableSeats,
  origin,
}) => {
  return (
    <div className={styles.bg}>
      <div className={`${styles.container} content-boxed`}>
        <div>
          <div>
            <Image
              width={330}
              height={220}
              unoptimized
              src={image}
              alt={title}
            />
          </div>
          <div>
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

            <div className={styles.informationMobile}>
              <div>
                <p>
                  {VEHICLES[fleetVehicle].icon}
                  حمل و نقل:
                </p>
                <p>{VEHICLES[fleetVehicle].name}</p>
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
              <div className={styles.reserveBuyCTA}>
                <ReserveBuyCTA id={id} availableSeats={availableSeats} />
              </div>
              <p>
                <span className={styles.price}>{formatCurrency(price)}</span>
                <span className={styles.unit}>تومان</span>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.informationDesktop}>
          <div>
            <p>
              <i className="fa-solid fa-route"></i>
              مبدا
            </p>
            <p>{PLACES[origin?.name]}</p>
          </div>
          <div>
            <p>
              <i className="fa-solid fa-calendar"></i>
              تاریخ رفت
            </p>
            <p>{toPersianDate(startDate)}</p>
          </div>
          <div>
            <p>
              <i className="fa-solid fa-calendar"></i>
              تاریخ برگشت
            </p>
            <p>{toPersianDate(endDate)}</p>
          </div>
          <div>
            <p>
              {VEHICLES[fleetVehicle].icon}
              حمل و نقل:
            </p>
            <p>{VEHICLES[fleetVehicle].name}</p>
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
      </div>
    </div>
  );
};

export default TourDetail;
