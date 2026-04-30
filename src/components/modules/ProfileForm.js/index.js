"use client";
import styles from "./index.module.css";

const ProfileForm = ({ editHandler, section, form }) => {
  return (
    <div className={styles.form}>
      <div className={styles.fields}>
        {form[section].map((item) => (
          <div key={item.id} className={styles.field}>
            <input type="text" placeholder={item.placeholder} />
          </div>
        ))}
      </div>
      <div className={styles.actions}>
        <button className={styles.confirmBtn}>تایید</button>
        <button
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
