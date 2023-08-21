import Image from "next/image"
// import Link from "next/link"

// import styles from "./styles.module.scss"

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

// export const Navbar = () => {
//   return (
//     <div>
//       <div className={styles.links}>
//         {links.map((link) => (
//           <Link key={link.id} href={link.url} className={styles.link}>
//             {link.title}
//           </Link>
//         ))}
//       </div>
//     </div>
//   )
// }

import type { NextPage } from "next"
import Logo from "@/components/logo"
import LogoIcon from "public/logo.svg"
import styles from "./styles.module.scss"
import GithubIcon from "public/vector7.svg"
import BehanceIcon from "public/vector8.svg"
import TwitterIcon from "public/vector9.svg"
import PinterestIcon from "public/vector10.svg"
import InstragramIcon from "public/vector11.svg"
import Link from "next/link"
export const Navbar: NextPage = () => {
  return (
    <div className={styles.header}>
      <div className={styles.line} />
      <div className={styles.socialIcons}>
        <Link
          href="https://github.com/castynet-studios"
          className={styles.mdigithub}
        >
          <Image className={styles.vectorIcon} alt="" src={GithubIcon} />
        </Link>
        <Link
          href="https://www.behance.net/riungemaina"
          className={styles.mdigithub}
        >
          <Image className={styles.vectorIcon1} alt="" src={BehanceIcon} />
        </Link>
        <Link href="https://twitter.com/castynet" className={styles.mdigithub}>
          <Image className={styles.vectorIcon2} alt="" src={TwitterIcon} />
        </Link>
        <Link
          href="https://www.pinterest.com/castynet/"
          className={styles.mdigithub}
        >
          <Image className={styles.vectorIcon3} alt="" src={PinterestIcon} />
        </Link>
        <Link
          href="https://www.instagram.com/castynet.studios/"
          className={styles.mdigithub}
        >
          <Image className={styles.vectorIcon3} alt="" src={InstragramIcon} />
        </Link>
      </div>
      <a className={styles.homeAboutServicesContainer}>
        {/* <span>Home About Services Projects Process Contact</span> */}
        <div>
          <div className={styles.links}>
            {links.map((link) => (
              <Link key={link.id} href={link.url} className={styles.link}>
                {link.title}
              </Link>
            ))}
          </div>
        </div>
        <span className={styles.about}> </span>
      </a>
      {/* <Logo logoIconPosition="absolute" logoIconTop="0px" logoIconLeft="0px" /> */}
      <Link href="/" className={styles.link}>
        <Image src={LogoIcon} alt="" className={styles.logo} />
      </Link>
    </div>
  )
}
