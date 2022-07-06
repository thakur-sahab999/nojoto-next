import React from "react";
import Cards from "../Cards/Cards";
import Footer from "../Footer/Footer";
import styles from "./Popular.module.css";
import result from "../../data"

function TopicsContent() {

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

  return (
    <div className="contentContainer">
      <div className="contentRight">
        <div>
          <div className={styles.TopicsContainer}>
              {result.map((card, id) => (
                  <Cards data={card} key={id} className="grid-item" />
              ))}
          </div>
         <Footer/>
        </div>
      </div>
    </div>
  );
}

export default TopicsContent;
