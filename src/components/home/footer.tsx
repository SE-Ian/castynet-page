import Image from "next/image"

import styles from "@/styles/_footer.module.scss"
import Link from "next/link"
export const Footer = () => {
  return (
    <div className={styles.footer}>
      <Image
        className={styles.bgIcon}
        alt=""
        src="/bg.svg"
        width={1512}
        height={300}
      />
      <span className={styles.castynetStudios}>
        © 2018 - 2023 Castynet Studios - Empowering Software.
      </span>
      <div className={styles.socialIcons}>
        <Link
          href="https://github.com/castynet-studios"
          rel="noopener noreferrer"
          target="_blank"
          className={styles.mdigithub}
        >
          <Image
            className={styles.vectorIcon}
            alt=""
            src="/vector.svg"
            width={22}
            height={22}
          />
        </Link>
        <Link
          href="https://www.behance.net/riungemaina"
          rel="noopener noreferrer"
          target="_blank"
          className={styles.mdigithub}
        >
          <Image
            className={styles.vectorIcon1}
            alt=""
            src="/vector1.svg"
            width={22}
            height={22}
          />
        </Link>
        <Link
          href="https://twitter.com/castynet"
          rel="noopener noreferrer"
          target="_blank"
          className={styles.mdigithub}
        >
          <Image
            className={styles.vectorIcon2}
            alt=""
            src="/vector2.svg"
            width={22}
            height={22}
          />
        </Link>
        <Link
          href="https://www.pinterest.com/castynet/"
          rel="noopener noreferrer"
          target="_blank"
          className={styles.mdigithub}
        >
          <Image
            className={styles.vectorIcon3}
            alt=""
            src="/vector3.svg"
            width={22}
            height={22}
          />
        </Link>
        <Link
          href="https://www.instagram.com/castynet.studios/"
          rel="noopener noreferrer"
          target="_blank"
          className={styles.mdigithub}
        >
          <Image
            className={styles.vectorIcon3}
            alt=""
            src="/vector4.svg"
            width={22}
            height={22}
          />
        </Link>
      </div>
    </div>
  )
}
