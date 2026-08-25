import styles from "./index.module.css";

const ErrorState = ({
  title = "خطا در دریافت اطلاعات",
  description = "مشکلی در برقراری ارتباط با سرور به وجود آمده است. لطفاً اتصال خود را بررسی کرده و مجدداً تلاش کنید.",
  buttonText = "تلاش مجدد",
  onRetry,
  isRetrying,
}) => {
  return (
    <div className={styles["error-state-container"]}>
      <div className={styles["error-state-icon"]}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
          />
        </svg>
      </div>
      <h3 className={styles["error-state-title"]}>{title}</h3>
      <p className={styles["error-state-description"]}>{description}</p>
      {onRetry && (
        <button
          type="button"
          className={styles["error-state-button"]}
          onClick={onRetry}
          disabled={isRetrying}
        >
          {isRetrying ? "در حال دریافت..." : buttonText}
        </button>
      )}
    </div>
  );
};

export default ErrorState;
