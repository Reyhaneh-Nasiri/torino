import { toPersianDate } from "@/core/utils/date";
import { e2p } from "@/core/utils/digit";
import styles from "./index.module.css";

const Profile = ({ data }) => {
  const GENDER = {
    female: "زن",
    male: "مرد",
  };
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

          <div className={styles.item}>
            <p className={styles.label}>ایمیل</p>
            <p className={styles.value}>{email || "__"}</p>
            {email ? (
              <p className={styles.actionBtn}>
                <i className="fa-solid fa-edit"></i>
                <span>ویرایش</span>
              </p>
            ) : (
              <p className={styles.actionBtn}>
                <i className="fa-solid fa-edit"></i>
                <span>افزودن</span>
              </p>
            )}
          </div>
        </div>
      </div>
      <div className={styles.personalInfo}>
        <div className={styles.header}>
          <h3 className={styles.title}>اطلاعات شخصی</h3>
          <p className={styles.actionBtn}>
            <i className="fa-solid fa-edit"></i>
            <span>ویرایش اطلاعات</span>
          </p>
        </div>
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
      </div>

      <div className={styles.bankInfo}>
        <div className={styles.header}>
          <h3 className={styles.title}>اطلاعات حساب بانکی</h3>
          <p className={styles.actionBtn}>
            <i className="fa-solid fa-edit"></i>
            <span>ویرایش اطلاعات</span>
          </p>
        </div>
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
      </div>
    </div>
  );
};

export default Profile;
