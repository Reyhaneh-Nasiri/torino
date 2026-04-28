import Link from "next/link";
import styles from "./index.module.css";

const TourCard = ({ id, title, image, price }) => {
  return (
    <div className={styles.card}>
      <img width={327.44} height={159} src={image} alt={title} />
      <h3 className={styles.name}>{title}</h3>
      <p className={styles.description}>
        مهر ماه . 3 روزه - پرواز - هتل 3 س...
      </p>
      <div className={styles.cardFooter}>
        <Link href={`/tours/${id}`} className={styles.cardBtn}>
          رزرو
        </Link>
        <p>
          <span className={styles.price}>{price}</span>{" "}
          <span className={styles.unit}>تومان</span>
        </p>
      </div>
    </div>
  );
};

export default TourCard;
