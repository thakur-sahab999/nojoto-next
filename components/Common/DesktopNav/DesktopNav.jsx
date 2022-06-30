import React from "react";
import styles from "./DesktopNav.module.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import PixIcon from "@mui/icons-material/Pix";
import OnlinePredictionIcon from "@mui/icons-material/OnlinePrediction";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import LanguageIcon from "@mui/icons-material/Language";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import ShopIcon from "@mui/icons-material/Shop";
import Link from "next/link";
import { Icon } from "@iconify/react";

function DesktopNav() {
  const categories = [
    { text: "Popular", url: "/topics", id: "1" },
    { text: "Quotes", url: "/topics", id: "2" },
    { text: "Today", url: "/topics", id: "3" },
    { text: "Shayari & Gazal", url: "/topics", id: "4" },
    { text: "Suspense & Thriller", url: "/topics", id: "5" },
    { text: "Opinion & Thoughts", url: "/topics", id: "6" },
    { text: "Horror", url: "/topics", id: "7" },
    { text: "Love & Romanced", url: "/topics", id: "8" },
    { text: "Poetry", url: "/topics", id: "9" },
    { text: "Society & Culture", url: "/topics", id: "10" },
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
    <div className={styles.leftScroll}>
      <div className={styles.menuItem}>
        <ShopIcon className={styles.Icon} />
        <span className={styles.text}>Nojoto App Download</span>
      </div>
      <div className={styles.menuItem}>
        <HomeIcon className={styles.Icon} />
        <Link href="/">
          <span className={styles.text}>Home</span>
        </Link>
      </div>
      <div className={styles.menuItem}>
        <SearchIcon className={styles.Icon} />
        <Link href="/explore">
          <span className={styles.text}>Explore</span>
        </Link>
      </div>
      <div className={styles.menuItem}>
        <PixIcon className={styles.Icon} />
        <Link href="/popular">
          <span className={styles.text}>Popular</span>
        </Link>
      </div>
      <div className={styles.menuItem}>
        <OnlinePredictionIcon className={styles.Icon} />
        <Link href="/liveshow">
          <span className={styles.text}>Live Shows</span>
        </Link>
      </div>
      <div className={styles.menuItem}>
        <Icon icon="mdi:crown" height="27" className={styles.Icon} />
        <span className={styles.text}>Buy Nojoto Gold</span>
      </div>
      <div className={styles.menuItem}>
        <CollectionsBookmarkIcon className={styles.Icon} />
        <span className={styles.text}>Categories</span>
      </div>

      <ul className={styles.menuGroup}>
        {categories.map((menu, id) => (
          <div className={styles.listItemContainer} key={id}>
            <li className={styles.listItem}>
              <ArrowForwardIosIcon id="menu-icon" className={styles.Icon} />
              <span className={styles.text}>
                <Link href={menu.url} className={styles.a}>
                  {menu.text}
                </Link>
              </span>
            </li>
          </div>
        ))}
      </ul>

      <div className={styles.menuItem}>
        <LanguageIcon className={styles.Icon} />
        <span className={styles.text}>Languages</span>
      </div>
      <ul className={styles.menuGroup}>
        {language.map((menu , id) => (
          <div className={styles.listItemContainer} key={id}>
            <li className={styles.listItem}>
              <ArrowForwardIosIcon id="menu-icon" className={styles.Icon} />
              <span className={styles.text}>
                <Link href={menu.url} className={styles.a}>
                  {menu.text}
                </Link>
              </span>
            </li>
          </div>
        ))}
      </ul>
      <hr />
      <div className={styles.menuItem}>
        <RssFeedIcon className={styles.Icon} />
        <span className={styles.text}>RSS</span>
      </div>
    </div>
  );
}

export default DesktopNav;
