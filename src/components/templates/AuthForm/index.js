"use client";
import loginBtn from "@/assets/icons/sign-in-buttom.svg";
import ModalContainer from "@/components/partials/containers/ModalContainer";
import { useState } from "react";
import CheckOTPForm from "./CheckOTPForm";
import SendOTPForm from "./SendOTPForm";
import Image from "next/image";

const AuthForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");

  return (
    <div>
      {/* <button onClick={() => setIsOpen(true)}>ورود</button> */}
        <Image width={40} height={40} src={loginBtn} alt="login-btn" onClick={() => setIsOpen(true)} />

      {step === 1 && (
        <ModalContainer isOpen={isOpen}>
          <SendOTPForm
            mobile={mobile}
            setMobile={setMobile}
            setStep={setStep}
            setIsOpen={setIsOpen}
          />
        </ModalContainer>
      )}
      {step === 2 && (
        <ModalContainer isOpen={isOpen}>
          <CheckOTPForm
            mobile={mobile}
            setStep={setStep}
            setIsOpen={setIsOpen}
          />
        </ModalContainer>
      )}
    </div>
  );
};

export default AuthForm;


// import { useEffect, useState } from "react";
// import OtpInput from "react-otp-input";

// export default function Verify() {
//   const [otp, setOtp] = useState("");
//   const [timeLeft, setTimeLeft] = useState(120);

//   // تایمر ساده برای شمارش معکوس
//   useEffect(() => {
//     if (timeLeft === 0) return;
//     const t = setInterval(() => setTimeLeft((t) => t - 1), 1000);
//     return () => clearInterval(t);
//   }, [timeLeft]);

//   const handleResend = () => {
//     // API ارسال مجدد
//     console.log("کد جدید ارسال شد!");
//     setTimeLeft(120); // ریست تایمر
//   };

//   return (
//     <div style={{ textAlign: "center" }}>
//       <h2>کد ارسالی را وارد کنید</h2>
//       <OtpInput
//         value={otp}
//         onChange={setOtp}
//         numInputs={6}
//         inputType="number"
//         shouldAutoFocus
//         inputStyle={{
//           width: 40,
//           height: 40,
//           margin: "0 5px",
//           textAlign: "center",
//           fontSize: 20,
//           border: "1px solid #ccc",
//           borderRadius: 5,
//         }}
//       />
//       <p>
//         زمان باقی‌مانده:{" "}
//         <b>
//           {String(Math.floor(timeLeft / 60)).padStart(2, "0")}:
//           {String(timeLeft % 60).padStart(2, "0")}
//         </b>
//       </p>
//       {timeLeft === 0 && (
//         <button onClick={handleResend}>ارسال مجدد کد</button>
//       )}
//     </div>
//   );
// }
