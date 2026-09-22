import { ArrowRight, CalendarOff } from "lucide-react";
import Link from "next/link";

import styles from "./index.module.css";

const EmptyState = () => {
  return (
    <div className={styles["empty-state-container"]}>
      <div className={styles["empty-state-icon"]}>
        <CalendarOff size={48} strokeWidth={1.5} />
      </div>

      <h3 className={styles["empty-state-title"]}>هنوز تور فعالی ندارید!</h3>

      <p className={styles["empty-state-description"]}>
        از میان تورهای ما، سفر خاطره‌انگیز بعدی‌تان را همین حالا رزرو کنید.
      </p>

      <Link href="/" className={styles["empty-state-button"]}>
        <span>مشاهده و رزرو تورها</span>
        <ArrowRight
          size={18}
          strokeWidth={2}
          className={styles["button-icon"]}
        />
      </Link>
    </div>
  );
};

export default EmptyState;
