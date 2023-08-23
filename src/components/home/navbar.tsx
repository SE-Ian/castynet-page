import Image from "next/image"
import Link from "next/link"

import LogoIcon from "public/logo.svg"
import styles from "@/styles/_navbar.module.scss"
import GithubIcon from "public/vector7.svg"
import BehanceIcon from "public/vector8.svg"
import TwitterIcon from "public/vector9.svg"
import PinterestIcon from "public/vector10.svg"
import InstragramIcon from "public/vector11.svg"

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "About",
    url: "/about",
  },
  {
    id: 3,
    title: "Services",
    url: "/services",
  },
  {
    id: 4,
    title: "Projects",
    url: "/projects",
  },
  {
    id: 5,
    title: "Process",
    url: "/process",
  },
  {
    id: 6,
    title: "Contact",
    url: "/contact",
  },
]

export const Navbar = () => {
  return (
    <div className={styles.header}>
      <Link href="/" className={styles.link}>
        <Image src={LogoIcon} alt="" className={styles.logo} />
      </Link>
      <div className={styles.line} />
      <div className={styles.socialIcons}>
        <Link
          href="https://github.com/castynet-studios"
          rel="noopener noreferrer"
          target="_blank"
          className={styles.mdigithub}
        >
          <Image className={styles.vectorIcon} alt="" src={GithubIcon} />
        </Link>
        <Link
          href="https://www.behance.net/riungemaina"
          rel="noopener noreferrer"
          target="_blank"
          className={styles.mdigithub}
        >
          <Image className={styles.vectorIcon1} alt="" src={BehanceIcon} />
        </Link>
        <Link
          href="https://twitter.com/castynet"
          rel="noopener noreferrer"
          target="_blank"
          className={styles.mdigithub}
        >
          <Image className={styles.vectorIcon2} alt="" src={TwitterIcon} />
        </Link>
        <Link
          href="https://www.pinterest.com/castynet/"
          rel="noopener noreferrer"
          target="_blank"
          className={styles.mdigithub}
        >
          <Image className={styles.vectorIcon3} alt="" src={PinterestIcon} />
        </Link>
        <Link
          href="https://www.instagram.com/castynet.studios/"
          rel="noopener noreferrer"
          target="_blank"
          className={styles.mdigithub}
        >
          <Image className={styles.vectorIcon3} alt="" src={InstragramIcon} />
        </Link>
      </div>
      <div className={styles.navLinksContainer}>
        <div>
          <div className={styles.links}>
            {links.map((link) => (
              <Link key={link.id} href={link.url} className={styles.link}>
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
