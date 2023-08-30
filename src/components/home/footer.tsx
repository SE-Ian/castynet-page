import Image from "next/image"
import Link from "next/link"

import { socialLinks } from "@/constants"

import styles from "@/styles/_footer.module.scss"

export const Footer = () => {
  return (
    <section className={styles.footerContainer}>
      <Image
        className={styles.bgIcon}
        alt=""
        src="/bg.svg"
        width={1512}
        height={300}
      />
      <div className={styles.socialIcons}>
        {socialLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            rel="noopener noreferrer"
            target="_blank"
            className={styles.mdigicon}
          >
            <Image
              src={link.src}
              alt={link.alt}
              width={22}
              height={22}
              className={styles.vectorIcon}
            />
          </Link>
        ))}
      </div>
      <span className={styles.footerCite}>
        © 2018 - 2023 Castynet Studios - Empowering Software.
      </span>
    </section>
  )
}
