import Image from "next/image"

import styles from "@/styles/_work-area.module.scss"

export const WorkProcessSection = () => {
  return (
    <section className={styles.workProcessContainer} id="process">
      <div className={styles.bg}>
        <div className={styles.maskGroup}>
          <Image
            className={styles.bgIcon}
            alt=""
            src="/bg1.svg"
            width={1512}
            height={1190}
          />
          <Image
            className={styles.imageIcon}
            alt=""
            src="/image@2x.png"
            width={464}
            height={738}
          />
        </div>
        <Image
          className={styles.linesIcon}
          alt=""
          src="/lines.svg"
          width={1180}
          height={939}
        />
      </div>
      <div className={styles.process1}>
        <Image
          className={styles.bgIcon1}
          alt=""
          src="/bg5.svg"
          width={410}
          height={250}
        />
        <div className={styles.text}>
          <span className={styles.textTitle}>{`Discover & Search Idea`}</span>
          <span className={styles.textDesc}>
            Firmament subdue evening form, hello form that beginning can&apos;t
            night whales divide cattle.
          </span>
        </div>
        <Image
          className={styles.processIcon}
          alt=""
          src="/idea-icon.svg"
          width={38}
          height={38}
        />
      </div>

      <div className={styles.process2}>
        <Image
          className={styles.bgIcon1}
          alt=""
          src="/bg4.svg"
          width={410}
          height={250}
        />
        <div className={styles.text}>
          <span className={styles.textTitle}>{`Design & Development`}</span>
          <span className={styles.textDesc}>
            She&apos;d fruit created created fill upon a called, man fill shall
            greater void our, lesse.
          </span>
        </div>
        <Image
          className={styles.processIcon}
          alt=""
          src="/development-icon.svg"
          width={38}
          height={38}
        />
      </div>

      <div className={styles.process3}>
        <Image
          className={styles.bgIcon1}
          alt=""
          src="/bg3.svg"
          width={410}
          height={250}
        />
        <div className={styles.text}>
          <span className={styles.textDesc}>
            Doesn&apos;t beginning fruitful above midst lesser appear also good
            given good also.
          </span>
          <span className={styles.textTitle}>{`Review & Testing`}</span>
        </div>
        <Image
          className={styles.testingIcon}
          alt=""
          src="/testing-icon.svg"
          width={38}
          height={38}
        />
      </div>

      <div className={styles.process4}>
        <Image
          className={styles.bgIcon1}
          alt=""
          src="/bg2.svg"
          width={410}
          height={250}
        />
        <div className={styles.text}>
          <span className={styles.textDesc}>
            Blessed lights give was doesn&apos;t Saw moveth, deep unto to
            subdue. Made. Itself made greater.
          </span>
          <span className={styles.textTitle}>Launch</span>
        </div>
        <Image
          className={styles.launchIcon}
          alt=""
          src="/launch-icon.svg"
          width={38}
          height={38}
        />
      </div>

      <h4 className={styles.workProcess}>Our Work Process</h4>
    </section>
  )
}
