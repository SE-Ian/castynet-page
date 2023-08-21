import type { NextPage } from "next"
import styles from "./services-section.module.scss"
const ServicesSection: NextPage = () => {
  return (
    <section className={styles.services5}>
      <div className={styles.bg}>
        <div className={styles.maskGroup}>
          <div className={styles.bg1} />
          <img className={styles.maskGroupChild} alt="" src="/group-7.svg" />
          <div className={styles.skills}>
            <span className={styles.javascriptReactjsReact}>
              JavaScript - ReactJS - React Native - NodeJS - Headless CMS/s -
              Firebase - Amazon AWS
            </span>
            <img className={styles.lines2Icon} alt="" src="/lines2.svg" />
            <img className={styles.lines1Icon} alt="" src="/lines1.svg" />
          </div>
        </div>
        <img className={styles.linesIcon} alt="" src="/lines3.svg" />
      </div>
      <div className={styles.div}>
        <span className={styles.goodRuleIs}>
          Good rule is day good tree yielding fifth appear moved their fifth.
        </span>
        <span className={styles.iosApps}>iOS Apps</span>
        <img className={styles.mobile3Icon} alt="" src="/mobile-3.svg" />
      </div>
      <div className={styles.div1}>
        <span className={styles.haveLesserMovethContainer}>
          <span className={styles.haveLesserMovethContainer1}>
            <p
              className={styles.haveLesserMoveth}
            >{`Have lesser moveth midst all that of `}</p>
            <p className={styles.haveLesserMoveth}>
              after dominion sixth fowl wherein.
            </p>
          </span>
        </span>
        <span className={styles.androidApps}>Android Apps</span>
        <img className={styles.mobile3Icon} alt="" src="/mobile-21.svg" />
      </div>
      <div className={styles.div2}>
        <span className={styles.goodRuleIs}>
          Saying that gathered day very tree saying unto the appear life.
        </span>
        <span className={styles.enterpriseSoftware}>Enterprise Software</span>
        <img className={styles.mobile3Icon} alt="" src="/icon-find-1.svg" />
      </div>
      <div className={styles.div3}>
        <span className={styles.goodRuleIs}>
          Good rule is day good tree yielding fifth appear moved their fifth.
        </span>
        <span className={styles.iosApps}>Web Apps</span>
        <img className={styles.iconWindow2} alt="" src="/icon-window-1.svg" />
      </div>
      <h2 className={styles.services}>Services</h2>
    </section>
  )
}

export default ServicesSection
