import styles from "./index.module.css";

export const ERROR_STATE_CONSTANTS = {
  TITLE: "خطا در دریافت اطلاعات",
  DESCRIPTION:
    "مشکلی در برقراری ارتباط با سرور به وجود آمده است. لطفاً اتصال خود را بررسی کرده و مجدداً تلاش کنید.",
  BUTTON_TEXT: "تلاش مجدد",
  RETRYING_TEXT: "در حال دریافت...",
  SECTION_LABEL: "خطای سیستم",
};

const { TITLE, DESCRIPTION, BUTTON_TEXT, RETRYING_TEXT, SECTION_LABEL } =
  ERROR_STATE_CONSTANTS;

const ErrorState = ({
  title = TITLE,
  description = DESCRIPTION,
  buttonText = BUTTON_TEXT,
  onRetry,
  isRetrying = false,
}) => {
  return (
    <section className={styles.container} aria-label={SECTION_LABEL}>
      <div className={styles.icon} aria-hidden="true">
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

      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>

      {onRetry && (
        <button
          type="button"
          className={styles.button}
          onClick={onRetry}
          disabled={isRetrying}
          aria-busy={isRetrying}
        >
          {isRetrying ? RETRYING_TEXT : buttonText}
        </button>
      )}
    </section>
  );
};

export default ErrorState;
