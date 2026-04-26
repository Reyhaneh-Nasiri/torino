"use client";
import { useSendOtp } from "@/core/services/mutations";
import toast from "react-hot-toast";
import styles from "./SendOTPForm.module.css";

const SendOTPForm = ({ mobile, setMobile, setStep, setIsOpen }) => {
  const { mutate, isPending } = useSendOtp();
  const sendOtpHandler = (e) => {
    e.preventDefault();
    if (isPending) return;
    mutate(
      { mobile },
      {
        onSuccess: (data) => {
          console.log(data);
          toast.success(data?.data?.message);
          toast(data?.data?.code);
          window.navigator.clipboard.writeText(data?.data?.code)
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
        <i className={`${styles.closeBtn} fa-solid fa-plus`} onClick={() => setIsOpen(false)}></i>
        <h4 className={styles.title}>ورود به تورینو</h4>
        <form onSubmit={sendOtpHandler}>
          <label>شماره موبایل خود را وارد کنید</label>
          <input
            type="text"
            placeholder="0912***4253"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
          <button type="submit">ارسال کد تایید</button>
        </form>
      </div>
    </div>
  );
};

export default SendOTPForm;
