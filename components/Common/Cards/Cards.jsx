import React from "react";
import styles from "./Cards.module.css";
import Image from "next/dist/client/image";
import MoreVertIcon from '@mui/icons-material/MoreVert';
export default function Cards({ data }) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.title}>
        <div className={styles.titleLeft}>
          <img
            src="https://media.nojoto.com/content/media/11628/2022/05/profile/0bd2b2190976d63e526dc37c627723b6_11628/small.jpg"
            alt=""
            height="28px"
            width="28px"
            className={styles.profileImage}
          />
          <p>{data.name}</p>
        </div>
        <MoreVertIcon />
        <div className={styles.titleRight}></div>
      </div>
      <div className={styles.imageContainer}>
        <img
          src="https://media.nojoto.com/content/media/45712/2022/06/feed/cf9e30576ec3824f41678efe462109a0/cf9e30576ec3824f41678efe462109a0_default.jpg"
          alt=""
          width="157px"
        />
      </div>
      <div className={styles.details}>
        <h5>{data.title}</h5>
        <p>{data.date}</p>
        <p>{data.bookingCount} <span>Bookings</span></p>
      </div>
    </div>
  );
}
