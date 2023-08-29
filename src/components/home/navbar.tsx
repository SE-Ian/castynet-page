import Image from "next/image"
import Link from "next/link"

import { links } from "@/constants"

import LogoIcon from "public/logo.svg"
import GithubIcon from "public/vector7.svg"
import BehanceIcon from "public/vector8.svg"
import TwitterIcon from "public/vector9.svg"
import PinterestIcon from "public/vector10.svg"
import InstragramIcon from "public/vector11.svg"

import styles from "@/styles/_navbar.module.scss"

export const Navbar = () => {
  return (
    <div className={styles.header}>
      <Link href="/">
        <Image src={LogoIcon} alt="" className={styles.logo} />
      </Link>
      <div className={styles.line} />
      <div className={styles.navLinksContainer}>
        <div>
          {links.map((link) => (
            <Link key={link.id} href={link.url} className={styles.link}>
              {link.title}
            </Link>
          ))}
        </div>
      </div>
      <div className={styles.socialIcons}>
        <Link
          href="https://github.com/castynet-studios"
          rel="noopener noreferrer"
          target="_blank"
          className={styles.mdicon}
        >
          <Image className={styles.vectorIcon} alt="" src={GithubIcon} />
        </Link>
        <Link
          href="https://www.behance.net/riungemaina"
          rel="noopener noreferrer"
          target="_blank"
          className={styles.mdicon}
        >
          <Image className={styles.vectorIcon1} alt="" src={BehanceIcon} />
        </Link>
        <Link
          href="https://twitter.com/castynet"
          rel="noopener noreferrer"
          target="_blank"
          className={styles.mdicon}
        >
          <Image className={styles.vectorIcon2} alt="" src={TwitterIcon} />
        </Link>
        <Link
          href="https://www.pinterest.com/castynet/"
          rel="noopener noreferrer"
          target="_blank"
          className={styles.mdicon}
        >
          <Image className={styles.vectorIcon3} alt="" src={PinterestIcon} />
        </Link>
        <Link
          href="https://www.instagram.com/castynet.studios/"
          rel="noopener noreferrer"
          target="_blank"
          className={styles.mdicon}
        >
          <Image className={styles.vectorIcon3} alt="" src={InstragramIcon} />
        </Link>
      </div>
    </div>
  )
}
