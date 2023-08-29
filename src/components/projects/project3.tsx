import Image from "next/image"

import styles from "@/styles/_project3.module.scss"

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
import bg1 from "/public/bg-1.svg"
import screen1 from "/public/screen-1.svg"
import screen2 from "/public/screen-2.svg"
import apple from "/public/apple.svg"
import playstore from "/public/playstore.svg"

export const ProjectView3 = () => {
  return (
    <div className={styles.project3}>
      <div className={styles.review}>
        <Image className={styles.quoteIcon} alt="" src={quoteicon1} />
        <div className={styles.line} />
        <div className={styles.reviewsLink}>
          <Image className={styles.arrowIcon} alt="" src={arrow1} />
          <b className={styles.ratedAt5}>Rated at 5 on Google</b>
          <Image className={styles.starIcon} alt="" src={staricon} />
          <b className={styles.b}>👍🏼</b>
        </div>
        <div className={styles.weAreHigh}>
          “ We are high spirited geeks passionate about tech. Our mission is to
          create. ”
        </div>
        <Image className={styles.starsIcon} alt="" src={stars} />
        <div className={styles.braydenMiller}>Brayden Miller</div>
        <Image className={styles.imageIcon} alt="" src={profile} />
      </div>
      <div className={styles.approach}>
        <Image className={styles.bgIcon1} alt="" src={bg1} />
        <div className={styles.image}>
          <Image className={styles.editScreens1Icon} alt="" src={screen1} />
          <Image className={styles.editScreens1Icon} alt="" src={screen1} />
        </div>
        <div className={styles.buttons}>
          <div className={styles.appStoreButton}>
            <div className={styles.bg} />
            <Image className={styles.vectorIcon} alt="" src={playstore} />
            <b className={styles.viewOnApp}>View on App Store</b>
          </div>
          <div className={styles.googlePlayButton}>
            <div className={styles.bg} />
            <Image className={styles.vectorIcon1} alt="" src={apple} />
            <b className={styles.viewOnGoogle}>View on Google Play</b>
          </div>
        </div>
        <div className={styles.text}>
          <div className={styles.ourApproach}>Our Approach</div>
          <div className={styles.kindLifeForContainer}>
            <span className={styles.kindLifeForContainer1}>
              <p className={styles.kindLifeFor}>
                Kind life for for darkness called can&apos;t won&apos;t great
                cattle made for moved image replenish signs made, bring
                you&apos;re tree you&apos;ll upon saying him all replenish was
                air shall. Firmament together living together also sixth Days
                one. Kind moved gathering heaven you&apos;ll had.
              </p>
              <p className={styles.kindLifeFor}>&nbsp;</p>
              <p className={styles.kindLifeFor}>
                Midst midst Heaven winged isn&apos;t green, good, two our
                won&apos;t kind was very under winged creeping. Sea upon unto
                fruitful created first form which together whose without.
              </p>
            </span>
          </div>
        </div>
      </div>
      <div className={styles.challenge}>
        <div className={styles.aboutProject}>Challenge</div>
        <div className={styles.weAreHighContainer}>
          <span className={styles.kindLifeForContainer1}>
            <p
              className={styles.kindLifeFor}
            >{`We are high spirited geeks passionate about tech. Our mission is to create Empowering Software. We are powered by coffee, unreal imagination & attention to detail .`}</p>
            <p className={styles.kindLifeFor}>&nbsp;</p>
            <p
              className={styles.kindLifeFor}
            >{`Whether you are looking to put your boutique online or want a chat forum for your pals, the Castynet Studios will create your app on time & within your budget. Seed life gathered above for May together wherein lights, can't make be won't male blessed cattle grass.`}</p>
          </span>
        </div>
      </div>
      <div className={styles.images}>
        <div className={styles.div}>
          <Image className={styles.editScreens4Icon} alt="" src={screen2} />
        </div>
        <div className={styles.div1}>
          <Image className={styles.editScreens4Icon} alt="" src={screen2} />
        </div>
        <div className={styles.div2}>
          <Image className={styles.editScreens4Icon} alt="" src={screen2} />
        </div>
        <div className={styles.div3}>
          <Image className={styles.editScreens4Icon} alt="" src={screen2} />
        </div>
        <div className={styles.div4}>
          <Image className={styles.editScreens1Icon} alt="" src={screen1} />
          <Image className={styles.editScreens1Icon} alt="" src={screen1} />
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.duration}>
          <div className={styles.totalCost}>Duration:</div>
          <div className={styles.webDesignContainer}>Nov, 2022 - Jan, 2023</div>
        </div>
        <div className={styles.client}>
          <div className={styles.totalCost}>Total cost:</div>
          <div className={styles.webDesignContainer}>$2000</div>
        </div>
        <div className={styles.services}>
          <div className={styles.totalCost}>Our services:</div>
          <div className={styles.webDesignContainer}>
            <p className={styles.kindLifeFor}>{`Web Design & Development`}</p>
            <p className={styles.kindLifeFor}>Marketing Strategy</p>
          </div>
        </div>
        <div className={styles.line1} />
      </div>
      <div className={styles.about}>
        <div className={styles.aboutProject}>About Project</div>
        <div className={styles.weAreHighContainer2}>
          <span className={styles.kindLifeForContainer1}>
            <p
              className={styles.kindLifeFor}
            >{`We are high spirited geeks passionate about tech. Our mission is to create Empowering Software. We are powered by coffee, unreal imagination & attention to detail .`}</p>
            <p className={styles.kindLifeFor}>&nbsp;</p>
            <p
              className={styles.kindLifeFor}
            >{`Whether you are looking to put your boutique online or want a chat forum for your pals, the Castynet Studios will create your app on time & within your budget. Seed life gathered above for May together wherein lights, can't make be won't male blessed cattle grass.`}</p>
          </span>
        </div>
      </div>
      <div className={styles.heroBanner}>
        <Image className={styles.bgIcon2} alt="" src={bg1} />
        <div className={styles.mobileApp}>Mobile App</div>
      </div>
    </div>
  )
}
