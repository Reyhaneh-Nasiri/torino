import styles from "./index.module.css";

{
  /* <span class="tour-card__status tour-card__status--finished">به اتمام رسیده</span> */
}
const MyTourCard = () => {
  return (
    <div className={styles.card}>
      <span className={styles.status}>به اتمام رسیده</span>
      <div className={styles.header}>
        <div className={styles.cardRow}>
          <h3 className={styles.title}>
            <i className="fa-solid fa-mountain-city"></i>
            تور اقلیم کردستان
          </h3>
          <span className={styles.type}>
            <i className="fa-solid fa-plane"></i>
            سفر با هواپیما
          </span>
        </div>

        <div className={styles.dates}>
          <div className={styles.dateItem}>
            <span className={styles.dateLabel}>تهران به سلیمانیه </span>
            <span className={styles.dateValue}>دوشنبه 15 شهریور 1402</span>
          </div>
          <div className={styles.dateItem}>
            <span className={styles.dateLabel}>تاریخ برگشت:</span>
            <span className={styles.dateValue}>جمعه 19 شهریور 1402</span>
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
          <span className={styles.priceAmount}>18,000,000 <span className={styles.unit}>تومان</span></span>
        </div>
      </div>
    </div>
  );
};

export default MyTourCard;
