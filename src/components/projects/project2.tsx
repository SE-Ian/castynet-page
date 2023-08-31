import Image from "next/image"
import Link from "next/link"

import { NavbarLight } from "../home/navbarlight"

import styles from "@/styles/_project2.module.scss"

export const ProjectView2 = () => {
  return (
    <div className={styles.projectContainer}>
      <NavbarLight />
      <Image
        className={styles.banner}
        alt=""
        src="/laptopview.svg"
        width={1512}
        height={710}
      />
      <Image
        className={styles.bgLinesIcon}
        alt=""
        src="/bg-lines1.svg"
        width={1180}
        height={2167}
      />

      <div className={styles.aboutContainer}>
        <div className={styles.aboutTitle}>
          Online Electronic
          <br />
          Store
        </div>
        <div className={styles.about}>
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
        <Link href="">
          <div className={styles.status}>
            <b className={styles.letsTalk}>Visit Website</b>
          </div>
        </Link>
      </div>

      <div className={styles.infoContainer}>
        <div className={styles.services}>
          <div className={styles.infoTitle}>Our services:</div>
          <div className={styles.infoDesc}>
            Web Design & Development Marketing Strategy
          </div>
        </div>
        <div className={styles.client}>
          <div className={styles.infoTitle}>Total cost:</div>
          <div className={styles.infoDesc}>$2000</div>
        </div>
        <div className={styles.duration}>
          <div className={styles.infoTitle}>Duration:</div>
          <div className={styles.infoDesc}>Nov, 2022 - Jan, 2023</div>
        </div>
      </div>

      <div className={styles.images}>
        <Image
          className={styles.icon4}
          alt=""
          src="/1@2x.png"
          width={610}
          height={710}
        />
        <Image
          className={styles.icon3}
          alt=""
          src="/2@2x.png"
          width={610}
          height={710}
        />

        <div className={styles.imgHighlight}>
          <Image
            className={styles.imageIcon1}
            alt=""
            src="/1@2x.png"
            width={1150}
            height={700}
          />
        </div>
        <Image
          className={styles.icon2}
          alt=""
          src="/project2-1.svg"
          width={410}
          height={344}
        />
        <Image
          className={styles.icon1}
          alt=""
          src="project2-2.svg"
          width={410}
          height={344}
        />
        <Image
          className={styles.icon}
          alt=""
          src="/project2-3.svg"
          width={410}
          height={344}
        />
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
          grass.
        </div>
      </div>

      <div className={styles.approach}>
        <div className={styles.approachTitle}>Our Approach</div>
        <div className={styles.approachDesc}>
          Kind life for for darkness called can&apos;t won&apos;t great cattle
          made for moved image replenish signs made, bring you&apos;re tree
          you&apos;ll upon saying him all replenish was air shall. Firmament
          together living together also sixth Days one. Kind moved gathering
          heaven you&apos;ll had.
          <br />
          <br />
          Midst midst Heaven winged isn&apos;t green, good, two our won&apos;t
          kind was very under winged creeping. Sea upon unto fruitful created
          first form which together whose without.
        </div>
      </div>

      <div className={styles.review}>
        <Image
          className={styles.quoteIcon}
          alt=""
          src="/quote-icon1.svg"
          width={127}
          height={100}
        />
        <div className={styles.profile}>Brayden Miller</div>
        <Image
          className={styles.imageIcon}
          alt=""
          src="/image1@2x.png"
          width={90}
          height={90}
        />
        <Image
          className={styles.starsIcon}
          alt=""
          src="/stars.svg"
          width={113}
          height={20}
        />
        <div className={styles.reviewDesc}>
          “ We are high spirited geeks passionate about tech. Our mission is to
          create. ”
        </div>
        <div className={styles.line} />
        <div className={styles.reviewsLink}>
          <Link
            href="https://play.google.com/store/apps"
            className={styles.reviewsLink}
          >
            <span>👍🏼</span>
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
    </div>
  )
}
