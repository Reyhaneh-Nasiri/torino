"use client";

import BirthDatePicker from "@/components/atoms/BirthDatePicker";
import SelectOption from "@/components/customGenerate/SelectOption";
import { profileSchemas } from "@/core/schemas/profile";
import { useProfileUpdate } from "@/core/services/mutations";
import {
  gregorianToJalaliString,
  jalaliToGregorianString,
} from "@/core/utils/date";
import { p2e } from "@/core/utils/digit";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import styles from "./index.module.css";

const ProfileForm = ({
  editHandler,
  section,
  fields = [],
  data: profileData = {},
}) => {
  const { mutate } = useProfileUpdate();

  const initialData = {
    mobile: profileData.mobile || "",
    email: profileData.email || "",
    fullName: profileData.fullName || "",
    gender: profileData.gender || "",
    birthDate: gregorianToJalaliString(profileData.birthDate) || "",
    nationalCode: profileData.nationalCode
      ? String(profileData.nationalCode)
      : "",
    payment: {
      shaba_code: profileData.payment?.shaba_code || "",
      debitCard_code: profileData.payment?.debitCard_code || "",
      accountIdentifier: profileData.payment?.accountIdentifier || "",
    },
  };

  const {
    control,
    trigger,
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(profileSchemas[section]),
    defaultValues: initialData,
    mode: "onChange",
  });

  const onSubmit = (values) => {
    let payload = values;

    if (section === "personal") {
      const [firstName, lastName] = (values.fullName || "").split(" ");
      payload = {
        ...values,
        firstName,
        lastName: lastName || "",
        birthDate: jalaliToGregorianString(p2e(values.birthDate)),
        nationalCode: values.nationalCode ? +values.nationalCode : "",
      };
      delete payload.fullName;
    } else if (section === "bank") {
      payload = {
        payment: { ...values },
      };
    }

    mutate(payload);
    editHandler(section);
  };

  if (section === "account") {
    return (
      <div
        className={`${styles.field} ${errors.email ? styles["field--error"] : ""}`}
      >
        <div>
          <input {...register("email")} placeholder="آدرس ایمیل" />
          <button type="button" onClick={handleSubmit(onSubmit)}>
            تایید
          </button>
        </div>
        {errors.email && (
          <p className={styles.errorMessage}>{errors.email.message}</p>
        )}
      </div>
    );
  }

  const renderField = (item) => {
    const fieldKey = item.name.includes(".")
      ? item.name.split(".")[1]
      : item.name;
    const error = errors[fieldKey] || errors[item.name];
    const errorClass = error ? styles["field--error"] : "";

    if (item.name === "gender") {
      return (
        <div key={item.id} className={errorClass}>
          <SelectOption
            register={register}
            trigger={trigger}
            setValue={setValue}
            type="gender"
            value={profileData.gender}
          />
          {error && <p className={styles.errorMessage}>{error.message}</p>}
        </div>
      );
    }

    if (item.name === "birthDate") {
      return (
        <div
          key={item.id}
          className={`${errorClass} ${styles.field} birth-date-picker`}
        >
          <BirthDatePicker control={control} />
          {error && <p className={styles.errorMessage}>{error.message}</p>}
        </div>
      );
    }

    return (
      <div key={item.id} className={`${styles.field} ${errorClass}`}>
        <div>
          <input
            placeholder={item.placeholder || item.label}
            {...register(fieldKey)}
          />
        </div>
        {error && <p className={styles.errorMessage}>{error.message}</p>}
      </div>
    );
  };

  return (
    <div className={styles.form}>
      <div className={styles.fields}>{fields.map(renderField)}</div>
      <div className={styles.actions}>
        <button
          type="button"
          className={styles.confirmBtn}
          onClick={handleSubmit(onSubmit)}
        >
          تایید
        </button>
        <button
          type="button"
          className={styles.cancelBtn}
          onClick={() => editHandler(section)}
        >
          انصراف
        </button>
      </div>
    </div>
  );
};

export default ProfileForm;
