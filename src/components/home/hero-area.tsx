import Image from "next/image"

import { Button } from "@/components/button"
import HeroSVG from "public/assets/heroSection.svg"

import styles from "@/styles/_hero-area.module.scss"

export const HeroBanner = () => {
  return (
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
      {/* <Button text="Let’s Talk" /> */}
      <div className={styles.text}>
        <h1 className={styles.weAreAContainer}>
          <p className={styles.weAreA}>we are a software studio.</p>
        </h1>
        <span className={styles.focusedOnCreating}>
          Focused on creating elegant, modern & functional apps.
        </span>
      </div>
    </div>
  )
}
