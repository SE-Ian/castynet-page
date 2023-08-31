import Image from "next/image"

import { NavbarLight } from "../home/navbarlight"

import styles from "@/styles/_projects1.module.scss"

import bglines from "/public/bg-lines.svg"
import quoteicon1 from "/public/quote-icon1.svg"
import arrow1 from "/public/arrow1.svg"
import staricon from "/public/star-icon.svg"
import stars from "/public/stars.svg"
import profile from "/public/image1@2x.png"
import bglight from "/public/bglight.svg"
import slider from "/public/slider.svg"
import image1 from "/public/5@2x.png"
import image2 from "/public/4@2x.png"
import image3 from "/public/1@2x.png"
import image4 from "/public/2@2x.png"
import Link from "next/link"

export const ProjectView1 = () => {
  return (
    <div className={styles.projectContainer}>
      <NavbarLight />
      <Image className={styles.bgLinesIcon} alt="" src={bglines} />
      <div className={styles.projectTitleContainer}>
        <p>
          Online Electronic
          <br />
          Store
        </p>
      </div>
      <div className={styles.topText}>
        <div className={styles.projectDesc}>
          Deep over sea. That divide for called blessed shall. A she&apos;d.
          Good his saying appear she&apos;d, years fifth. Made. His yielding
          hath evening form lights also there. Isn&apos;t. Under place.
          Abundantly whales brought had creepeth cattle god fly abundantly
          fourth.
        </div>
        <div className={styles.status}>
          <b className={styles.statusText}>In Progress</b>
        </div>
      </div>
      <div className={styles.images}>
        <Image className={styles.icon2} alt="" src={image4} />
        <Image className={styles.icon3} alt="" src={image3} />
        <div className={styles.imgSection}>
          <Image className={styles.imageIcon1} alt="" src={image3} />
        </div>
        <Image className={styles.icon1} alt="" src={image2} />
        <Image className={styles.icon} alt="" src={image1} />
      </div>

      <div className={styles.info}>
        <div className={styles.services}>
          <div className={styles.ourServices}>Our services:</div>
          <div className={styles.servicesDesc}>
            Web Design & Development
            <br /> Marketing Strategy
          </div>
        </div>
        <div className={styles.client}>
          <div className={styles.ourServices}>Total cost:</div>
          <div className={styles.servicesDesc}>$2000</div>
        </div>
        <div className={styles.duration}>
          <div className={styles.ourServices}>Duration:</div>
          <div className={styles.servicesDesc}>Nov, 2022 - Jan, 2023</div>
        </div>
      </div>
      <div className={styles.challenge}>
        <div className={styles.challenge1}>Challenge</div>
        <div className={styles.challengeDesc}>
          We are high spirited geeks passionate about tech. Our mission is to
          create Empowering Software. We are powered by coffee, unreal
          imagination & attention to detail.
          <br />
          <br />
          Whether you are looking to put your boutique online or want a chat
          forum for your pals, the Castynet Studios will create your app on time
          & within your budget. Seed life gathered above for May together
          wherein lights, can&apos;t make be won&apos;t male blessed cattle
          grass. All third to darkness said divided multiply saying above
          blessed air heaven Green under said you&apos;re.
        </div>
      </div>

      <div className={styles.approach}>
        <Image className={styles.bgIcon1} alt="" src={bglight} />
        <Image className={styles.sliderIcon} alt="" src={slider} />
        <div className={styles.text}>
          <div className={styles.ourApproach}>Our Approach</div>
          <div className={styles.approachDesc}>
            We are high spirited geeks passionate about tech. Our mission is to
            create Empowering Software. We are powered by coffee, unreal
            imagination & attention to detail. Whether you are looking to put
            your boutique online or want a chat forum for your pals, the
            Castynet Studios will create your app on time & within
            <br />
            <br />
            Seed life gathered above for May together wherein lights, can&apos;t
            make be won&apos;t male blessed cattle grass. All third to darkness
            said divided multiply saying above blessed air heaven Green under
            said you&apos;re.
          </div>
        </div>
      </div>

      <div className={styles.review}>
        <Image className={styles.quoteIcon} alt="" src={quoteicon1} />
        <div className={styles.profile}>Brayden Miller</div>
        <Image className={styles.imageIcon} alt="" src={profile} />
        <Image className={styles.starsIcon} alt="" src={stars} />
        <div className={styles.reviewDesc}>
          “ We are high spirited geeks passionate about tech. Our mission is to
          create. ”
        </div>
        <div className={styles.line} />
        <Link
          href="https://play.google.com/store/apps"
          className={styles.reviewsLink}
        >
          <span className={styles.review}>👍🏼</span>
          <b className={styles.rating}>Rated at 5 ⭐ on Google</b>
          <Image
            className={styles.arrowIcon}
            alt=""
            src="/arrow1.svg"
            width={13.8}
            height={13.8}
          />
        </Link>
      </div>
    </div>
  )
}
