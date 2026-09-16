"use client";

import Link from "next/link";

import { useOutsideClick } from "@/core/hooks/useOutsideClick";
import { MENU_ITEMS } from "./menubar.config";

import styles from "./index.module.css";

const MenuBar = ({ isMenuOpen, setIsMenuOpen }) => {
  const menuRef = useOutsideClick(() => setIsMenuOpen(false));

  if (!isMenuOpen) {
    return null;
  }

  const closeHandler = () => {
    setIsMenuOpen(false);
  };

  return (
    <div
      className={styles.container}
      role="dialog"
      aria-modal="true"
      aria-label="منوی سایت"
    >
      <div ref={menuRef} className={styles.surface}>
        <nav className={styles.navbar}>
          <ul className={styles.menuList}>
            {MENU_ITEMS?.map((item, index) => {
              const isActive = item?.active;

              return (
                <li key={index} className={isActive ? styles.active : ""}>
                  <Link href={item?.href || "/"} onClick={closeHandler}>
                    <i className={item?.iconClass} aria-hidden="true" />
                    <span>{item?.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MenuBar;
