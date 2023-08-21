import type { NextPage } from "next"
import styles from "./work-process-section.module.scss"
const WorkProcessSection: NextPage = () => {
  return (
    <section className={styles.workProcess}>
      <div className={styles.bg}>
        <div className={styles.maskGroup}>
          <img className={styles.bgIcon} alt="" src="/bg1.svg" />
          <img className={styles.imageIcon} alt="" src="/image@2x.png" />
        </div>
        <img className={styles.linesIcon} alt="" src="/lines.svg" />
      </div>
      <div className={styles.div}>
        <img className={styles.bgIcon1} alt="" src="/bg2.svg" />
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
        <img className={styles.launchIcon} alt="" src="/launch-icon.svg" />
      </div>
      <div className={styles.div1}>
        <img className={styles.bgIcon1} alt="" src="/bg3.svg" />
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
        <img className={styles.testingIcon} alt="" src="/testing-icon.svg" />
      </div>
      <div className={styles.div2}>
        <img className={styles.bgIcon1} alt="" src="/bg4.svg" />
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
        <img
          className={styles.developmentIcon}
          alt=""
          src="/development-icon.svg"
        />
      </div>
      <div className={styles.div3}>
        <img className={styles.bgIcon1} alt="" src="/bg5.svg" />
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
        <img className={styles.developmentIcon} alt="" src="/idea-icon.svg" />
      </div>
      <h4 className={styles.ourWorkProcess}>Our Work Process</h4>
    </section>
  )
}

export default WorkProcessSection
