import heroBg from "@/assets/images/torino-hero-travel-illustration.webp";
import Image from "next/image";
import styles from "./index.module.css";

const Banner = () => {
  return (
    <div className={`${styles.container} content-full`}>
      <div className={styles.image}>
        <Image src={heroBg} alt="بنر اصلی" priority />
      </div>

      <h1 className={styles.title}>
        <span>تورینو</span> برگزار کننده بهترین تور های داخلی و خارجی
      </h1>
    </div>
  );
};

export default Banner;

// <Image src="/tour.jpg" alt="تور دبی" fill style={{ objectFit: 'cover' }} />
