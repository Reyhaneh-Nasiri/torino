"use client";
import MyTourCard from "@/components/modules/MyTourCard";
import { useGetHistory } from "@/core/services/queries";
import styles from "./index.module.css";

const History = () => {
  const { data, isPending } = useGetHistory();
  if (isPending) return <p>Loading...</p>;
  console.log(data);
  return (
    <div className={styles.container}>
      {data ? (
        data.map((tour, index) => (
          <MyTourCard
            key={`${index} ${tour.title} ${tour.startDate} ${tour.endDate}`}
            tour={tour}
          />
        ))
      ) : (
        <p>History is empty!</p>
      )}
    </div>
  );
};

export default History;
