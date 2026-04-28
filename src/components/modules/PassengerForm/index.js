"use client";
import styles from "./index.module.css";

const PassengerForm = ({ form, setForm }) => {
  const { nationalCode, fullName, gender, birthDate } = form;
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>
        <i className="fa-solid fa-user"></i>
        مشخصات مسافر
      </h3>
      <div className={styles.form}>
        <input
          type="text"
          className={styles.field}
          placeholder="نام و نام‌خانوادگی"
          name="fullName"
          value={fullName}
          onChange={changeHandler}
        />
        <select
          className={styles.field}
          name="gender"
          value={gender}
          onChange={changeHandler}
        >
          <option value="">جنسیت</option>
          <option value="Male">مرد</option>
          <option value="Female">زن</option>
          <option value="Other">یه چیز دیگه</option>
        </select>
        <input
          type="text"
          name="nationalCode"
          value={nationalCode}
          className={styles.field}
          placeholder="کدملی"
          onChange={changeHandler}
        />
        <input
          type="text"
          name="birthDate"
          value={birthDate}
          className={styles.field}
          placeholder="تاریخ تولد"
          onChange={changeHandler}
        />
      </div>
    </div>
  );
};

export default PassengerForm;
