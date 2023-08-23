import Image from "next/image"

import { Button } from "@/components/button"
import styles from "@/styles/_forms-area.module.scss"
export const FormSection = () => {
  return (
    <div className={styles.letsTalk}>
      <Button
        ctaText="Submit"
        buttonPosition="absolute"
        buttonCursor="pointer"
        buttonBorder="none"
        buttonPadding="0"
        buttonBackgroundColor="transparent"
        buttonTop="585px"
        buttonLeft="295px"
        letsTalkDisplay="inline-block"
        letsTalkLeft="33.89%"
      />
      <div className={styles.message}>
        <div className={styles.message1}>Message *</div>
        <div className={styles.line} />
      </div>
      <div className={styles.kindOfApp}>
        <div className={styles.line1} />
        <Image
          className={styles.arrow2Icon}
          alt=""
          src="/arrow-2.svg"
          width={11.6}
          height={6.6}
        />
        <div className={styles.whatKindOf}>
          What kind of app are you interested in?
        </div>
      </div>
      <div className={styles.email}>
        <div className={styles.emailAddress}>Email Address *</div>
        <div className={styles.line2} />
      </div>
      <div className={styles.name}>
        <div className={styles.emailAddress}>Your Name *</div>
        <div className={styles.line2} />
      </div>
      <h3 className={styles.haveAProjectContainer}>
        <p className={styles.haveAProject}>{`Have a project? `}</p>
        <p className={styles.haveAProject}>Let’s talk.</p>
      </h3>
    </div>
  )
}
