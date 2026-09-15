"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import MenuBar from "@/components/modules/MenuBar";
import AuthForm from "../AuthForm/AuthForm";
import {
  FOOTER_SECTIONS,
  NAVIGATION_LINKS,
  SITE_CONFIG,
  TRUST_LOGOS,
} from "./layout.config";

import styles from "./index.module.css";

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <div>
          <button
            type="button"
            className={styles.menuBtn}
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open navigation menu"
          />
          <nav className={styles.navbar}>
            <Link href="/">
              <Image
                priority
                src={SITE_CONFIG?.logo?.src}
                alt={SITE_CONFIG?.logo?.alt || "Logo"}
                className={styles.logo}
              />
            </Link>
            <ul className={styles.menuList}>
              {NAVIGATION_LINKS?.map((link) => (
                <li
                  key={`${link?.href}-${link?.label}`}
                  className={link?.active ? styles.active : undefined}
                >
                  <Link href={link?.href || "/"}>{link?.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <AuthForm />
          <MenuBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </div>
      </header>

      <div className="page-layout">{children}</div>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.top}>
            {FOOTER_SECTIONS?.map((section) => (
              <div key={section?.title}>
                <h2>{section?.title}</h2>
                <ul>
                  {section?.links?.map((item) => (
                    <li key={item?.href}>
                      <Link href={item?.href}>{item?.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className={styles.bottom}>
            <div className={styles.bottomStart}>
              {TRUST_LOGOS?.map((logo) => (
                <Image
                  key={logo?.id}
                  width={35}
                  height={38}
                  src={logo?.src}
                  alt={logo?.alt}
                />
              ))}
            </div>
            <div className={styles.bottomEnd}>
              <Image
                width={100}
                height={30}
                src={SITE_CONFIG?.logo?.src}
                alt={SITE_CONFIG?.logo?.alt}
              />
              <p className={styles.supportNumber}>
                <a href={`tel:${SITE_CONFIG?.supportPhoneTel}`}>
                  تلفن پشتیبانی: {SITE_CONFIG?.supportPhone}
                </a>
              </p>
            </div>
          </div>
        </div>
        <p className={styles.copyright}>{SITE_CONFIG?.copyrightText}</p>
      </footer>
    </>
  );
};

export default Layout;
