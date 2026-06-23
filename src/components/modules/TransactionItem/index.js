"use client";
import { formatCurrency } from "@/core/utils/currency";
import { formatTransactionDate } from "@/core/utils/date";
import { e2p } from "@/core/utils/digit";
import styles from "./index.module.css";

const TransactionItem = ({ amount, createdAt }) => {
  return (
    <div className={styles.container}>
      <p className={styles.time}>{formatTransactionDate(createdAt)}</p>
      <p className={styles.amount}>{formatCurrency(amount)}</p>
      <p className={styles.type}>ثبت نام در تور گردشگری</p>
      <p className={styles.orderId}>{e2p(12054902)}</p>
    </div>
  );
};

export default TransactionItem;
