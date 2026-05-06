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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import styles from "./index.module.css";

const ProfileForm = ({ editHandler, section, form, data: profileData }) => {
  const { mutate } = useProfileUpdate();

  const initialData = {
    mobile: profileData.mobile || "",
    email: profileData.email || "",
    fullName: profileData.fullName || "",
    gender: profileData.gender || "",
    birthDate: gregorianToJalaliString(profileData.birthDate) || "",
    nationalCode: `${profileData.nationalCode}` || "",
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
    resolver: zodResolver(profileSchemas[section]),
    defaultValues: initialData,
    mode: "onChange",
  });

  const onSubmit = (values) => {
    if (section === "personal") {
      const [firstName, lastName] = values.fullName.split(" ");
      const payload = {
        firstName,
        lastName: lastName || "",
        ...values,
        birthDate: jalaliToGregorianString(p2e(values.birthDate)),
        nationalCode: +values.nationalCode,
      };
      delete payload.fullName;

      mutate(payload);
      editHandler(section);
      return;
    } else if (section === "bank") {
      const payload = {
        payment: {
          ...values,
        },
      };
      mutate(payload);
      editHandler(section);
      return;
    }
    mutate(values);
    editHandler(section);
  };

  if (section === "account") {
    return (
      <>
        <div
          className={`${styles.field} ${errors.email ? styles["field--error"] : null}`}
        >
          <div>
            <input {...register("email")} placeholder="آدرس ایمیل" />
            <button onClick={handleSubmit(onSubmit)}>تایید</button>
          </div>
          {errors.email && (
            <p className={styles.errorMessage}>{errors.email.message}</p>
          )}
        </div>
      </>
    );
  }
  return (
    <>
      <div className={styles.form}>
        <div className={styles.fields}>
          {form[section].map((item) => {
            if (item.name === "gender") {
              return (
                <div
                  key={item.id}
                  className={`${errors.gender ? styles["field--error"] : null}`}
                >
                  <SelectOption
                    register={register}
                    trigger={trigger}
                    setValue={setValue}
                    type="gender"
                    value={profileData.gender}
                  />
                  {errors.gender && (
                    <p className={styles.errorMessage}>
                      {errors.gender.message}
                    </p>
                  )}
                </div>
              );
            } else if (item.name === "birthDate") {
              return (
                <div
                  key={item.id}
                  className={`${errors.birthDate ? styles["field--error"] : null} ${styles.field} birth-date-picker`}
                >
                  <BirthDatePicker control={control} />
                  {errors.birthDate && (
                    <p className={styles.errorMessage}>
                      {errors.birthDate.message}
                    </p>
                  )}
                </div>
              );
            }

            return (
              <div
                key={item.id}
                className={`${styles.field} ${errors[item.name] ? styles["field--error"] : null}`}
              >
                <div>
                  <input
                    placeholder={item.placeholder}
                    {...register(item.name)}
                  />
                </div>
                {errors[item.name] && (
                  <p className={styles.errorMessage}>
                    {errors[item.name].message}
                  </p>
                )}
              </div>
            );
          })}
        </div>
        <div className={styles.actions}>
          <button
            className={styles.confirmBtn}
            onClick={handleSubmit(onSubmit)}
          >
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
