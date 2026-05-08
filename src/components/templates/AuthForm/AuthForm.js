"use client";
import loginBtn from "@/assets/icons/sign-in-buttom.svg";
import ModalContainer from "@/components/partials/containers/ModalContainer";
import { OtpSmsSchema } from "@/core/schemas/auth";
import { useGetProfile } from "@/core/services/queries";
import { removeCookie } from "@/core/utils/cookie";
import useAuthStore from "@/stores/authStore";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./AuthForm.module.css";
import CheckOTPForm from "./CheckOTPForm";
import SendOTPForm from "./SendOTPForm";

const AuthForm = () => {
  const { data } = useGetProfile();
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const logout = useAuthStore((state) => state.logout);
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);

  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(OtpSmsSchema),
    defaultValues: { mobile: "" },
    mode: "onChange",
  });

  const mobile = watch("mobile");
  const logoutHandler = () => {
    removeCookie("accessToken");
    removeCookie("refreshToken");
    logout();
  };

  if (isLoggedIn)
    return (
      <>
        <div className={styles.dashboardBtn}>
          <i className="fa-solid fa-user"></i>
          {data?.mobile}
          <i className="fa-solid fa-angle-down"></i>
          <ul className={styles.dropdown}>
            <li className={styles.number}>
              <i className="fa-solid fa-user-circle"></i>
              {data?.mobile}
            </li>
            <li className={styles.infoBtn}>
              <i className="fa-solid fa-user"></i>
              <Link href="/dashboard">اطلاعات حساب کاربری</Link>
            </li>
            <li className={styles.logoutBtn} onClick={logoutHandler}>
              <i className="fa-solid fa-sign-out"></i>
              خروج از حساب کاربری
            </li>
          </ul>
        </div>
      </>
    );

  return (
    <div>
      <Image
        width={40}
        height={40}
        src={loginBtn}
        alt="login-btn"
        onClick={() => setIsOpen(true)}
      />

      {step === 1 && (
        <ModalContainer isOpen={isOpen}>
          <SendOTPForm
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
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
