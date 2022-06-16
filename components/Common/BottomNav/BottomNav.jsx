import React from "react";
import  styles from"./BottomNav.module.css";
import ShopIcon from "@mui/icons-material/Shop";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import OnlinePredictionIcon from '@mui/icons-material/OnlinePrediction';
import  Link from "next/Link";


function BottomNav() {
  return (
    <div className={styles.bottomNav}>
      <div className={styles.links}>
        <div className={styles.refer}>
          < Link className={styles.link} href="/">
            <HomeIcon />
          </Link>
          <p>Home</p>
        </div>
        <div className={styles.refer}>
          < Link className={styles.link} href="/explore">
            <SearchIcon />
          </Link>
          <p>Explore</p>
        </div>
        <div className={styles.refer}>
          < Link className={styles.link} href="/live">
            <OnlinePredictionIcon />
          </Link>
          <p>Live Show</p>
        </div>
        <div className={styles.refer}>
          < Link className={styles.link} href="/notifications">
            <NotificationsIcon />
          </Link>
          <p>Notification</p>
        </div>
        <div className={styles.refer}>
          < Link className={styles.link} href="/profile">
            <PersonIcon />
          </Link>
          <p>Profile</p>
        </div>
      </div>
    </div>
  );
}

export default BottomNav;
