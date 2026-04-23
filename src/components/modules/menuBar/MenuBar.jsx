"use client"
import styles from "./MenuBar.module.css";

const MenuBar = ({ isMenuOpen, setIsMenuOpen }) => {
  const closeHandler = () => {
    setIsMenuOpen(false);
  };
  return (
    <>
      {isMenuOpen && (
        <div className={styles.container} onClick={closeHandler}>
          <div className={styles.surface} onClick={(e) => e.stopPropagation()}>
            <ul className={styles.menuList}>
              <li className={styles.active}>
                <i className="fa-solid fa-house"></i> صفحه اصلی
              </li>
              <li>
                <i className="fa-solid fa-plane-up"></i> خدمات گردشگری
              </li>
              <li>
                <i className="fa-solid fa-info"></i> درباره ما
              </li>
              <li>
                <i className="fa-solid fa-phone"></i> تماس با ما
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default MenuBar;
