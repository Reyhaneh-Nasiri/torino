import styles from "./index.module.css";

const LoginBtn = ({ setIsOpen }) => {
  return (
    <>
      <div className={styles.loginBtn} onClick={() => setIsOpen(true)}>
        <div className={styles.mobile}>
          <i className="fa-solid fa-sign-in"></i>
        </div>
        <div className={styles.desktop}>
          <span className={styles.icon}>
            <i className="fa-solid fa-user"></i>
          </span>
          <span>ورود | ثبت نام</span>
        </div>
      </div>
    </>
  );
};

export default LoginBtn;
