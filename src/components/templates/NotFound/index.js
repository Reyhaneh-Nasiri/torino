import error404 from "@/assets/images/error-404.svg";
import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";

const NOT_FOUND_CONTENT = {
  title: "صفحه مورد نظر یافت نشد!",
  actionText: "بازگشت به صفحه اصلی",
  imageAlt: "error 404 image",
  href: "/",
};

const NotFoundPage = () => {
  const { title, actionText, imageAlt, href } = NOT_FOUND_CONTENT;
  return (
    <div className={`${styles.container} content-boxed`}>
      <div className={styles.imageWrapper}>
        <Image fill priority src={error404} alt={imageAlt} />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>

        <Link href={href} className={styles.backToHomeBtn}>
          {actionText}
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
