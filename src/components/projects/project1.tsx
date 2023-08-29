import Image from "next/image"

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

export const ProjectView1 = () => {
  return (
    <div className={styles.project1}>
      <Image className={styles.bgLinesIcon} alt="" src={bglines} />
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
        <Image className={styles.bgIcon1} alt="" src={bglight} />
        <Image className={styles.sliderIcon} alt="" src={slider} />
        <div className={styles.text}>
          <div className={styles.ourApproach}>Our Approach</div>
          <div className={styles.weAreHighContainer}>
            <span className={styles.weAreHighContainer1}>
              <p
                className={styles.empoweringSoftwareWe}
              >{`We are high spirited geeks passionate about tech. Our mission is to create `}</p>
              <p
                className={styles.empoweringSoftwareWe}
              >{`Empowering Software. We are powered by coffee, unreal imagination & attention to detail. `}</p>
              <p
                className={styles.empoweringSoftwareWe}
              >{`Whether you are looking to put your boutique online or want a chat forum for `}</p>
              <p
                className={styles.empoweringSoftwareWe}
              >{`your pals, the Castynet Studios will create your app on time & within`}</p>
              <p className={styles.empoweringSoftwareWe}>&nbsp;</p>
              <p
                className={styles.empoweringSoftwareWe}
              >{`Seed life gathered above for May together wherein lights, can't make be won't `}</p>
              <p
                className={styles.empoweringSoftwareWe}
              >{`male blessed cattle grass. All third to darkness said divided multiply saying above `}</p>
              <p className={styles.empoweringSoftwareWe}>
                blessed air heaven Green under said you&apos;re.
              </p>
            </span>
          </div>
        </div>
      </div>
      <div className={styles.challenge}>
        <div className={styles.challenge1}>Challenge</div>
        <div className={styles.weAreHighContainer2}>
          <span className={styles.weAreHighContainer1}>
            <p
              className={styles.empoweringSoftwareWe}
            >{`We are high spirited geeks passionate about tech. Our mission is to create Empowering Software. We are powered by coffee, unreal imagination & attention to detail .`}</p>
            <p className={styles.empoweringSoftwareWe}>&nbsp;</p>
            <p
              className={styles.empoweringSoftwareWe}
            >{`Whether you are looking to put your boutique online or want a chat forum for your pals, the Castynet Studios will create your app on time & within your budget. Seed life gathered above for May together wherein lights, can't make be won't male blessed cattle grass. All third to darkness said divided multiply saying above blessed air heaven Green under said you're.`}</p>
          </span>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.services}>
          <div className={styles.ourServices}>Our services:</div>
          <div className={styles.webDesignContainer}>
            <p
              className={styles.empoweringSoftwareWe}
            >{`Web Design & Development`}</p>
            <p className={styles.empoweringSoftwareWe}>Marketing Strategy</p>
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
      <div className={styles.images}>
        <Image className={styles.icon} alt="" src={image1} />
        <Image className={styles.icon1} alt="" src={image2} />
        <div className={styles.div1}>
          <Image className={styles.imageIcon1} alt="" src={image3} />
        </div>
        <Image className={styles.icon2} alt="" src={image4} />
        <Image className={styles.icon3} alt="" src={image3} />
      </div>
      <div className={styles.topText}>
        <div className={styles.deepOverSea}>
          Deep over sea. That divide for called blessed shall. A she&apos;d.
          Good his saying appear she&apos;d, years fifth. Made. His yielding
          hath evening form lights also there. Isn&apos;t. Under place.
          Abundantly whales brought had creepeth cattle god fly abundantly
          fourth.
        </div>
        <div className={styles.button}>
          <div className={styles.bg} />
          <b className={styles.letsTalk}>In Progress</b>
        </div>
        <div className={styles.onlineElectronicStoreContainer}>
          <p className={styles.empoweringSoftwareWe}>Online Electronic</p>
          <p className={styles.empoweringSoftwareWe}>Store</p>
        </div>
      </div>
    </div>
  )
}
