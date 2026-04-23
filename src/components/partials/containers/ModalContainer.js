import styles from "./ModalContainer.module.css";

const ModalContainer = ({ children, isOpen, setIsOpen }) => {
  if (!isOpen) return;

  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalWrapper}>
        <div className={styles.modalBox}>{children}</div>
      </div>
    </div>
  );
};

export default ModalContainer;
