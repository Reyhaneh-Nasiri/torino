"use client";
import { useReserveBuy } from "@/core/services/mutations";
import { useRouter } from "next/navigation";
import styles from "./index.module.css";

const ReserveBuyCTA = ({ id, availableSeats }) => {
  const router = useRouter();
  const { mutate, isPending } = useReserveBuy(id);

  const handleReserve = () => {
    const payload = {
      id,
      data: id,
    };

    mutate(payload);
    router.push("/tours/checkout");
  };
  return (
    <>
      {availableSeats ? (
        <button
          className={styles.buyBtn}
          disabled={isPending}
          onClick={handleReserve}
        >
          {isPending ? "در حال رزرو..." : "رزرو و خرید"}
        </button>
      ) : (
        <p className={styles.fullNotice}>ظرفیت این تور تکمیل شده است</p>
      )}
    </>
  );
};

export default ReserveBuyCTA;
