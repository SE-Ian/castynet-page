"use client"
import Image from "next/image"
import CountUp from "react-countup"

import styles from "@/styles/_intro-area.module.scss"

export const IntroSection = () => {
  return (
    <div className={styles.about} id="about">
      <Image
        className={styles.imageIcon}
        alt=""
        src="/laptopView.png"
        width={585}
        height={490}
      />
      <div className={styles.numbers}>
        <Image
          className={styles.verticallines}
          alt=""
          src="/lines4.svg"
          width={172}
          height={72}
        />
        <div className={styles.sect1}>
          <span className={styles.gitnum}>
            <CountUp start={0} end={931} duration={2.5} suffix="k" />
          </span>
          <p className={styles.gitdesc}>Lines of Code</p>
          <Image
            className={styles.gitIcon}
            alt=""
            src="/git-icon.svg"
            width={20}
            height={19.52}
          />
        </div>
        <div className={styles.sect2}>
          <span className={styles.peernum}>
            <CountUp
              start={0}
              end={1.6}
              duration={2.5}
              decimals={1}
              suffix="k"
            />
          </span>
          <p className={styles.peerdesc}>Peers</p>
          <Image
            className={styles.socialIcon}
            alt=""
            src="/mdiinstagram.svg"
            width={22}
            height={22}
          />
        </div>
        <div className={styles.sect3}>
          <span className={styles.tweetsnum}>
            <CountUp start={0} end={285} duration={2.5} />
          </span>
          <p className={styles.tweets}>Tweets</p>
          <Image
            className={styles.socialIcon}
            alt=""
            src="/mditwitter.svg"
            width={22}
            height={22}
          />
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.introContainer}>
          <span className={styles.intro}>
            Castynet is a team
            <br /> of Software Developers
            <br /> based in Nairobi KE.
          </span>
        </div>
        <div className={styles.descContainer}>
          <div>
            <span
              className={styles.desc}
            >{`We are high spirited geeks passionate about tech. Our mission is to create Empowering Software. We are powered by coffee, unreal imagination & attention to detail.`}</span>
            <br />
            <span
              className={styles.desc}
            >{`Whether you are looking to put your boutique online or want a chat forum for your pals, the Castynet Studios will create your app on time & within your budget.`}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
