import React from "react";
import styles from "./Navbar.module.css";
import nojoto from "../../../public/resources/nojoto_logo_horizontal.png"
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ShopIcon from "@mui/icons-material/Shop";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import Link from "next/link";
import Image from "next/dist/client/image";
import PodcastsIcon from '@mui/icons-material/Podcasts';
import SearchIcon from '@mui/icons-material/Search';

function Navbar({click}) {


  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.navbarLeft}>
          <div className={styles.links}>
            <MenuIcon onClick={click} id="button" className={styles.menuIcon} />
            <div className={styles.menu}>
              <Link href="/">
                <Image src={nojoto} alt="" width={154} height={54} />
              </Link>
            </div>
            <p className={styles.langMenu}>English</p>
            <ArrowDropDownIcon />
          </div>
        </div>

        <div className={styles.navbarCenter}>
          <SearchIcon/>
          <input placeholder="Search For People and Stories" className={styles.searchInput}></input>
        </div>
        <div className={styles.navbarRight}>
          <div className={styles.rightLinks}>
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
          <div className={styles.desktopLinks}>
            <div className={styles.refer}>
              <Link href="/shop">
                <PodcastsIcon />
              </Link>
              <p>Live Show</p>
            </div>
            <div className={styles.refer}>
              <Link href="/shop">
                <ShoppingBagIcon />
              </Link>
              <p>Shop</p>
            </div>
            <button className={styles.button}>LOGIN</button>
            </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
