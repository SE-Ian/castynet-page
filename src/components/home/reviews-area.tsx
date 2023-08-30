import Image from "next/image"
import Link from "next/link"

import styles from "@/styles/_reviews-area.module.scss"

export const ReviewSection = () => {
  return (
    <div className={styles.reviewContainer}>
      <Image alt="" src="/bg6.svg" width={1170} height={502} />
      <span className={styles.profileName}>Brayden Miller</span>
      <Image
        className={styles.imageIcon}
        alt=""
        src="/image1@2x.png"
        width={90}
        height={90}
      />
      <Image
        className={styles.starsIcon}
        alt=""
        src="/stars.svg"
        width={113}
        height={20}
      />
      <span className={styles.reviewDesc}>
        “ We are high spirited geeks passionate about tech. Our mission is to
        create. ”
      </span>
      <Link
        href="https://play.google.com/store/apps"
        className={styles.reviewsLink}
      >
        <span className={styles.review}>👍🏼</span>
        <b className={styles.rating}>Rated at 5 ⭐ on Google</b>
        {/* <Image
          className={styles.starIcon}
          alt=""
          src="/star-icon.svg"
          width={18}
          height={17}
        /> */}
        <Image
          className={styles.arrowIcon}
          alt=""
          src="/arrow.svg"
          width={13.8}
          height={13.8}
        />
      </Link>
    </div>
  )
}
