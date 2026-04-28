"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./index.module.css";

const DashboardTabs = () => {
  const pathName = usePathname();
  return (
    <ul className={styles.tabs}>
      <li
        className={`${styles.tabItem} ${pathName.includes("profile") ? styles.active : null}`}
      >
        <Link href="/dashboard/profile">
          <i className="fa-solid fa-user"></i>
          پروفایل
        </Link>
      </li>
      <li
        className={`${styles.tabItem} ${pathName.includes("history") ? styles.active : null}`}
      >
        <Link href="/dashboard/history">
          <i className="fa-solid fa-mountain-city"></i>
          تور های من
        </Link>
      </li>
      <li
        className={`${styles.tabItem} ${pathName.includes("transactions") ? styles.active : null}`}
      >
        <Link href="/dashboard/transactions">
          <i className="fa-solid fa-receipt"></i>
          تراکنش ها
        </Link>
      </li>
    </ul>
  );
};

export default DashboardTabs;
