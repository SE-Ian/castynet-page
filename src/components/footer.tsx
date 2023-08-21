import type { NextPage } from "next"
import styles from "./footer.module.scss"
const Footer: NextPage = () => {
  return (
    <div className={styles.footer}>
      <img className={styles.bgIcon} alt="" src="/bg.svg" />
      <span className={styles.castynetStudios}>
        © 2018 - 2023 Castynet Studios - Empowering Software.
      </span>
      <div className={styles.socialIcons}>
        <a className={styles.mdigithub}>
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        </a>
        <a className={styles.mdigithub}>
          <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
        </a>
        <a className={styles.mdigithub}>
          <img className={styles.vectorIcon2} alt="" src="/vector2.svg" />
        </a>
        <a className={styles.mdigithub}>
          <img className={styles.vectorIcon3} alt="" src="/vector3.svg" />
        </a>
        <a className={styles.mdigithub}>
          <img className={styles.vectorIcon3} alt="" src="/vector4.svg" />
        </a>
      </div>
    </div>
  )
}

export default Footer
