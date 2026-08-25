"use client";
import ErrorState from "@/components/common/ErrorState";
import TransactionItem from "@/components/modules/TransactionItem";
import EmptyState from "@/components/modules/transactions/EmptyState";
import { useGetTransactions } from "@/core/services/queries";
import styles from "./index.module.css";

const Transactions = () => {
  const { data, isPending, isFetching, isError, refetch } =
    useGetTransactions();

  if (isPending) return <p>Loading...</p>;

  if (isError) return <ErrorState onRetry={refetch} isRetrying={isFetching} />;

  if (!data?.length) return <EmptyState />;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.headerItem}>تاریخ و ساعت</p>
        <p className={styles.headerItem}>
          مبلغ <span className={styles.unit}>(تومان)</span>
        </p>
        <p className={`${styles.headerItem} ${styles.type}`}>نوع تراکنش</p>
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
