import React from "react";
import Link from "next/link";
import styles from "./Header.module.scss";
import Image from 'next/image'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.leftSection}>
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={169}
            height={34.08}
            layout="fixed"
            objectFit="contain"
            className={styles.logo}
            priority={true}
          />
        </Link>
        <nav className={styles.nav}>
          <Link className={styles.link} href="/">
            Sell
          </Link>
          <Link className={styles.link} href="/">
            Marketplace
          </Link>
          <Link className={styles.link} href="/">
            Community
          </Link>
          <Link className={styles.link} href="/">
            Analyze
          </Link>
          <Link className={styles.link} href="/">
            Download
          </Link>
        </nav>
      </div>
      <div className={styles.rightSection}>
        <Link className={styles.loginButton} href="/login">
          Log In
        </Link>
        <Link className={styles.getStartedButton} href="/get-started">
          Get Started
        </Link>
      </div>
    </header>
  );
};
