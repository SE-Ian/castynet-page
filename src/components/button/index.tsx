import { useMemo, type CSSProperties } from "react"
import type { NextPage } from "next"
import styles from "@/styles/_button.module.scss"

type ButtonType = {
  ctaText?: string

  /** Style props */
  buttonPosition?: CSSProperties["position"]
  buttonCursor?: CSSProperties["cursor"]
  buttonBorder?: CSSProperties["border"]
  buttonPadding?: CSSProperties["padding"]
  buttonBackgroundColor?: CSSProperties["backgroundColor"]
  buttonTop?: CSSProperties["top"]
  buttonLeft?: CSSProperties["left"]
  letsTalkDisplay?: CSSProperties["display"]
  letsTalkLeft?: CSSProperties["left"]
}

export const Button: NextPage<ButtonType> = ({
  ctaText,
  buttonPosition,
  buttonCursor,
  buttonBorder,
  buttonPadding,
  buttonBackgroundColor,
  buttonTop,
  buttonLeft,
  letsTalkDisplay,
  letsTalkLeft,
}) => {
  const buttonStyle: CSSProperties = useMemo(() => {
    return {
      position: buttonPosition,
      cursor: buttonCursor,
      border: buttonBorder,
      padding: buttonPadding,
      backgroundColor: buttonBackgroundColor,
      top: buttonTop,
      left: buttonLeft,
    }
  }, [
    buttonPosition,
    buttonCursor,
    buttonBorder,
    buttonPadding,
    buttonBackgroundColor,
    buttonTop,
    buttonLeft,
  ])

  const letsTalkStyle: CSSProperties = useMemo(() => {
    return {
      display: letsTalkDisplay,
      left: letsTalkLeft,
    }
  }, [letsTalkDisplay, letsTalkLeft])

  return (
    <div className={styles.buttonContainer} style={buttonStyle}>
      <div className={styles.bg} />
      <b className={styles.letsTalk} style={letsTalkStyle}>
        {ctaText}
      </b>
    </div>
  )
}
