import Image from "next/image"
import styles from "./styles.module.scss"

export const ServicesSection = () => {
  return (
    <section className={styles.services5}>
      <div className={styles.bg}>
        <div className={styles.maskGroup}>
          <div className={styles.bg1} />
          <Image
            className={styles.maskGroupChild}
            alt=""
            src="/group-7.svg"
            width={911}
            height={836}
          />
          <div className={styles.skills}>
            <span className={styles.javascriptReactjsReact}>
              JavaScript ReactJS React Native NodeJS Headless CMS/s Firebase
              Amazon AWS
            </span>
            <Image
              className={styles.lines2Icon}
              alt=""
              src="/lines2.svg"
              width={869}
              height={1}
            />
            <Image
              className={styles.lines1Icon}
              alt=""
              src="/lines1.svg"
              width={1170}
              height={121}
            />
          </div>
        </div>
        <Image
          className={styles.linesIcon}
          alt=""
          src="/lines3.svg"
          width={1512}
          height={1107}
        />
      </div>
      <div className={styles.div}>
        <span className={styles.goodRuleIs}>
          Good rule is day good tree yielding fifth appear moved their fifth.
        </span>
        <span className={styles.iosApps}>iOS Apps</span>
        <Image
          className={styles.mobile3Icon}
          alt=""
          src="/mobile-3.svg"
          width={110}
          height={110}
        />
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
        <Image
          className={styles.mobile3Icon}
          alt=""
          src="/mobile-21.svg"
          width={110}
          height={110}
        />
      </div>
      <div className={styles.div2}>
        <span className={styles.goodRuleIs}>
          Saying that gathered day very tree saying unto the appear life.
        </span>
        <span className={styles.enterpriseSoftware}>Enterprise Software</span>
        <Image
          className={styles.mobile3Icon}
          alt=""
          src="/icon-find-1.svg"
          width={110}
          height={110}
        />
      </div>
      <div className={styles.div3}>
        <span className={styles.goodRuleIs}>
          Good rule is day good tree yielding fifth appear moved their fifth.
        </span>
        <span className={styles.iosApps}>Web Apps</span>
        <Image
          className={styles.iconWindow2}
          alt=""
          src="/icon-window-1.svg"
          width={110}
          height={110}
        />
      </div>
      <h2 className={styles.services}>Services</h2>
    </section>
  )
}
