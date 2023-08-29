import Image from "next/image"

import styles from "@/styles/_project2.module.scss"

import bglines1 from "/public/bg-lines1.svg"
import quoteicon1 from "/public/quote-icon1.svg"
import arrow1 from "/public/arrow1.svg"
import staricon from "/public/star-icon.svg"
import stars from "/public/stars.svg"
import profile from "/public/image1@2x.png"
import project21 from "/public/project2-1.svg"
import project22 from "/public/project2-2.svg"
import project23 from "/public/project2-3.svg"
import image1 from "/public/5@2x.png"
import image2 from "/public/4@2x.png"
import image3 from "/public/1@2x.png"
import image4 from "/public/2@2x.png"
import rectangle42 from "/public/Rectangle-42.svg"

export const ProjectView2 = () => {
  return (
    <div className={styles.project2}>
      <Image className={styles.bgLinesIcon} alt="" src={bglines1} />
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
        <div className={styles.ourApproach}>Our Approach</div>
        <div className={styles.kindLifeForContainer}>
          <span className={styles.kindLifeForContainer1}>
            <p className={styles.kindLifeFor}>
              Kind life for for darkness called can&apos;t won&apos;t great
              cattle made for moved image replenish signs made, bring
              you&apos;re tree you&apos;ll upon saying him all replenish was air
              shall. Firmament together living together also sixth Days one.
              Kind moved gathering heaven you&apos;ll had.
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
      <div className={styles.challenge}>
        <div className={styles.challenge1}>Challenge</div>
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
        <Image className={styles.icon} alt="" src={project23} />
        <Image className={styles.icon1} alt="" src={project22} />
        <Image className={styles.icon2} alt="" src={project21} />
        <div className={styles.div}>
          <Image className={styles.imageIcon1} alt="" src={image3} />
        </div>
        <Image className={styles.icon3} alt="" src={image4} />
        <Image className={styles.icon4} alt="" src={image3} />
      </div>
      <div className={styles.info}>
        <div className={styles.services}>
          <div className={styles.ourServices}>Our services:</div>
          <div className={styles.webDesignContainer}>
            <p className={styles.kindLifeFor}>{`Web Design & Development`}</p>
            <p className={styles.kindLifeFor}>Marketing Strategy</p>
          </div>
        </div>
        <div className={styles.client}>
          <div className={styles.ourServices}>Total cost:</div>
          <div className={styles.webDesignContainer}>$2000</div>
        </div>
        <div className={styles.duration}>
          <div className={styles.ourServices}>Duration:</div>
          <div className={styles.webDesignContainer}>Nov, 2022 - Jan, 2023</div>
        </div>
      </div>
      <div className={styles.about}>
        <div className={styles.button}>
          <div className={styles.bg} />
          <b className={styles.letsTalk}>Visit Website</b>
        </div>
        <div className={styles.weAreHighContainer2}>
          <span className={styles.kindLifeForContainer1}>
            <p
              className={styles.kindLifeFor}
            >{`We are high spirited geeks passionate about tech. Our mission is to create Empowering Software. We are powered by coffee, unreal imagination & attention to detail .`}</p>
            <p className={styles.kindLifeFor}>&nbsp;</p>
            <p
              className={styles.kindLifeFor}
            >{`Whether you are looking to put your boutique online or want a chat forum for your pals, the Castynet Studios will create your app on time & within your budget. Seed life gathered above for May together wherein lights, can't make be won't male blessed cattle grass. All third to darkness said divided multiply saying above blessed air heaven Green under said you're.`}</p>
          </span>
        </div>
        <div className={styles.onlineElectronicStoreContainer}>
          <p className={styles.kindLifeFor}>Online Electronic</p>
          <p className={styles.kindLifeFor}>Store</p>
        </div>
      </div>
      <Image className={styles.project2Child} alt="" src={rectangle42} />
    </div>
  )
}
