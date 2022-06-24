import React from "react";
import styles from "./Explore.module.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Link from "next/link";
import Footer from '../Footer/Footer'



function ExploreContent() {
  const videos = [
    {
      img: "https://d1z4v2iimzpy84.cloudfront.net/content/media/95996/2018/10/profile/c99bfbe4dd6fde793bd96d4811d7ce66_95996.jpg",
      url: "./",
      id: 1,
    },
    {
      img: "https://d1z4v2iimzpy84.cloudfront.net/content/media/95996/2018/10/profile/c99bfbe4dd6fde793bd96d4811d7ce66_95996.jpg",
      url: "./",
      id: 2,
    },
    {
      img: "https://d1z4v2iimzpy84.cloudfront.net/content/media/95996/2018/10/profile/c99bfbe4dd6fde793bd96d4811d7ce66_95996.jpg",
      url: "./",
      id: 3,
    },
    {
      img: "https://d1z4v2iimzpy84.cloudfront.net/content/media/95996/2018/10/profile/c99bfbe4dd6fde793bd96d4811d7ce66_95996.jpg",
      url: "./",
      id: 4,
    },
    {
      img: "https://d1z4v2iimzpy84.cloudfront.net/content/media/95996/2018/10/profile/c99bfbe4dd6fde793bd96d4811d7ce66_95996.jpg",
      url: "./",
      id: 5,
    },
    {
      img: "https://d1z4v2iimzpy84.cloudfront.net/content/media/95996/2018/10/profile/c99bfbe4dd6fde793bd96d4811d7ce66_95996.jpg",
      url: "./",
      id: 6,
    },
    {
      img: "https://d1z4v2iimzpy84.cloudfront.net/content/media/95996/2018/10/profile/c99bfbe4dd6fde793bd96d4811d7ce66_95996.jpg",
      url: "./",
      id: 7,
    },
    {
      img: "https://d1z4v2iimzpy84.cloudfront.net/content/media/95996/2018/10/profile/c99bfbe4dd6fde793bd96d4811d7ce66_95996.jpg",
      url: "./",
      id: 8,
    },
    {
      img: "https://d1z4v2iimzpy84.cloudfront.net/content/media/95996/2018/10/profile/c99bfbe4dd6fde793bd96d4811d7ce66_95996.jpg",
      url: "./",
      id: 9,
    },
  ];

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
    <div>
      <div className="contentContainer">
        <div className="contentRight">
          
          <div className={styles.exploreTopics}>
            <Link href="/">
              <div className={styles.topicTitle}>
                <p>Upcoming Events</p>
                <div className={styles.tileContainer}>
                  <p>view all</p>
                  <ArrowForwardIosIcon />
                </div>
              </div>
            </Link>
            <div className={styles.topicVids}>
              {videos.map((video, key=(id)) => (
                <Link href={video.url}>
                  <div className={styles.vidCards}>
                    <img src={video.img} alt="" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className={styles.exploreTopics}>
            <Link href="/">
              <div className={styles.topicTitle}>
                <p>Trending Topics</p>
                <div className={styles.tileContainer}>
                  <p>view all</p>
                  <ArrowForwardIosIcon />
                </div>
              </div>
            </Link>
            <div className={styles.topicVids}>
              {videos.map((video, key=(id)) => (
                <Link href={video.url}>
                  <div className={styles.vidCards}>
                    <img src={video.img} alt="" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <hr />
          <Footer topics={topics}/>
        </div>
      </div>
    </div>
  );
}

export default ExploreContent;
