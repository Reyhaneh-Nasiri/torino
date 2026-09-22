"use client";

import { Mountain, ReceiptText, UserRound } from "lucide-react";
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
          <UserRound />
          پروفایل
        </Link>
      </li>
      <li
        className={`${styles.tabItem} ${pathName.includes("history") ? styles.active : null}`}
      >
        <Link href="/dashboard/history">
          <Mountain />
          تور های من
        </Link>
      </li>
      <li
        className={`${styles.tabItem} ${pathName.includes("transactions") ? styles.active : null}`}
      >
        <Link href="/dashboard/transactions">
          <ReceiptText />
          تراکنش ها
        </Link>
      </li>
    </ul>
  );
};

export default DashboardTabs;
