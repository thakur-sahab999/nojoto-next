import React from "react";
import styles from "./Cards.module.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
export default function Cards({ data }) {


  return (
    <div className={styles.cardContainer} id={data.POST_ID}>
      <div className={styles.title}>
        <div className={styles.titleLeft}>
          <img
            src={data.PHOTO}
            alt=""
            height="36px"
            width="36px"
            className={styles.profileImage}
          />
          <p>{data.FIRSTNAME}</p>
        </div>
        <div className={styles.titleRight}>
          <MoreVertIcon />
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img src={data.POST_ATTACHMENTS[0].POST_ATTACHMENT_THUMB_URL} alt="" className={styles.image} />
      </div>
      <div className={styles.details}>
        <h3>{data.POST_CONTENT}</h3>
        <p>{data.POST_ATTACHMENTS[0].VIEW_COUNT} views</p>
      </div>
    </div>
  );
}
