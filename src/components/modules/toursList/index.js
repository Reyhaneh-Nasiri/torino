"use client";
import TourCard from "@/components/modules/TourCard";
import { PLACES } from "@/constants/places";
import { useMediaQuery } from "@/core/hooks/useMediaQuery";
import { useState } from "react";
import styles from "./index.module.css";

const ToursList = ({ toursData, query }) => {
  const [count, setCount] = useState(1);
  const isDesktop = useMediaQuery("(min-width: 1025px)");
  const isTablet = useMediaQuery("(min-width: 768px)");

  let itemsPerPage = 4;

  if (isDesktop) {
    itemsPerPage = 8;
  } else if (isTablet) {
    itemsPerPage = 6;
  }
  const visibleTours = toursData.slice(0, count * itemsPerPage);
  const hasMore = visibleTours.length < toursData.length;
  const canCollapse = count > 1;

  return (
    <div className={`${styles.container} content-boxed`}>
      {query.originId && query.destinationId ? (
        <h2>
          {PLACES[toursData[0]?.origin.name]}
          {PLACES[toursData[0]?.origin?.name] ? " - " : null}
          {PLACES[toursData[0]?.destination.name]}
        </h2>
      ) : (
        <h2>همه تور ها</h2>
      )}

      {!toursData.length ? (
        <p style={{ textAlign: "center" }}>نتیجه‌ای یافت نشد</p>
      ) : (
        <>
          <main className={styles.tours}>
            {visibleTours.map((tour) => (
              <TourCard key={tour.id} {...tour} />
            ))}
          </main>

          <div className={styles.moreBtnContainer}>
            {hasMore && (
              <button
                className={styles.moreBtn}
                onClick={() => setCount((prev) => prev + 1)}
              >
                مشاهده بیشتر <i className="fa-solid fa-angle-down"></i>
              </button>
            )}

            {canCollapse && (
              <button className={styles.moreBtn} onClick={() => setCount(1)}>
                مشاهده کمتر <i className="fa-solid fa-angle-up"></i>
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default ToursList;
