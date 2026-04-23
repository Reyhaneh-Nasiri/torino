"use client";
import { useCheckOtp, useSendOtp } from "@/core/services/mutations";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import OtpInput from "react-otp-input";
import styles from "./CheckOTPForm.module.css";

const CheckOTPForm = ({ mobile, setStep, setIsOpen }) => {
  // const [code, setCode] = useState("");
  const [otp, setOtp] = useState("");
  const [timeLeft, setTimeLeft] = useState(10);

  const { mutate, isPending } = useCheckOtp();
  const { mutate: mutateSend, isPending: isePendingSend } = useSendOtp();
  const sendOtpHandler = () => {
    if (isePendingSend) return;
    mutateSend(
      { mobile },
      {
        onSuccess: (data) => {
          console.log(data);
          toast.success(data?.data?.message);
          toast(data?.data?.code);
          window.navigator.clipboard.writeText(data?.data?.code);
          toast("The code was copied!");
        },
        onError: (error) => {
          console.log(error);
        },
      },
    );
  };

  //   // تایمر ساده برای شمارش معکوس
  useEffect(() => {
    if (timeLeft === 0) return;
    const t = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(t);
  }, [timeLeft]);

  const handleResend = () => {
    sendOtpHandler();
    setTimeLeft(10);
  };

  const checkOtpHandler = (e) => {
    console.log(otp);

    e.preventDefault();
    if (isPending) return;
    mutate(
      // { mobile, code },
      { mobile, code: otp },
      {
        onSuccess: () => {
          setIsOpen(false);
          setStep(1);
        },
        onError: (error) => {
          console.log(error);
        },
      },
    );
  };
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <i
          className={`${styles.backBtn} fa-solid fa-arrow-left`}
          onClick={() => setStep(1)}
        ></i>
        <h4 className={styles.title}>کد تایید را وارد کنید</h4>
        <p className={styles.message}>کد تایید به شماره {mobile} ارسال شد</p>
        <form onSubmit={checkOtpHandler}>
          {/* <div className={styles.inputs}>
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          </div> */}

          <div className={styles.otpInputs}>
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              // renderSeparator={<span>-</span>}
              shouldAutoFocus
              renderInput={(props) => (
                <input {...props} style={{ width: "fit-content" }} />
              )}
            />
          </div>
          {timeLeft === 0 ? (
            <p className={styles.resendOtp} onClick={handleResend}>
              ارسال مجدد کد
            </p>
          ) : (
            <p className={styles.timer}>
              <b>
                {String(Math.floor(timeLeft / 60)).padStart(2, "0")}:
                {String(timeLeft % 60).padStart(2, "0")}
              </b>
              تا ارسال مجدد کد
            </p>
          )}

          <button type="submit">ورود به تورینو</button>
        </form>
      </div>
    </div>
  );
};

export default CheckOTPForm;
