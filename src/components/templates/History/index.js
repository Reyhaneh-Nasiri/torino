"use client";

import ErrorState from "@/components/common/ErrorState";
import EmptyState from "@/components/modules/history/EmptyState";
import MyTourCard from "@/components/modules/MyTourCard";
import { useGetHistory } from "@/core/services/queries";

import styles from "./index.module.css";

export const HISTORY_CONSTANTS = {
  LOADING_LABEL: "در حال بارگذاری اطلاعات",
  LOADING_TEXT: "در حال بارگذاری تاریخچه تورها...",
  SECTION_LABEL: "تاریخچه تورهای رزرو شده",
};

const { LOADING_LABEL, LOADING_TEXT, SECTION_LABEL } = HISTORY_CONSTANTS;

const History = () => {
  const { data, isPending, isFetching, isError, refetch } = useGetHistory();

  if (isPending) {
    return (
      <section aria-label={LOADING_LABEL}>
        <p>{LOADING_TEXT}</p>
      </section>
    );
  }

  if (isError) return <ErrorState onRetry={refetch} isRetrying={isFetching} />;

  const tours = Array.isArray(data) ? data : [];

  return (
    <section className={styles.container} aria-label={SECTION_LABEL}>
      {tours.length ? (
        tours.map((tour) => <MyTourCard key={tour?.id} tour={tour} />)
      ) : (
        <EmptyState />
      )}
    </section>
  );
};

export default History;
