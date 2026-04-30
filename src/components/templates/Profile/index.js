"use client";
import ProfileForm from "@/components/modules/ProfileForm.js";
import { useGetProfile } from "@/core/services/queries";
import { toPersianDate } from "@/core/utils/date";
import { e2p } from "@/core/utils/digit";
import { useState } from "react";
import styles from "./index.module.css";

const GENDER = {
  female: "زن",
  male: "مرد",
};

const FORM_DATA = {
  personal: [
    { id: 1, placeholder: "نام و نام خانوادگی" },
    { id: 2, placeholder: "کدملی" },
    { id: 3, placeholder: "جنسیت" },
    { id: 4, placeholder: "تاریخ تولد" },
  ],
  bank: [
    { id: 1, placeholder: "شماره کارت" },
    { id: 2, placeholder: "شماره حساب" },
    { id: 3, placeholder: "شماره شبا" },
  ],
};
const Profile = () => {
  const { data, isFetching, error } = useGetProfile();
  const [edit, setEdit] = useState({
    account: false,
    personal: false,
    bank: false,
  });

  if (isFetching) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;
  const {
    mobile,
    email,
    firstName,
    lastName,
    gender,
    birthDate,
    nationalCode,
    payment,
  } = data;

  console.log(data);

  const editHandler = (section) => {
    console.log(edit);
    console.log(section);
    setEdit((prev) => ({ ...prev, [section]: !prev[section] }));
  };
  return (
    <div className={styles.profile}>
      <div className={styles.accountInfo}>
        <div className={styles.header}>
          <h3 className={styles.title}>اطلاعات حساب کاربری</h3>
        </div>
        <div className={styles.items}>
          <div className={styles.item}>
            <p className={styles.label}>شماره موبایل</p>
            <p className={styles.value}>{mobile ? e2p(mobile) : "_"}</p>
          </div>
          {edit.account ? (
            <div className={styles.field}>
              <input type="text" placeholder="آدرس ایمیل" />
              <button onClick={() => editHandler("account")}>تایید</button>
            </div>
          ) : (
            <div className={styles.item}>
              <p className={styles.label}>ایمیل</p>
              <p className={styles.value}>{email || "__"}</p>
              {email ? (
                <p
                  className={styles.actionBtn}
                  onClick={() => editHandler("account")}
                >
                  <i className="fa-solid fa-edit"></i>
                  <span>ویرایش</span>
                </p>
              ) : (
                <p
                  className={styles.actionBtn}
                  onClick={() => editHandler("account")}
                >
                  <i className="fa-solid fa-edit"></i>
                  <span>افزودن</span>
                </p>
              )}
            </div>
          )}
        </div>
      </div>
      <div className={styles.personalInfo}>
        <div className={styles.header}>
          <h3 className={styles.title}>اطلاعات شخصی</h3>
          {!!edit.personal || (
            <p
              className={styles.actionBtn}
              onClick={() => editHandler("personal")}
            >
              <i className="fa-solid fa-edit"></i>
              <span>ویرایش اطلاعات</span>
            </p>
          )}
        </div>
        {edit.personal ? (
          <ProfileForm
            editHandler={editHandler}
            section="personal"
            form={FORM_DATA}
            setEdit={setEdit}
          />
        ) : (
          <div className={styles.items}>
            <div className={styles.item}>
              <p className={styles.label}>نام و نام خانوادگی</p>
              <p className={styles.value}>
                {firstName ? `${firstName} ${lastName}` : "__"}
              </p>
            </div>

            <div className={styles.item}>
              <p className={styles.label}>کدملی</p>
              <p className={styles.value}>
                {nationalCode ? e2p(nationalCode) : "__"}
              </p>
            </div>
            <div className={styles.item}>
              <p className={styles.label}>جنسیت</p>
              <p className={styles.value}>{gender ? GENDER[gender] : "__"}</p>
            </div>
            <div className={styles.item}>
              <p className={styles.label}>تاریخ تولد</p>
              <p className={styles.value}>
                {birthDate ? toPersianDate(birthDate) : "__"}
              </p>
            </div>
          </div>
        )}
      </div>

      <div className={styles.bankInfo}>
        <div className={styles.header}>
          <h3 className={styles.title}>اطلاعات حساب بانکی</h3>
          {!!edit.bank || (
            <p className={styles.actionBtn} onClick={() => editHandler("bank")}>
              <i className="fa-solid fa-edit"></i>
              <span>ویرایش اطلاعات</span>
            </p>
          )}
        </div>
        {edit.bank ? (
          <ProfileForm
            editHandler={editHandler}
            section="bank"
            form={FORM_DATA}
          />
        ) : (
          <div className={styles.items}>
            <div className={styles.item}>
              <p className={styles.label}>شماره کارت</p>
              <p className={styles.value}>
                {payment?.shaba_code ? e2p(payment.shaba_code) : "__"}
              </p>
            </div>

            <div className={styles.item}>
              <p className={styles.label}>شماره شبا</p>
              <p className={styles.value}>
                {payment?.shaba_code ? e2p(payment.shaba_code) : "__"}
              </p>
            </div>
            <div className={styles.item}>
              <p className={styles.label}>شماره حساب</p>
              <p className={styles.value}>
                {payment?.accountIdentifier
                  ? e2p(payment.accountIdentifier)
                  : "__"}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
