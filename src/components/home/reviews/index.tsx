import Image from "next/image"
import styles from "./styles.module.scss"
export const ReviewSection = () => {
  return (
    <div className={styles.review}>
      <Image
        className={styles.bgIcon}
        alt=""
        src="/bg6.svg"
        width={1170}
        height={502}
      />
      <a className={styles.reviewsLink}>
        <Image
          className={styles.arrowIcon}
          alt=""
          src="/arrow.svg"
          width={13.8}
          height={13.8}
        />
        <b className={styles.ratedAt5}>Rated at 5 on Google</b>
        <Image
          className={styles.starIcon}
          alt=""
          src="/star-icon.svg"
          width={18}
          height={17}
        />
        <b className={styles.b}>👍🏼</b>
      </a>
      <span className={styles.weAreHigh}>
        “ We are high spirited geeks passionate about tech. Our mission is to
        create. ”
      </span>
      <Image
        className={styles.starsIcon}
        alt=""
        src="/stars.svg"
        width={113}
        height={20}
      />
      <span className={styles.braydenMiller}>Brayden Miller</span>
      <Image
        className={styles.imageIcon}
        alt=""
        src="/image1@2x.png"
        width={90}
        height={90}
      />
    </div>
  )
}
