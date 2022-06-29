import React from "react";
import Link from "next/link";
import styles from "./LiveContent.module.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import LiveCard from "../LiveCard/LiveCards";
import Footer from "../Footer/Footer";

const LiveContent = () => {
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
        <div className={styles.feeds}>
          <div className={styles.feedHeader}>
            <h3>Upcoming Live Shows</h3>
            <div className={styles.tileContainer}>
              <Link href="/">
                <div className={styles.tile}>
                  <p>View All</p>
                  <ArrowForwardIosIcon />
                </div>
              </Link>
            </div>
          </div>
          <div className={styles.cards}>
            {cards.map((card, id) => (
              <LiveCard data={card} key={id} />
            ))}
          </div>
          <hr />
          <div className={styles.feedHeader}>
            <h3>Current Live Shows</h3>
            <div className={styles.tileContainer}>
              <Link href="/">
                <div className={styles.tile}>
                  <p>View All</p>
                  <ArrowForwardIosIcon />
                </div>
              </Link>
            </div>
          </div>
          <div className={styles.cards}>
            {cards.map((card, id) => (
              <LiveCard data={card} key={id} />
            ))}
          </div>
        </div>
        <hr />
        <Footer/>
      </div>
    </div>
  );
};

export default LiveContent;
