import Image from "next/image"

import styles from "@/styles/_services-area.module.scss"

export const ServicesSection = () => {
  return (
    <section className={styles.servicesContainer} id="services">
      <div className={styles.bg}>
        <div className={styles.maskGroup}>
          <div className={styles.bg1} />
          <Image
            className={styles.maskGroupChild}
            alt=""
            src="/servicesbg.svg"
            width={911}
            height={836}
          />
        </div>
      </div>
      <div className={styles.serviceContainer1}>
        <span className={styles.titledesc}>Web Apps</span>
        <span className={styles.desc}>
          {`Good rule is day good tree yielding fifth appear moved their fifth.`}
        </span>
        <Image
          className={styles.iconWindow2}
          alt=""
          src="/icon-window-1.svg"
          width={110}
          height={110}
        />
      </div>
      <div className={styles.serviceContainer2}>
        <span className={styles.titledesc2}>Enterprise Software</span>
        <span className={styles.desc}>
          Saying that gathered day very tree saying unto the appear life.
        </span>
        <Image
          className={styles.mobile3Icon}
          alt=""
          src="/icon-find-1.svg"
          width={110}
          height={110}
        />
      </div>
      <div className={styles.serviceContainer3}>
        <span className={styles.titleDesc3}>Android Apps</span>
        <span className={styles.desc}>
          Have lesser moveth midst all that of after dominion sixth fowl
          wherein.
        </span>
        <Image
          className={styles.mobile3Icon}
          alt=""
          src="/mobile-21.svg"
          width={110}
          height={110}
        />
      </div>
      <div className={styles.serviceContainer4}>
        <span className={styles.titledesc}>iOS Apps</span>
        <span className={styles.desc}>
          Good rule is day good tree yielding fifth appear moved their fifth.
        </span>
        <Image
          className={styles.mobile3Icon}
          alt=""
          src="/mobile-3.svg"
          width={110}
          height={110}
        />
      </div>
      <h2 className={styles.services}>Services</h2>
      <div className={styles.skills}>
        <span className={styles.skillsExample}>
          {`JavaScript ReactJS React Native NodeJS Headless CMS/s Firebase
              Amazon AWS`}
        </span>
        <Image
          className={styles.lines1}
          alt=""
          src="/lines1.svg"
          width={1170}
          height={121}
        />
        <Image
          className={styles.lines2}
          alt=""
          src="/lines2.svg"
          width={869}
          height={1}
        />
      </div>
    </section>
  )
}
