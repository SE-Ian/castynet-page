"use client"

import { useState } from "react"
import Select from "react-select"

import { Button } from "@/components/button"
import { options } from "@/constants"

import styles from "@/styles/_forms-area.module.scss"

export const FormSection = () => {
  const [appTypes, setAppTypes] = useState<
    { value: string; label: string }[] | null
  >([])

  return (
    <section className={styles.contactContainer} id="contact">
      <h3 className={styles.formTitleContainer}>
        <p className={styles.projectTitle}>
          Have a project?
          <br />
          Let’s talk.
        </p>
      </h3>

      <form>
        <div className={styles.name}>
          <input
            type="text"
            name="fullname"
            placeholder="Your Name *"
            required
            className={styles.text}
          />
          <div className={styles.line2} />
        </div>
        <div className={styles.email}>
          <input
            type="email"
            name="email"
            placeholder="Email Address *"
            required
            className={styles.text}
          />
          <div className={styles.line2} />
        </div>
        <div className={styles.kindOfApp}>
          <div className={styles.line1} />

          <Select
            isMulti
            options={options}
            value={appTypes}
            onChange={(selectedOptions) =>
              setAppTypes(selectedOptions as { value: string; label: string }[])
            }
            placeholder="What kind of app are you interested in?"
          />
        </div>

        <div className={styles.message}>
          <textarea
            name="message"
            placeholder="Message *"
            required
            className={styles.messageText}
          />
          <div className={styles.line} />
        </div>
      </form>

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
    </section>
  )
}
