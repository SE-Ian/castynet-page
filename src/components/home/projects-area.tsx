import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/button"

import styles from "@/styles/_projects-area.module.scss"

export const ProjectSection = () => {
  return (
    <section className={styles.projectsContainer} id="projects">
      <div className={styles.projectsTitle}>Projects & Partners</div>
      <div className={styles.arrows}>
        <button className={styles.leftArrow}>
          <div className={styles.bg} />
          <Image
            className={styles.vectorIcon}
            alt=""
            src="/vector5.svg"
            width={15}
            height={15}
          />
        </button>
        <button className={styles.rightArrow}>
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
      <div className={styles.projectView1}>
        <Image
          className={styles.imageIcon}
          alt=""
          src="/image2@2x.png"
          width={370}
          height={368}
        />
        <Link className={styles.link} href="/project1">
          <div className={styles.projectTitle1}>Online Electronic Store</div>
          <Image
            className={styles.arrowIcon}
            alt=""
            src="/arrow2.svg"
            width={13.8}
            height={13.8}
          />
        </Link>
      </div>
      <div className={styles.projectView2}>
        <Image
          className={styles.imageIcon}
          alt=""
          src="/image2@2x.png"
          width={370}
          height={368}
        />
        <Link className={styles.link} href="/project2">
          <div className={styles.projectTitle2}>E-Learning Portal</div>
          <Image
            className={styles.arrowIcon}
            alt=""
            src="/arrow1.svg"
            width={13.8}
            height={13.8}
          />
        </Link>
      </div>
      <div className={styles.projectView3}>
        <Image
          className={styles.imageIcon}
          alt=""
          src="/image2@2x.png"
          width={370}
          height={368}
        />
        <Link className={styles.link} href="/project3">
          <div className={styles.projectTitle3}>In-House Brand</div>
          <Image
            className={styles.arrowIcon}
            alt=""
            src="/arrow1.svg"
            width={13.8}
            height={13.8}
          />
        </Link>
      </div>
      <Link href="#contact">
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
      </Link>
    </section>
  )
}
