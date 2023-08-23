import Image from "next/image"

import styles from "@/styles/_intro-area.module.scss"

export const IntroSection = () => {
  return (
    <div className={styles.about}>
      <Image
        className={styles.imageIcon}
        alt=""
        src="/laptopView.png"
        width={585}
        height={490}
      />
      <div className={styles.numbers}>
        <Image
          className={styles.linesIcon}
          alt=""
          src="/lines4.svg"
          width={172}
          height={72}
        />
        <div className={styles.div}>
          <b className={styles.tweets}>Tweets</b>
          <Image
            className={styles.mditwitterIcon}
            alt=""
            src="/mditwitter.svg"
            width={22}
            height={22}
          />
          <div className={styles.div1}>285</div>
        </div>
        <div className={styles.div2}>
          <b className={styles.peers}>Peers</b>
          <Image
            className={styles.mditwitterIcon}
            alt=""
            src="/mdiinstagram.svg"
            width={22}
            height={22}
          />
          <div className={styles.k}>{`1.6k `}</div>
        </div>
        <div className={styles.div3}>
          <b className={styles.linesOfCode}>Lines of Code</b>
          <Image
            className={styles.gitIcon}
            alt=""
            src="/git-icon.svg"
            width={20}
            height={19.52}
          />
          <div className={styles.k1}>{`931k `}</div>
        </div>
      </div>
      <div className={styles.text}>
        <h1 className={styles.castynetIsAContainer}>
          <span className={styles.castynetIsAContainer1}>
            <p className={styles.castynetIsA}>{`Castynet is a team `}</p>
            <p className={styles.castynetIsA}>{`of Software Developers `}</p>
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
  )
}
