"use client";
import { useSendOtp } from "@/core/services/mutations";
import toast from "react-hot-toast";
import styles from "./SendOTPForm.module.css";

const SendOTPForm = ({
  setStep,
  setIsOpen,
  register,
  handleSubmit,
  errors,
}) => {
  const { mutate, isPending } = useSendOtp();
  const sendOtpHandler = (values) => {
    if (isPending) return;
    const { mobile } = values;
    mutate(
      { mobile },
      {
        onSuccess: (data) => {
          toast.success(data?.data?.message);
          toast(data?.data?.code);
          window.navigator.clipboard.writeText(data?.data?.code);
          toast("The code was copied!");
          setStep(2);
        },
        onError: (error) => {
          console.log(error);
        },
      },
    );
  };
  return (
    <div className={styles.container} onClick={() => setIsOpen(false)}>
      <div className={styles.form} onClick={(e) => e.stopPropagation()}>
        <i
          className={`${styles.closeBtn} fa-solid fa-plus`}
          onClick={() => setIsOpen(false)}
        ></i>
        <h4 className={styles.title}>ورود به تورینو</h4>
        <form onSubmit={handleSubmit(sendOtpHandler)}>
          <label>شماره موبایل خود را وارد کنید</label>
          <div
            className={`${styles.field} ${errors.mobile ? styles["field--error"] : null}`}
          >
            <input {...register("mobile")} placeholder="0912***4253" />
          </div>
          {errors.mobile && (
            <p className={styles.errorMessage}>{errors.mobile.message}</p>
          )}
          <button type="submit">ارسال کد تایید</button>
        </form>
      </div>
    </div>
  );
};

export default SendOTPForm;
