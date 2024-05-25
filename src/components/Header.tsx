// src/components/Header.tsx
import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css'; // Ensure this file exists and contains your styles

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/degree_choose">Degree</Link>
          </li>
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
