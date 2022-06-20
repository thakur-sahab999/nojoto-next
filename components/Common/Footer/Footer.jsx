import styles from "./Footer.module.css";
import Tiles from "../../Tiles/Tiles";

const Footer = ({ topics }) => {
  const topic = topics;
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footer}>
        <div className={styles.nojotoGold}>
          <div className={styles.goldTitle}>
            <h3>
              Become{" "}
              <span>
                <img
                  src="https://nojoto.com/resources/desktop/images/nojoto-gold-logo3.png"
                  alt=""
                  width="200"
                />
              </span>{" "}
              Member
            </h3>
          </div>
          <ul className={styles.goldFeatures}>
            <li className={styles.features}>
              <div>
                <img
                  src="https://nojoto.com/resources/desktop/images/live_with_blackBg.png"
                  alt=""
                  width="50"
                />
              </div>
              <div>
                <h4 color="rgb(255, 3, 33)">Entertainment like never before</h4>
                <p>Talk Shows, Stories, Comedy.</p>
              </div>
            </li>
            <li className={styles.features}>
              <div>
                <img
                  src="https://nojoto.com/resources/desktop/images/Gold-Badge.png"
                  alt=""
                  width="50"
                />
              </div>
              <div>
                <h4 color="rgb(255, 3, 33)">Gold Badge</h4>
                <p>A unique profile always stands out.</p>
              </div>
            </li>
            <li className={styles.features}>
              <div>
                <img
                  src="https://nojoto.com/resources/desktop/images/Save-money.png"
                  alt=""
                  width="50"
                />
              </div>
              <div>
                <h4 color="rgb(255, 3, 33)">Save Rs 5000+/month</h4>
                <p>By watching all Live Shows for free with Gold membership.</p>
              </div>
            </li>
          </ul>
        </div>

        <div className={styles.trendingTopics}>
          <h3 className={styles.trendingTitle}>Trending Topics</h3>

          <div className={styles.topics}>
            <span>
              {topic.map((data, id) => (
                <Tiles data={data} key={id} />
              ))}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
