"use client";
import ReserveBuyCTA from "@/components/modules/ReserveBuyCTA";
import { PLACES } from "@/constants/places";
import { VEHICLES } from "@/constants/vehicles";
import { useTourCapacity } from "@/core/services/queries";
import { formatCurrency } from "@/core/utils/currency";
import { diffDaysAndNights, toPersianDate } from "@/core/utils/date";
import { e2p } from "@/core/utils/digit";
import Image from "next/image";
import styles from "./index.module.css";

const InfoItem = ({ icon, label, value, isAnimated = false }) => (
  <div>
    <p>
      {icon && (typeof icon === "string" ? <i className={icon}></i> : icon)}
      {label}:
    </p>
    <p key={value} className={isAnimated ? styles.animatedValue : ""}>
      {value}
    </p>
  </div>
);

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
  const { data: capacity } = useTourCapacity(id, availableSeats);

  const vehicleKey = fleetVehicle?.toLowerCase();
  const vehicleData = VEHICLES[vehicleKey];

  const vehicleName = vehicleData?.name || fleetVehicle || "نامشخص";
  const vehicleIcon = vehicleData?.icon || <i className="fa-solid fa-bus"></i>;

  const originKey = origin?.name?.toLowerCase();
  const originName = PLACES[originKey] || origin?.name || "نامشخص";

  const activeCapacity = capacity ?? availableSeats;
  const isSoldOut = activeCapacity === 0;

  const seatsText =
    typeof activeCapacity === "number"
      ? activeCapacity > 0
        ? `حداکثر ${e2p(activeCapacity)} نفر`
        : "تکمیل"
      : "نامشخص";

  const insuranceText = `بیمه ${e2p(50)} هزار دیناری`;

  const commonInfoList = [
    {
      id: "vehicle",
      icon: vehicleIcon,
      label: "حمل و نقل",
      value: vehicleName,
    },
    {
      id: "capacity",
      icon: "fa-solid fa-users",
      label: "ظرفیت",
      value: seatsText,
      isAnimated: true,
    },
    {
      id: "insurance",
      icon: "fa-solid fa-shield-halved",
      label: "بیمه",
      value: insuranceText,
    },
  ];

  const desktopOnlyList = [
    {
      id: "origin",
      icon: "fa-solid fa-route",
      label: "مبدا",
      value: originName,
    },
    {
      id: "startDate",
      icon: "fa-solid fa-calendar",
      label: "تاریخ رفت",
      value: toPersianDate(startDate),
    },
    {
      id: "endDate",
      icon: "fa-solid fa-calendar",
      label: "تاریخ برگشت",
      value: toPersianDate(endDate),
    },
  ];

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
              alt={title || "تصویر تور"}
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
              {commonInfoList.map((item) => (
                <InfoItem key={item.id} {...item} />
              ))}
            </div>

            <div className={styles.footer}>
              <div className={styles.reserveBuyCTA}>
                <ReserveBuyCTA id={id} isSoldOut={isSoldOut} />
              </div>
              <p>
                <span className={styles.price}>{formatCurrency(price)}</span>
                <span className={styles.unit}>تومان</span>
              </p>
            </div>
          </div>
        </div>

        <div className={styles.informationDesktop}>
          {[...desktopOnlyList, ...commonInfoList].map((item) => (
            <InfoItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TourDetail;
