import Image from "next/image"
import styles from "@/styles/_work-area.module.scss"
export const WorkProcessSection = () => {
  return (
    <section className={styles.workProcess} id="process">
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
      <div className={styles.div}>
        <Image
          className={styles.bgIcon1}
          alt=""
          src="/bg2.svg"
          width={410}
          height={250}
        />
        <div className={styles.text}>
          <span className={styles.blessedLightsGiveContainer}>
            <span className={styles.blessedLightsGiveContainer1}>
              <p
                className={styles.blessedLightsGive}
              >{`Blessed lights give was doesn't `}</p>
              <p className={styles.blessedLightsGive}>
                Saw moveth, deep unto to subdue. Made. Itself made greater.
              </p>
            </span>
          </span>
          <span className={styles.launch}>Launch</span>
        </div>
        <Image
          className={styles.launchIcon}
          alt=""
          src="/launch-icon.svg"
          width={38}
          height={38}
        />
      </div>
      <div className={styles.div1}>
        <Image
          className={styles.bgIcon1}
          alt=""
          src="/bg3.svg"
          width={410}
          height={250}
        />
        <div className={styles.text}>
          <span className={styles.blessedLightsGiveContainer}>
            <span className={styles.blessedLightsGiveContainer1}>
              <p
                className={styles.blessedLightsGive}
              >{`Doesn't beginning fruitful above midst lesser appear also good `}</p>
              <p className={styles.blessedLightsGive}>given good also.</p>
            </span>
          </span>
          <span className={styles.launch}>{`Review & Testing`}</span>
        </div>
        <Image
          className={styles.testingIcon}
          alt=""
          src="/testing-icon.svg"
          width={38}
          height={38}
        />
      </div>
      <div className={styles.div2}>
        <Image
          className={styles.bgIcon1}
          alt=""
          src="/bg4.svg"
          width={410}
          height={250}
        />
        <div className={styles.text}>
          <span className={styles.blessedLightsGiveContainer}>
            <span className={styles.blessedLightsGiveContainer1}>
              <p
                className={styles.blessedLightsGive}
              >{`She'd fruit created created fill `}</p>
              <p className={styles.blessedLightsGive}>
                upon a called, man fill shall greater void our, lesse.
              </p>
            </span>
          </span>
          <span className={styles.launch}>{`Design & Development`}</span>
        </div>
        <Image
          className={styles.developmentIcon}
          alt=""
          src="/development-icon.svg"
          width={38}
          height={38}
        />
      </div>
      <div className={styles.div3}>
        <Image
          className={styles.bgIcon1}
          alt=""
          src="/bg5.svg"
          width={410}
          height={250}
        />
        <div className={styles.text}>
          <span className={styles.blessedLightsGiveContainer}>
            <span className={styles.blessedLightsGiveContainer1}>
              <p
                className={styles.blessedLightsGive}
              >{`Firmament subdue evening form, `}</p>
              <p className={styles.blessedLightsGive}>
                god form that beginning can&apos;t night whales divide cattle.
              </p>
            </span>
          </span>
          <span className={styles.launch}>{`Discover & Search Idea`}</span>
        </div>
        <Image
          className={styles.developmentIcon}
          alt=""
          src="/idea-icon.svg"
          width={38}
          height={38}
        />
      </div>
      <h4 className={styles.ourWorkProcess}>Our Work Process</h4>
    </section>
  )
}
