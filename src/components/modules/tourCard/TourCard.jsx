import Image from "next/image";
import Link from "next/link";
import styles from "./TourCard.module.css";

const TourCard = ({id , name, image, description, price}) => {

  return (
    <div className={styles.card}>
      <Image width={327.44} height={159} src={image} alt={name} />
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.cardFooter}>
        <Link href={`/tours/${id}`} className={styles.cardBtn}>رزرو</Link>
        <p>
          <span className={styles.price}>{price}</span> <span className={styles.unit}>تومان</span>
        </p>
      </div>
    </div>
  );
};

export default TourCard;
