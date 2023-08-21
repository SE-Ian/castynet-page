import Image from "next/image"

import { Button } from "@/components/button"
import HeroSVG from "public/assets/heroSection.svg"

import styles from "./styles.module.scss"
import ServicesSection from "@/components/services-section"
import ProjectSection from "@/components/project-section"
import ReviewSection from "@/components/review-section"
import WorkProcessSection from "@/components/work-process-section"
import FormSection from "@/components/form-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.heroBanner}>
        <Image src={HeroSVG} alt="" className={styles.bgImg} />
        <Button
          ctaText="Let’s Talk"
          buttonPosition="absolute"
          buttonCursor="pointer"
          buttonBorder="none"
          buttonPadding="0"
          buttonBackgroundColor="transparent"
          buttonTop="553px"
          buttonLeft="665px"
          letsTalkDisplay="inline-block"
          letsTalkLeft="28.89%"
        />
        <div className={styles.text}>
          <h1 className={styles.weAreAContainer}>
            <p className={styles.weAreA}>we are a software studio.</p>
            {/* <p className={styles.weAreA}>studio.</p> */}
          </h1>
          <span className={styles.focusedOnCreating}>
            Focused on creating elegant, modern & functional apps.
          </span>
        </div>
        <div className={styles.about}>
          <img className={styles.imageIcon} alt="" src="/image3@2x.png" />
          <div className={styles.numbers}>
            <img className={styles.linesIcon} alt="" src="/lines4.svg" />
            <div className={styles.div}>
              <b className={styles.tweets}>Tweets</b>
              <img
                className={styles.mditwitterIcon}
                alt=""
                src="/mditwitter.svg"
              />
              <div className={styles.div1}>285</div>
            </div>
            <div className={styles.div2}>
              <b className={styles.peers}>Peers</b>
              <img
                className={styles.mditwitterIcon}
                alt=""
                src="/mdiinstagram.svg"
              />
              <div className={styles.k}>{`1.6k `}</div>
            </div>
            <div className={styles.div3}>
              <b className={styles.linesOfCode}>Lines of Code</b>
              <img className={styles.gitIcon} alt="" src="/git-icon.svg" />
              <div className={styles.k1}>{`931k `}</div>
            </div>
          </div>
          <div className={styles.text}>
            <h1 className={styles.castynetIsAContainer}>
              <span className={styles.castynetIsAContainer1}>
                <p className={styles.castynetIsA}>{`Castynet is a team `}</p>
                <p
                  className={styles.castynetIsA}
                >{`of Software Developers `}</p>
                <p className={styles.castynetIsA}>based in Nairobi KE.</p>
              </span>
            </h1>
            <p className={styles.weAreHighContainer}>
              <span className={styles.castynetIsAContainer1}>
                <span
                  className={styles.weAreHigh}
                >{`We are high spirited geeks passionate about tech. Our mission is to create Empowering Software. We are powered by coffee, unreal imagination & attention to detail .`}</span>
                <span className={styles.weAreHigh}>&nbsp;</span>
                <span
                  className={styles.weAreHigh}
                >{`Whether you are looking to put your boutique online or want a chat forum for your pals, the Castynet Studios will create your app on time & within your budget.`}</span>
              </span>
            </p>
          </div>
        </div>
      </div>
      <ServicesSection />
      <ProjectSection />
      <ReviewSection />
      <WorkProcessSection />
      <FormSection />
      <Footer />
    </div>
  )
}
