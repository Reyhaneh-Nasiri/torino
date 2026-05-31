import error404 from "@/assets/images/error-404.svg";
import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";

const NotFoundPage = () => {
  return (
    <div className={`${styles.container} content-boxed`}>
      <div className={styles.imageWrapper}>
        <Image fill priority src={error404} alt="error 404 image" />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>صفحه مورد نظر یافت نشد!</h2>
        <Link href="/" className={styles.backToHomeBtn}>
          بازگشت به صفحه اصلی
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
