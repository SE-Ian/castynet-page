import type { NextPage } from "next"
import { Button } from "@/components/button"
import styles from "./project-section.module.scss"
const ProjectSection: NextPage = () => {
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
        <img className={styles.imageIcon} alt="" src="/image2@2x.png" />
        <a className={styles.link}>
          <div className={styles.inHouseBrand}>In-House Brand</div>
          <img className={styles.arrowIcon} alt="" src="/arrow1.svg" />
        </a>
      </div>
      <div className={styles.div1}>
        <img className={styles.imageIcon} alt="" src="/image2@2x.png" />
        <a className={styles.link1}>
          <div className={styles.eLearningPortal}>E-Learning Portal</div>
          <img className={styles.arrowIcon} alt="" src="/arrow1.svg" />
        </a>
      </div>
      <div className={styles.div2}>
        <img className={styles.imageIcon} alt="" src="/image2@2x.png" />
        <a className={styles.link2}>
          <div className={styles.onlineElectronicStore}>
            Online Electronic Store
          </div>
          <img className={styles.arrowIcon} alt="" src="/arrow2.svg" />
        </a>
      </div>
      <div className={styles.arrows}>
        <button className={styles.leftArrow} autoFocus>
          <div className={styles.bg} />
          <img className={styles.vectorIcon} alt="" src="/vector5.svg" />
        </button>
        <button className={styles.rightArrow} autoFocus>
          <div className={styles.bg} />
          <img className={styles.vectorIcon1} alt="" src="/vector6.svg" />
        </button>
      </div>
      <div className={styles.projectsPartners1}>{`Projects & Partners`}</div>
    </section>
  )
}

export default ProjectSection
