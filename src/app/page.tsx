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
import { IntroSection } from "@/components/home/intro"

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
      </div>
      <IntroSection />
      <ServicesSection />
      <ProjectSection />
      <ReviewSection />
      <WorkProcessSection />
      <FormSection />
      <Footer />
    </div>
  )
}
