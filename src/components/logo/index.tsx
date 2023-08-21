import type { NextPage } from "next"
import Image from "next/image"
import { useMemo, type CSSProperties } from "react"

import LogoImage from "public/logo.svg"
import styles from "./styles.module.scss"
import Link from "next/link"

type LogoType = {
  /** Style props */
  logoIconPosition?: CSSProperties["position"]
  logoIconTop?: CSSProperties["top"]
  logoIconLeft?: CSSProperties["left"]
}

const Logo: NextPage<LogoType> = ({
  logoIconPosition,
  logoIconTop,
  logoIconLeft,
}) => {
  const logoIconStyle: CSSProperties = useMemo(() => {
    return {
      position: logoIconPosition,
      top: logoIconTop,
      left: logoIconLeft,
    }
  }, [logoIconPosition, logoIconTop, logoIconLeft])

  return (
    <Link href="/" className={styles.link}>
      <Image
        className={styles.logoIcon}
        alt=""
        src={LogoImage}
        style={logoIconStyle}
      />
    </Link>
  )
}

export default Logo
