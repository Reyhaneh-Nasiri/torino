"use client";
import TransactionItem from "@/components/modules/TransactionItem";
import { useGetTransactions } from "@/core/services/queries";
import styles from "./index.module.css";

const Transactions = () => {
  const { data, isPending } = useGetTransactions();
  console.log(data);
  if (isPending) return <p>Loading...</p>;
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.headerItem}>تاریخ و ساعت</p>
        <p className={styles.headerItem}>
          مبلغ <span className={styles.unit}>(تومان)</span>
        </p>
        <p className={styles.headerItem}>شماره سفارش</p>
      </div>
      <ul className={styles.TransactionList}>
        {data.map((transaction) => (
          <TransactionItem key={transaction.id} {...transaction} />
        ))}
      </ul>
    </div>
  );
};

export default Transactions;
