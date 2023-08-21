import type { NextPage } from "next"
import styles from "./review-section.module.scss"
const ReviewSection: NextPage = () => {
  return (
    <div className={styles.review}>
      <img className={styles.bgIcon} alt="" src="/bg6.svg" />
      <a className={styles.reviewsLink}>
        <img className={styles.arrowIcon} alt="" src="/arrow.svg" />
        <b className={styles.ratedAt5}>Rated at 5 on Google</b>
        <img className={styles.starIcon} alt="" src="/star-icon.svg" />
        <b className={styles.b}>👍🏼</b>
      </a>
      <span className={styles.weAreHigh}>
        “ We are high spirited geeks passionate about tech. Our mission is to
        create. ”
      </span>
      <img className={styles.starsIcon} alt="" src="/stars.svg" />
      <span className={styles.braydenMiller}>Brayden Miller</span>
      <img className={styles.imageIcon} alt="" src="/image1@2x.png" />
    </div>
  )
}

export default ReviewSection
