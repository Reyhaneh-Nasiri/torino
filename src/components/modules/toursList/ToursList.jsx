import tourImg1 from "@/assets/images/tour1.png";
import tourImg2 from "@/assets/images/tour2.png";
import tourImg3 from "@/assets/images/tour3.png";
import tourImg4 from "@/assets/images/tour4.png";
import TourCard from "@/components/modules/tourCard/TourCard";
import styles from "./ToursList.module.css";
const tours = [
  {
  id: 1,
  image: tourImg1,
  name: "هولیر",
  description: "مهر ماه . 3 روزه - پرواز - هتل 3 س...",
  price: 17500000,
},
  {
  id: 2,
  image: tourImg2,
  name: "سلیمانیه",
  description: "مهر ماه . 6 روزه - پرواز - هتل 5 س...",
  price: 27500000,
},
  {
  id: 3,
  image: tourImg3,
  name: "تور مادرید",
  description: "مهر ماه . 3 روزه - پرواز - هتل 3 س...",
  price: 34000000,
},
  {
  id: 4,
  image: tourImg4,
  name: "تور کردستان",
  description: "مهر ماه . 3 روزه - پرواز - هتل 3 س...",
  price: 7500000,
},
];
const ToursList = () => {
  return (
    <div className={styles.container}>
      <h2>همه تور ها</h2>
      <div className={styles.tours}>
        {tours.map(tour => <TourCard key={tour.id} {...tour} />)}
      </div>
      <div className={styles.moreBtnContainer}>
        <button className={styles.moreBtn}>
          مشاهده بیشتر <i className="fa-solid fa-angle-down"></i>
        </button>
      </div>
    </div>
  );
};

export default ToursList;
