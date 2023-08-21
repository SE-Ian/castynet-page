import type { NextPage } from "next"
import { Button } from "@/components/button"
import styles from "./form-section.module.scss"
const FormSection: NextPage = () => {
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
        <img className={styles.arrow2Icon} alt="" src="/arrow-2.svg" />
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

export default FormSection
