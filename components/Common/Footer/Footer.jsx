import styles from "./Footer.module.css";
import goldBadge from "../../../public/resources/Banner/banner_0.jpg";
import Image from "next/image";
import Tiles from "../../Tiles/Tiles";

const Footer = () => {
  const topics = [
    {
      id: "12",
      topic: "Popular",
    },
    {
      id: "13",
      topic: "Live",
    },
    {
      id: "14",
      topic: "Music",
    },
    {
      id: "15",
      topic: "Qoutes",
    },
    {
      id: "16",
      topic: "Today",
    },
    {
      id: "17",
      topic: "Awards",
    },
    {
      id: "18",
      topic: "Favourite",
    },
    {
      id: "19",
      topic: "Viral",
    },
    {
      id: "20",
      topic: "Even",
    },
    {
      id: "21",
      topic: "Odd",
    },
    {
      id: "22",
      topic: "Bored",
    },
    {
      id: "22",
      topic: "Bored",
    },
    {
      id: "22",
      topic: "Bored",
    },
    {
      id: "22",
      topic: "Bored",
    },
    {
      id: "22",
      topic: "Bored",
    },
    {
      id: "22",
      topic: "Bored",
    },
    {
      id: "22",
      topic: "Bored",
    },
    {
      id: "22",
      topic: "Bored",
    },
    {
      id: "22",
      topic: "Bored",
    },
    {
      id: "22",
      topic: "Bored",
    },
  ];
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
          <div className={styles.benefitsListR}>
            <div className={styles.bl_img}>
              <img
                src="https://nojoto.com/resources/desktop/images/Save-money.png"
                alt="Save upto money"
                width="12%"
              />
            </div>
            <div className={styles.bl_dt}>
              <h4>Save Rs 5000+/month</h4>
              <p>By watching all Live Shows for <br/> free with Gold membership.</p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className={styles.trendingTopics}>
        <h2>Trending Topics</h2>
        <ul className={styles.topics}>
            <li className={styles.items}>
              {topics.map((data, id) => (
                <Tiles data={data} key={id} />
              ))}
            </li>
          </ul>

      </div>
      <hr />
      <div className={styles.nojoto_number}>
	<img src="https://nojoto.com/resources/images/nojoto_l_red.png" alt="Gold Badge" />
		<h4>India Largest Stortelling Platform</h4>
		<ul>
			<li><div className={styles.counting} data-count="10">10</div>
			<span>Lac+</span><span>Storytellers</span></li>
			<li><div className={styles.counting} data-count="1.3">1.3</div>
			<span>Cr+</span><span>Stories</span></li>
			<li><div className={styles.counting} data-count="45">45</div>
			<span>Lac+</span><span>Users</span></li>
		</ul>
</div>
    </div>
  );
};

export default Footer;
