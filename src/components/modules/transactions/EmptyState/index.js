import { ArrowRight, ReceiptText } from "lucide-react";
import Link from "next/link";

import styles from "./index.module.css";

const EmptyState = () => {
  return (
    <div className={styles["empty-state-container"]}>
      <div className={styles["empty-state-icon"]}>
        <ReceiptText size={48} strokeWidth={1.5} />
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
