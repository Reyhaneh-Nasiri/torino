import { AlertCircle } from "lucide-react";

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
        <AlertCircle size={48} strokeWidth={1.5} />
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
