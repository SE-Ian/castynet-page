import Image from "next/image"
import { Button } from "@/components/button"

import styles from "@/styles/_projects-area.module.scss"

export const ProjectSection = () => {
  return (
    <section className={styles.projectsPartners}>
      <Button
        ctaText="Let’s Talk"
        buttonPosition="absolute"
        buttonCursor="pointer"
        buttonBorder="none"
        buttonPadding="0"
        buttonBackgroundColor="transparent"
        buttonTop="642px"
        buttonLeft="495px"
        letsTalkDisplay="inline-block"
        letsTalkLeft="28.89%"
      />
      <div className={styles.div}>
        <Image
          className={styles.imageIcon}
          alt=""
          src="/image2@2x.png"
          width={370}
          height={368}
        />
        <a className={styles.link}>
          <div className={styles.inHouseBrand}>In-House Brand</div>
          <Image
            className={styles.arrowIcon}
            alt=""
            src="/arrow1.svg"
            width={13.8}
            height={13.8}
          />
        </a>
      </div>
      <div className={styles.div1}>
        <Image
          className={styles.imageIcon}
          alt=""
          src="/image2@2x.png"
          width={370}
          height={368}
        />
        <a className={styles.link1}>
          <div className={styles.eLearningPortal}>E-Learning Portal</div>
          <Image
            className={styles.arrowIcon}
            alt=""
            src="/arrow1.svg"
            width={13.8}
            height={13.8}
          />
        </a>
      </div>
      <div className={styles.div2}>
        <Image
          className={styles.imageIcon}
          alt=""
          src="/image2@2x.png"
          width={370}
          height={368}
        />
        <a className={styles.link2}>
          <div className={styles.onlineElectronicStore}>
            Online Electronic Store
          </div>
          <Image
            className={styles.arrowIcon}
            alt=""
            src="/arrow2.svg"
            width={13.8}
            height={13.8}
          />
        </a>
      </div>
      <div className={styles.arrows}>
        <button className={styles.leftArrow} autoFocus>
          <div className={styles.bg} />
          <Image
            className={styles.vectorIcon}
            alt=""
            src="/vector5.svg"
            width={15}
            height={15}
          />
        </button>
        <button className={styles.rightArrow} autoFocus>
          <div className={styles.bg} />
          <Image
            className={styles.vectorIcon1}
            alt=""
            src="/vector6.svg"
            width={15}
            height={15}
          />
        </button>
      </div>
      <div className={styles.projectsPartners1}>{`Projects & Partners`}</div>
    </section>
  )
}
