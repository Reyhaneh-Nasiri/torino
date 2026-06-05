"use client";
import connectionErrorImg from "@/assets/images/connection-error.svg";

import Image from "next/image";
import styles from "./index.module.css";

const ConnectionError = () => {
  return (
    <div className={`${styles.container} content-boxed`}>
      <div className={styles.imageWrapper}>
        <Image
          fill
          priority
          src={connectionErrorImg}
          alt="connection-error-image"
        />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>اتصال با سرور برقرار نیست!</h2>
        <p className={styles.text}>لطفا بعدا دوباره امتحان کنید.</p>
      </div>
    </div>
  );
};

export default ConnectionError;
