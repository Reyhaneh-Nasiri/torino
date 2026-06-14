"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

import LoginBtn from "@/components/atoms/LoginBtn";
import ModalContainer from "@/components/partials/containers/ModalContainer";
import CheckOTPForm from "./CheckOTPForm";
import SendOTPForm from "./SendOTPForm";

import { useOutsideClick } from "@/core/hooks/useOutsideClick";
import { otpSmsSchema } from "@/core/schemas/auth";
import { useGetProfile } from "@/core/services/queries";
import { removeCookie } from "@/core/utils/cookie";

import styles from "./AuthForm.module.css";

const AuthForm = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authStep, setAuthStep] = useState(1);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const dropdownRef = useOutsideClick(() => setIsProfileMenuOpen(false));
  const { data } = useGetProfile();
  const queryClient = useQueryClient();

  const {
    watch,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(otpSmsSchema),
    defaultValues: { mobile: "" },
    mode: "onChange",
  });

  const mobile = watch("mobile");

  const closeModal = () => {
    setIsAuthModalOpen(false);
    setAuthStep(1);
    reset({ mobile: "" });
  };

  const logoutHandler = () => {
    removeCookie("accessToken");
    removeCookie("refreshToken");
    queryClient.setQueryData(["profile"], null);
    setIsProfileMenuOpen(false);
  };

  const renderModalContent = () => {
    if (authStep === 1) {
      return (
        <SendOTPForm
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
          setStep={setAuthStep}
          onClose={closeModal}
        />
      );
    }
    if (authStep === 2) {
      return (
        <CheckOTPForm
          mobile={mobile}
          setStep={setAuthStep}
          onClose={closeModal}
        />
      );
    }
    return null;
  };

  if (data)
    return (
      <div className={styles.profile} ref={dropdownRef}>
        <button
          className={styles.profile__trigger}
          onClick={() => setIsProfileMenuOpen((prev) => !prev)}
          aria-expanded={isProfileMenuOpen}
        >
          <i className="fa-solid fa-user"></i>
          <span>{data.mobile}</span>
          <i
            className={`fa-solid fa-angle-down ${isProfileMenuOpen ? styles.active : ""}`}
          ></i>
        </button>
        {isProfileMenuOpen && (
          <ul className={styles.profile__menu}>
            <li className={styles["profile__item--header"]}>
              <i className="fa-solid fa-user-circle"></i>
              {data.mobile}
            </li>
            <li className={styles.profile__item}>
              <i className="fa-solid fa-user"></i>
              <Link
                href="/dashboard"
                onClick={() => setIsProfileMenuOpen(false)}
              >
                اطلاعات حساب کاربری
              </Link>
            </li>
            <li
              className={styles["profile__item--logout"]}
              onClick={logoutHandler}
            >
              <i className="fa-solid fa-sign-out"></i>
              خروج از حساب کاربری
            </li>
          </ul>
        )}
      </div>
    );

  return (
    <>
      <LoginBtn setIsOpen={setIsAuthModalOpen} />
      <ModalContainer isOpen={isAuthModalOpen} onClose={closeModal}>
        {isAuthModalOpen && renderModalContent()}
      </ModalContainer>
    </>
  );
};

export default AuthForm;
