"use client";
import { useReserveBuy } from "@/core/services/mutations";
import { useRouter } from "next/navigation";
import styles from "./index.module.css";

const ReserveBuyCTA = ({ id }) => {
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
    <button className={styles.buyBtn} onClick={handleReserve}>
      رزرو و خرید
    </button>
  );
};

export default ReserveBuyCTA;
