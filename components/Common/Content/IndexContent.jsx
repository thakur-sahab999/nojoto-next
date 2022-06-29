import styles from "./Content.module.css";
import Tiles from "../../Tiles/Tiles.jsx";
import Link from "next/link";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Cards from "../Cards/Cards";
import LiveCard from "../LiveCard/LiveCards";
import Footer from "../Footer/Footer";
import LiveCards from "../LiveCard/LiveCards";

export default function IndexContent() {
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

  const categories = [
    { text: "Popular", url: "/popular", id: "1" },
    { text: "Quotes", url: "/popular", id: "2" },
    { text: "Today", url: "/popular", id: "3" },
    { text: "Shayari & Gazal", url: "/popular", id: "4" },
    { text: "Suspense & Thriller", url: "/popular", id: "5" },
    { text: "Opinion & Thoughts", url: "/popular", id: "6" },
    { text: "Horror", url: "/popular", id: "7" },
    { text: "Love & Romanced", url: "/popular", id: "8" },
    { text: "Poetry", url: "/popular", id: "9" },
    { text: "Society & Culture", url: "/popular", id: "10" },
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

  const language = [
    { text: "English", url: "/english" },
    { text: "Hindi", url: "/english" },
    { text: "Punjabi", url: "/english" },
    { text: "English", url: "/english" },
    { text: "Hindi", url: "/english" },
    { text: "Punjabi", url: "/english" },
  ];

  return (
    <div className="contentContainer">
      <div className="contentRight">
        <div className={styles.categoryBar}>
          {topics.map((topic, id) => (
            <Tiles data={topic} key={id} />
          ))}
        </div>
        <div className={styles.bannerContainer}>
          <Link href="/">
            <img
              src="https://nojoto.com/resources/images/slider_home_banner1.jpg"
              alt=""
              width="90%"
            />
          </Link>
        </div>
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
              <LiveCards data={card} key={id} />
            ))}
          </div>
          <div className={styles.feedHeader}>
            <h3>Popular Stories</h3>
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
              <Cards data={card} key={id} />
            ))}
          </div>
          <div className={styles.feedHeader}>
            <h3>Trending Videos</h3>
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
              <Cards data={card} key={id} />
            ))}
          </div>
          <hr />
          <Footer />
        </div>
      </div>
    </div>
  );
}
