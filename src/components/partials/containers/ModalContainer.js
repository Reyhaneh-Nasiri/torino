import styles from "./ModalContainer.module.css";

const ModalContainer = ({ children, isOpen, onClose }) => {
  if (!isOpen) return;

  return (
    <div className={styles.modalContainer} onClick={onClose}>
      <div className={styles.modalBox} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default ModalContainer;
