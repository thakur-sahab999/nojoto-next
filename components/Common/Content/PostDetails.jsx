import React from "react";
import ReactPlayer from "react-player";
import NoSsr from "@mui/material/NoSsr";
import styles from "./Post.module.css";
import Link from "next/link";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatIcon from "@mui/icons-material/Chat";

function PostDetails() {
  return (
    <div className="contentContainer">
      <div className="contentRight">
        <h1 className={styles.heading}>
          Ghar Aangan | Live Video | Live Show | Online Even | English Poetry
        </h1>

        <div className={styles.postDetails}>
          <div className={styles.postLeft}>
            <div className={styles.mainContent}>
              <img
                src="https://media.nojoto.com/content/media/5495515/2022/06/feed/8ce94d68db3c4736be57e4614dc6d7da/8ce94d68db3c4736be57e4614dc6d7da_default.jpg"
                alt=" "
                title=" "
              />
            </div>
          </div>
          <div className={styles.postRight}>
            <div className={styles.userDetails}>
              <div className={styles.user}>
                <div className={styles.avatar}>
                  <img
                    src="https://media.nojoto.com/content/media/5495515/2022/06/profile/89555d4241889ff1a1695e2b0e8c57bb_5495515/small.jpg"
                    alt="साद रूदौलवी سعدؔ ردولوی"
                    class=""
                  />
                </div>
                <div className={styles.userName}>
                  <Link
                    href="https://nojoto.com/profile/103e1c4898ba9818bd547d843b7a28f0/साद-रूदौलवी-سعدؔ-ردولوی"
                    title="साद रूदौलवी سعدؔ ردولوی"
                  >
                    साद रूदौलवी سعدؔ ردولوی
                  </Link>
                </div>
              </div>

              <div className={styles.portfolioAction}>
                <div className={styles.follow}>
                  <button>Follow</button>
                </div>
                <div className={styles.options}>
                  <MoreVertIcon />
                </div>
              </div>
            </div>
            <div className={styles.liveDetails}>
              <h2>Ghar Aangan</h2>
              <p>Thursday, 30 June | 01:33 pm</p>
              <p>
                <strong>Price: ₹0.00</strong>
              </p>
              <div className={styles.bookingAction}>
                <Link href="/">
                  <strong className={styles.bookingText}>
                    + Book Now for ₹0.00
                  </strong>
                </Link>
              </div>
              <p>just a min to any topic </p>
            </div>
            <div className={styles.bottom}>
              <div className={styles.reactCount}>
                <p>1 Love</p>
                <p>0 Comment</p>
              </div>
              <div className={styles.reacts}>
                <div className={styles.loveComment}>
                  <FavoriteBorderIcon />
                  <p>Love</p>
                </div>
                <div className={styles.loveComment}>
                <ChatIcon />
                <p>Comment</p>
              </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostDetails;
