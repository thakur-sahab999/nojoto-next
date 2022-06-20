import styles from "./Footer.module.css";
import goldBadge from "../../../public/resources/Banner/banner_0.jpg";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.goldMain}>
        <h3>
          Become{" "}
          <span>
            <img
              src="https://nojoto.com/resources/desktop/images/nojoto-gold-logo3.png"
              width="15%"
            />
          </span>{" "}
          Member
        </h3>
        <div className={styles.features}>
          <div className={styles.benefitsList}>
            <div className={styles.bl_img}>
              <img
                src="https://nojoto.com/resources/desktop/images/live_with_blackBg.png"
                width="20%"
              />
            </div>
            <div className={styles.bl_dt}>
              <h4>Entertainment like never before</h4>
              <p>Talk Shows, Stories, Comedy.</p>
            </div>
          </div>
          <div className={styles.benefitsList}>
            <div className={styles.bl_img}>
              <img
                src="https://nojoto.com/resources/desktop/images/Gold-Badge.png"
                alt="Gold Badge"
                width="20%"
              />
            </div>
            <div className={styles.bl_dt}>
              <h4>Gold Badge</h4>
              <p>A unique profile always stands out.</p>
            </div>
          </div>
          <div className={styles.benefitsList}>
            <div className={styles.bl_img}>
              <img
                src="https://nojoto.com/resources/desktop/images/Save-money.png"
                alt="Save upto money"
                width="12%"
              />
            </div>
            <div className={styles.bl_dt}>
              <h4>Save Rs 5000+/month</h4>
              <p>By watching all Live Shows for free with Gold membership.</p>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Footer;
