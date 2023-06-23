import React from "react";
import styles from "./page.module.css";

export const metadata = {
  title: "Ansori Our Works",
  description:
    "Ansori Our Works is a website that contains my portfolio and my personal blog.",
};

const Layout = ({ children }) => {
  return (
    <div>
      <h1 className={styles.mainTitle}>Our Works</h1>
      {children}
    </div>
  );
};

export default Layout;
