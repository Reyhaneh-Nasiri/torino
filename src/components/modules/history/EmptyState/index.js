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
            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 9v7.5"
          />
        </svg>
      </div>

      <h3 className={styles["empty-state-title"]}>هنوز تور فعالی ندارید!</h3>

      <p className={styles["empty-state-description"]}>
        از میان تورهای ما، سفر خاطره‌انگیز بعدی‌تان را همین حالا رزرو کنید.
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
