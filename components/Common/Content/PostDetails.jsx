import React from "react";
import NoSsr from "@mui/material/NoSsr";
import styles from "./Post.module.css";
import Link from "next/link";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatIcon from "@mui/icons-material/Chat";
import FacebookIcon from "@mui/icons-material/Facebook";
import DownloadIcon from "@mui/icons-material/Download";
import Cards from "../Cards/Cards";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ShopIcon from "@mui/icons-material/Shop";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Icon } from "@iconify/react";
import ReactPlayer from "react-player";
import result from "../../data";
function PostDetails() {
  const source =
    "https://media.nojoto.com/content/media/1719456/2022/07/feed/67caf03412eca92387248d65edf1fe10/67caf03412eca92387248d65edf1fe10_default.mp4";
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
    <>
      <div className="contentContainer">
        <div className="contentRight">
          <div className={styles.desktop}>
            <h1 className={styles.heading}>
              Ghar Aangan | Live Video | Live Show | Online Even | English
              Poetry
            </h1>

            <div className={styles.postDetails}>
              <div className={styles.postLeft}>
                <div className={styles.mainContent}>
                  <NoSsr>
                    <ReactPlayer controls="true" url={source} />
                  </NoSsr>
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
                {/* <div className={styles.liveDetails}>
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
                </div>*/}
                <div className={styles.bottom}>
                  <div className={styles.reactCount}>
                    <p>1 Love</p>
                    <p>0 Comment</p>
                  </div>
                  <div className={styles.reacts}>
                    <div>
                      <div className={styles.reactDivL}>
                        <FavoriteBorderIcon />
                        <p>Love</p>
                      </div>
                      <div className={styles.reactDivL}>
                        <ChatIcon />
                        <p>Comment</p>
                      </div>
                    </div>
                    <div>
                      <div className={styles.reactDivR}>
                        <FacebookIcon />
                        <p>Facebook</p>
                      </div>
                      <div className={styles.reactDivR}>
                        <DownloadIcon />
                        <p>Download</p>
                      </div>
                    </div>
                  </div>
                  <div className={styles.userInput}>
                    <div className={styles.avatar}>
                      <img
                        src="https://media.nojoto.com/content/media/5490599/2022/06/profile/c3b61b651444ea6c58436670cf164ac0_5490599/default.jpg"
                        alt=""
                        width="43"
                        height="43"
                      />
                    </div>
                    <div className={styles.userComment}>
                      <input
                        type="text"
                        className={styles.comment}
                        placeholder="Add a comment...."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.moreLikeThis}>
              <h1 className={styles.heading}>More Like This</h1>
              <div className={styles.cards}>
                {result.map((card, id) => (
                  <Cards data={card} key={id} className="grid-item" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.mobile}>
      <div className={styles.mainContent}>
          <NoSsr>
            <ReactPlayer controls="true" url={source} />
          </NoSsr>
        </div>
        <div className={styles.header}>
          <div className={styles.refer}>
            <ArrowBackIcon />
          </div>
          <div className={styles.headerR}>
            <div className={styles.refer}>
              <Link href="/shop">
                <ShopIcon />
              </Link>
              <p>Open In App</p>
            </div>
            <div className={styles.refer}>
              <Link href="/shop">
                <ShoppingBagIcon />
              </Link>
              <p>Shop</p>
            </div>
          </div>
        </div>
        <div className={styles.mobileUserDetails}>
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
        <div className={styles.contentDetails}>
          <p> 393 Views</p>
          <p>Nothing much.....</p>
        </div>
        <div className={styles.contentAction}>
          <div className={styles.refer}>
            <Link href="/shop">
              <ChatIcon />
            </Link>
            <p>11</p>
          </div>
          <div className={styles.refer}>
            <Link href="/shop">
              <FavoriteBorderIcon />
            </Link>
            <p>11</p>
          </div>
          <div className={styles.refer}>
            <Link href="/shop">
              <Icon
                icon="mdi:whatsapp"
                color="#25d366"
                width="24"
                height="24"
              />
            </Link>
            <p>Open In App</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostDetails;
