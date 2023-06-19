import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>&copy;2023 Ansori. All rights reserved.</div>
      <div className={styles.social}>
        <Image
          src="/1.png"
          alt="Ansori Social Media"
          className={styles.icon}
          width={15}
          height={15}
        />
        <Image
          src="/2.png"
          alt="Ansori Social Media"
          className={styles.icon}
          width={15}
          height={15}
        />
        <Image
          src="/3.png"
          alt="Ansori Social Media"
          className={styles.icon}
          width={15}
          height={15}
        />
        <Image
          src="/4.png"
          alt="Ansori Social Media"
          className={styles.icon}
          width={15}
          height={15}
        />
      </div>
    </div>
  );
};

export default Footer;
