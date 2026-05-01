"use client";
import { useProfileUpdate } from "@/core/services/mutations";
import { useState } from "react";
import styles from "./index.module.css";

const ProfileForm = ({ editHandler, section, form, data: profileData }) => {
  const { mutate } = useProfileUpdate();

  const initialData = {
    mobile: profileData.mobile || "",
    email: profileData.email || "",
    firstName: profileData.firstName || "",
    lastName: profileData.lastName || "",
    gender: profileData.gender || "",
    birthDate: profileData.birthDate || "",
    nationalCode: profileData.nationalCode || "",
    payment: {
      shaba_code: profileData.payment?.shaba_code || "",
      debitCard_code: profileData.payment?.debitCard_code || "",
      accountIdentifier: profileData.payment?.accountIdentifier || "",
    },
  };

  const [formData, setFormData] = useState(initialData);
  const changeHandler = (e) => {
    const { name, value } = e.target;

    if (section === "bank") {
      setFormData((prev) => ({
        ...prev,
        payment: {
          ...(prev.payment || {}),
          [name]: value,
        },
      }));
      return;
    }

    if (name === "fullName") {
      const [firstName = "", lastName = ""] = value.split(" ");
      setFormData((prev) => ({ ...prev, firstName, lastName }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const updateHandler = () => {
    mutate(formData);
    editHandler(section);
  };
  if (section === "account") {
    return (
      <div className={styles.field}>
        <input
          type="text"
          placeholder="آدرس ایمیل"
          name="email"
          onChange={changeHandler}
          value={formData.email}
        />
        <button onClick={updateHandler}>تایید</button>
      </div>
    );
  }
  return (
    <>
      <div className={styles.form}>
        <div className={styles.fields}>
          {form[section].map((item) => (
            <div key={item.id} className={styles.field}>
              <input
                type="text"
                placeholder={item.placeholder}
                name={item.name}
                onChange={changeHandler}
                value={
                  section === "bank"
                    ? (formData.payment[item.name] ?? "")
                    : item.name === "fullName"
                      ? `${formData.firstName} ${formData.lastName}`.trim()
                      : (formData[item.name] ?? "")
                }
              />
            </div>
          ))}
        </div>
        <div className={styles.actions}>
          <button className={styles.confirmBtn} onClick={updateHandler}>
            تایید
          </button>
          <button
            className={styles.cancelBtn}
            onClick={() => editHandler(section)}
          >
            انصراف
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfileForm;
