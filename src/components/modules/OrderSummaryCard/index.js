import { formatCurrency } from "@/core/utils/currency";
import { diffDaysAndNights } from "@/core/utils/date";
import styles from "./index.module.css";

const OrderSummaryCard = ({ title, price, startDate, endDate, orderHandler, isPending }) => {
  return (
    <div className={styles.orderSummaryCard}>
      <div className={styles.orderSummaryRow}>
        <p className={styles.tourTitle}>{title}</p>
        <p className={styles.tourDuration}>
          {diffDaysAndNights(endDate, startDate)}
        </p>
      </div>
      <div className={styles.orderSummaryRow}>
        <p className={styles.totalPrice}>قیمت نهایی </p>
        <p className={styles.totalPriceValue}>
          {formatCurrency(price)}{" "}
          <span className={styles.priceUnit}>تومان</span>
        </p>
      </div>
      <button className={styles.checkoutPayButton} disabled={isPending} onClick={orderHandler}>
        {isPending ? "درحال ثبت ..." : "ثبت و خرید نهایی"}
      </button>
    </div>
  );
};

export default OrderSummaryCard;
