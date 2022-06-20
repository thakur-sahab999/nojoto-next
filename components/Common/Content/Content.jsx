import styles from "./Content.module.css";
import Tiles from "../../../components/Tiles/Tiles.jsx";
import Link from "next/link";
import Image from "next/dist/client/image";
import Banner from "../../../public/resources/Banner/banner_0.jpg";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Cards from "../Cards/Cards";
import Footer from "../Footer/Footer";
import DesktopNav from "../DesktopNav/DesktopNav"

export default function Content() {
  const categories = [
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
    <div className={styles.contentContainer}>
      
      <div className={styles.categoryBar}>
        {categories.map((topic, id) => (
          <Tiles data={topic} key={id} />
        ))}
      </div>
      <div className={styles.bannerContainer}>
        <Link href="/">
          <img
            src="https://nojoto.com/resources/images/slider_home_banner1.jpg"
            alt=""
            width="70%"
          />
        </Link>
      </div>
      <div className={styles.feeds}>
        <div className={styles.feedHeader}>
          <h3>Upcoming Live Shows</h3>
          <div className={styles.tileContainer}>
            <Link href="/">
              <div className={styles.tile}>
                <p>view all</p>
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
          <h3>Current Live Shows</h3>
          <div className={styles.tileContainer}>
            <Link href="/">
              <div className={styles.tile}>
                <p>view all</p>
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
          <h3>Popular Stories</h3>
          <div className={styles.tileContainer}>
            <Link href="/">
              <div className={styles.tile}>
                <p>view all</p>
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
                <p>view all</p>
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
        <Footer topics={categories}/>
      </div>
    </div>
  );
}
