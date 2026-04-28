import TourCard from "@/components/modules/TourCard";
import styles from "./index.module.css";

const ToursList = ({ toursData }) => {
  return (
    <div className={styles.container}>
      <h2>همه تور ها</h2>
      {!toursData ? (
        <p>نتیجه‌ای یافت نشد</p>
      ) : (
        <main className={styles.tours}>
          {toursData.slice(0, 4).map((tour) => (
            <TourCard key={tour.id} {...tour} />
          ))}
        </main>
      )}

      <div className={styles.moreBtnContainer}>
        <button className={styles.moreBtn}>
          مشاهده بیشتر <i className="fa-solid fa-angle-down"></i>
        </button>
      </div>
    </div>
  );
};

export default ToursList;
