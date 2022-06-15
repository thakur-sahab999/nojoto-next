
import styles from "./Sidebar.module.css";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Link from "next/link";

export default function Sidebar() {
  const main = [
    { text: "Popular", url: "/popular" },
    { text: "Live Show", url: "/live" },
  ];
  const categories = [
    { text: "Popular", url: "/popular" },
    { text: "Quotes", url: "/popular" },
    { text: "Today", url: "/popular" },
    { text: "Shayari & Gazal", url: "/popular" },
    { text: "Suspense & Thriller", url: "/popular" },
    { text: "Opinion & Thoughts", url: "/popular" },
    { text: "Horror", url: "/popular" },
    { text: "Love & Romanced", url: "/popular" },
    { text: "Poetry", url: "/popular" },
    { text: "Society & Culture", url: "/popular" },
  ];
  const language = [
    { text: "English", url: "/english" },
    { text: "Hindi", url: "/english" },
    { text: "Punjabi", url: "/english" },
    { text: "English", url: "/english" },
    { text: "Hindi", url: "/english" },
    { text: "Punjabi", url: "/english" },
  ];
  const nojotoGold = [
    { text: "RSS", url: "/rss" },
    {text: "Buy Nojoto Gold", url: "/buygold"}
  ]
  return (
    <div className={styles.sidebar}>
      <div className={styles.welcome}>
        <div className={styles.welLeft}>
          <AccountCircleOutlinedIcon className={styles.leftIcon} />
          <span className={styles.leftText}>Welcome</span>
        </div>
        <div className={styles.welRight}>
          <button className={styles.button}>Sign Up</button>
        </div>
      </div>
      <hr />
      <ul className={styles.menuGroup}>
        {main.map((menu) => (
          <div className={styles.menuItemContainer}>
          <li className={styles.menuItem}>
            <ArrowForwardIosIcon  id="menu-icon"/>
            <Link href={menu.url} className={styles.a}>{menu.text}</Link>
          </li>
          </div>
        ))}
      </ul>
      <hr />
      <h4 className={styles.menuGroupLabel}>Categories</h4>
      <ul className={styles.menuGroup}>
        {categories.map((menu) => (
          <div className={styles.menuItemContainer}>
          <li className={styles.menuItem}>
            <ArrowForwardIosIcon id="menu-icon"/>
            <Link href={menu.url} className={styles.a} >{menu.text}</Link>
          </li>
          </div>
        ))}
      </ul>
      <hr />
      <h4 className={styles.menuGroupLabel}>Language</h4>
      <ul className={styles.menuGroup}>
        {language.map((menu) => (
          <div className={styles.menuItemContainer}>
          <li className={styles.menuItem}>
            <ArrowForwardIosIcon id="menu-icon"/>
            <Link href={menu.url} className={styles.a}>{menu.text}</Link>
            </li>
            </div>
        ))}
      </ul>
      <hr />
      <ul className={styles.menuGroup}>
        {nojotoGold.map((menu) => (
          <div className={styles.menuItemContainer}>
          <li className={styles.menuItem}>
            <ArrowForwardIosIcon  id="menu-icon"/>
            <Link href={menu.url} className={styles.a}>{menu.text}</Link>
          </li>
          </div>
        ))}
      </ul>
    </div>
  );
}
