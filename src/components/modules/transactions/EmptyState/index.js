import Link from "next/link";
import styles from "./index.module.css";

const EmptyState = () => {
  return (
    <div className={styles["empty-state-container"]}>
      <div className={styles["empty-state-icon"]}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 3h6m-3-15h-9a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 4.5 21h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-9"
          />
        </svg>
      </div>

      <h3 className={styles["empty-state-title"]}>
        لیست تراکنش‌های شما خالی است
      </h3>

      <p className={styles["empty-state-description"]}>
        پس از اولین خرید یا رزرو تور، اطلاعات مالی شما در اینجا قابل مشاهده
        خواهد بود.
      </p>

      <Link href="/" className={styles["empty-state-button"]}>
        <span>مشاهده و رزرو تورها</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className={styles["button-icon"]}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      </Link>
    </div>
  );
};

export default EmptyState;
