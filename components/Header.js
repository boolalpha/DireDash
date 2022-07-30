import Image from 'next/image'
import Link from "next/link"

import styles from '../styles/Header.module.css'

function Details() {
  return (
    <div className={styles.bannerHeader}>
        <a className={styles.bannerLogo} href="/">
            <img
                className={styles.bannerImage}
                src="/img/logo2.png"
                width={200}
                height={100}
            />
        </a>
    </div>
  );
}

export default Details;