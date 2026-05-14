"use client";
import airaLogo from "@/assets/images/aira-logo.svg";
import caoLogo from "@/assets/images/cao-logo.svg";
import caoPaxrightsLogo from "@/assets/images/cao-paxrights-logo.svg";
import ecunionLogo from "@/assets/images/ecunion-logo.svg";
import samandehiLogo from "@/assets/images/samandehi-logo.svg";
import torinoLogo from "@/assets/images/Torino.svg";
import MenuBar from "@/components/modules/MenuBar";
import Image from "next/image";
import { useState } from "react";
import AuthForm from "../AuthForm/AuthForm";
import styles from "./index.module.css";
const Layout = ({ children, data }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <header className={styles.header}>
        <div
          className={styles.menuBtn}
          onClick={() => setIsMenuOpen(true)}
        ></div>
        <AuthForm data={data} />
        <MenuBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </header>
      <div className={styles.content}>{children}</div>
      <footer className={styles.footer}>
        <div className={styles.top}>
          <div className={styles.top_start}>
            <h2>تورینو</h2>
            <ul>
              <li>درباره ما</li>
              <li>تماس با ما</li>
              <li>چرا تورینو</li>
              <li>بیمه مسافرتی</li>
            </ul>
          </div>

          <div className={styles.top_end}>
            <h2>خدمات مشتریان</h2>
            <ul>
              <li>پشتیبانی آنلاین</li>
              <li>راهنمای خرید</li>
              <li>راهنمای استرداد</li>
              <li>پرسش و پاسخ</li>
            </ul>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.bottom_start}>
            <Image width={35} height={38} src={ecunionLogo} alt="login-btn" />
            <Image width={35} height={38} src={samandehiLogo} alt="login-btn" />
            <Image width={35} height={38} src={airaLogo} alt="login-btn" />
            <Image width={35} height={38} src={caoLogo} alt="login-btn" />
            <Image
              width={35}
              height={38}
              src={caoPaxrightsLogo}
              alt="login-btn"
            />
          </div>
          <div className={styles.bottom_end}>
            <Image width={100} height={30} src={torinoLogo} alt="login-btn" />
            <p className={styles.support_number}>
              <a href="tel:+980218574">تلفن پشتیبانی: 021-8574</a>
            </p>
          </div>
        </div>
        <p className={styles.copyright}>
          کلیه حقوق این وب سایت متعلق به تورینو میباشد.
        </p>
      </footer>
    </>
  );
};

export default Layout;
