"use client";
import BirthDatePicker from "@/components/atoms/BirthDatePicker";
import SelectOption from "@/components/customGenerate/SelectOption";
import styles from "./index.module.css";

const PassengerForm = ({
  register,
  errors,
  control,
  trigger,
  setValue,
  userProfile,
}) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>
        <i className="fa-solid fa-user"></i>
        مشخصات مسافر
      </h3>
      <div className={styles.form}>
        <div>
          <input
            placeholder="نام و نام خانوادگی"
            className={`${styles.field} ${errors.fullName ? styles["field--error"] : null}`}
            {...register("fullName")}
          />
          {errors.fullName && (
            <p className={styles.errorMessage}>{errors.fullName.message}</p>
          )}
        </div>
        <div className={`${errors.gender ? styles["field--error"] : null}`}>
          <SelectOption
            register={register}
            trigger={trigger}
            setValue={setValue}
            type="gender"
            value={userProfile?.gender}
          />
          {errors.gender && (
            <p className={styles.errorMessage}>{errors.gender.message}</p>
          )}
        </div>
        <div>
          <input
            {...register("nationalCode")}
            className={`${styles.field} ${errors.nationalCode ? styles["field--error"] : null}`}
            placeholder="کدملی"
          />
          {errors.nationalCode && (
            <p className={styles.errorMessage}>{errors.nationalCode.message}</p>
          )}
        </div>
        <div
          className={`${errors.birthDate ? styles["field--error"] : null} birth-date-picker`}
        >
          <BirthDatePicker control={control} />
          {errors.birthDate && (
            <p className={styles.errorMessage}>{errors.birthDate.message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PassengerForm;
