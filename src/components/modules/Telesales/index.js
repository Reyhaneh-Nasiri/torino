import telesalesOperator from "@/assets/images/telesales-operator.png";
import Image from "next/image";

import styles from "./index.module.css";

const Telesales = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div>
          <h3 className={styles.title}>
            خرید تلفی از <span>تورینو</span>
          </h3>
          <p className={styles.description}>به هرکجا که میخواهید!</p>
        </div>
        <Image
          width={195}
          height={158}
          src={telesalesOperator}
          alt="telesales operator"
        />
      </div>
      <div className={styles.bottom}>
        <p className={styles.phoneNumber}>
          <a href="tel:0211840">
            021-1840 <i className="fa-solid fa-phone"></i>
          </a>
        </p>
        <button className={styles.moreInfoBtn}>اطلاعات بیشتر</button>
      </div>
    </div>
  );
};

export default Telesales;
