import Image from "next/image"

import { Button } from "@/components/button"
import HeroSVG from "public/herosection.svg"

import styles from "@/styles/_hero-area.module.scss"
import Link from "next/link"

export const HeroBanner = () => {
  return (
    <div className={styles.heroBanner}>
      <Image src={HeroSVG} alt="" className={styles.bgImg} />
      <Link href="#contact">
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
      </Link>
      <div className={styles.text}>
        <h1 className={styles.descContainer}>
          <p className={styles.desc}>we are a software studio.</p>
        </h1>
        <span className={styles.descMore}>
          Focused on creating elegant, modern & functional apps.
        </span>
      </div>
    </div>
  )
}
