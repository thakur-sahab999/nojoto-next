import React from "react";
import styles from "./Topics.module.css";
import Tiles from "../../Tiles/Tiles";
import Cards from "../Cards/Cards";
import Footer from "../Footer/Footer";

function TopicsContent() {
  const topics = [
    {
      id: "12",
      topic: "Popular Songs",
    },
    {
      id: "13",
      topic: "Popular English Songs",
    },
    {
      id: "14",
      topic: "Popular Hindi Songs",
    },
    {
      id: "15",
      topic: "Popular Videos",
    },
    {
      id: "16",
      topic: "Popular Struggless and Movements",
    },
    {
      id: "17",
      topic: "Popular Front of India",
    }
  ];

  const cards = [
    {
      id: "1",
      name: "Something",
      profile: "../../../public/resources/Cards/profile.jpg",
      video: "../../../public/resources/Cards/card.jpg",
      title: "Comedy Gold",
      date: "Sun 12 Jun | 9:00 pm",
      bookingCount: "1378",
    },
    {
      id: "2",
      name: "Something",
      profile: "../../../public/resources/Cards/profile.jpg",
      video: "../../../public/resources/Cards/card.jpg",
      title: "Comedy Gold",
      date: "Sun 12 Jun | 9:00 pm",
      bookingCount: "1378",
    },
    {
      id: "3",
      name: "Something",
      profile: "../../../public/resources/Cards/profile.jpg",
      video: "../../../public/resources/Cards/card.jpg",
      title: "Comedy Gold",
      date: "Sun 12 Jun | 9:00 pm",
      bookingCount: "1378",
    },
    {
      id: "4",
      name: "Something",
      profile: "../../../public/resources/Cards/profile.jpg",
      video: "../../../public/resources/Cards/card.jpg",
      title: "Comedy Gold",
      date: "Sun 12 Jun | 9:00 pm",
      bookingCount: "1378",
    },
    {
      id: "5",
      name: "Something",
      profile: "../../../public/resources/Cards/profile.jpg",
      video: "../../../public/resources/Cards/card.jpg",
      title: "Comedy Gold",
      date: "Sun 12 Jun | 9:00 pm",
      bookingCount: "1378",
    },
    {
      id: "6",
      name: "Something",
      profile: "../../../public/resources/Cards/profile.jpg",
      video: "../../../public/resources/Cards/card.jpg",
      title: "Comedy Gold",
      date: "Sun 12 Jun | 9:00 pm",
      bookingCount: "1378",
    },
    {
      id: "7",
      name: "Something",
      profile: "../../../public/resources/Cards/profile.jpg",
      video: "../../../public/resources/Cards/card.jpg",
      title: "Comedy Gold",
      date: "Sun 12 Jun | 9:00 pm",
      bookingCount: "1378",
    },
    {
      id: "8",
      name: "Something",
      profile: "../../../public/resources/Cards/profile.jpg",
      video: "../../../public/resources/Cards/card.jpg",
      title: "Comedy Gold",
      date: "Sun 12 Jun | 9:00 pm",
      bookingCount: "1378",
    },
  ];

  return (
    <div className="contentContainer">
      <div className="contentRight">
        <div className={styles.collectionHeader}>
          <div className={styles.topicsAction}>
            <button>+ Follow</button>
          </div>
          <div className={styles.tags_icon}>
            <img
              src="https://media.nojoto.com/resources/desktop/images/tags_icon.jpg"
              alt="tags"
              layout="responsive"
            />
          </div>
          <div className={styles.collectionEdit_feed} id="viewCollectionDetail">
            <h1 id="viewTopicName">
              Best Popular Shayari, Status, Quotes, Stories
            </h1>
            <p>
              Find the Best Popular Shayari, Status, Quotes from top creators
              only on Nojoto App. Also find trending photos &amp; videos about
              popular songs, popular english songs, popular front of india.
            </p>
          </div>
          <ul className={styles.collection_detials}>
            <li>
              <span id="followCountTopic">1313</span> Followers
            </li>
            <li>
              <span id="storiesCountTopic">4458</span> Stories
            </li>
          </ul>
          <div className={styles.postDetialLabels}>
            <h2>Related Stories</h2>
            <ul className={styles.topics}>
              <li className={styles.items}>
                {topics.map((data, id) => (
                  <Tiles data={data} key={id} />
                ))}
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.tablePannels}>
          <ul className={styles.pannelNav}>
            <li className={styles.TabbedPanelsTab}>Latest</li>
            <li className={styles.TabbedPanelsTab}>Popular</li>
            <li className={styles.TabbedPanelsTab}>Video</li>
          </ul>

          <div className={styles.profileTabs}>
            <div className={styles.TabbedPanelsContent}>
                  {cards.map((card, id) => (
                    <Cards data={card} key={id} className="grid-item"/>
                  ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default TopicsContent;
