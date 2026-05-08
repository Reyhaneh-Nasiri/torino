import styles from "./index.module.css";

const LoginBtn = ({setIsOpen}) => {
  return (
    <div className={styles.loginBtn} onClick={() => setIsOpen(true)}>
      <i className="fa-solid fa-sign-in"></i>
    </div>
  );
};

export default LoginBtn;
