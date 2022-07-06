import styles from "./Profile.module.css";
import Footer from "../Footer/Footer";
import Cards from "../Cards/Cards";
import Link from "next/link";
import result from "../../data";

function ProfileContent() {
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
  return (
    <div className="contentContainer">
      <div className="contentRight">
        <div className={styles.collectionEdit}>
          <div className={styles.portfolioPicture}>
            <img
              src="https://media.nojoto.com/content/media/5599843/2022/06/profile/9851c1879aa7ab3c78be8173a2de8883_5599843/default.jpg"
              alt="Ruchi gupta"
              title="Ruchi gupta"
            />
          </div>
          <h1 id={styles.profileUsername}>Ruchi gupta</h1>
          <div className={styles.portfolioAction}>
            <button>+ Follow</button>
          </div>
          <p className={styles.portfolioDescription}>friends is my life</p>
          <div className={styles.portfolioDetails}>
            <ul>
              <li>
                <Link href="/">
                  <div className={styles.details}>
                    <span className={styles.followerCount}>358</span>
                    Followers
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <div className={styles.details}>
                    <span className={styles.loveCount}>40</span>
                    Followers
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <div className={styles.details}>
                    <span className={styles.storiesCount}>58</span>
                    Followers
                  </div>
                </Link>
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
                  {result.map((card, id) => (
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

export default ProfileContent;
