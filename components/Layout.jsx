
import BottomNav from "./Common/BottomNav/BottomNav.jsx"
import Navbar from "./Common/Navbar/Navbar";
import Sidebar from "./Common/Sidebar/Sidebar"
import { useState } from "react";
import DesktopNav from "./Common/DesktopNav/DesktopNav.jsx";
import styles from '../styles/Layout.module.css'

function Layout({ children }) {
  const [hide, setHide] = useState(false)
  const sidebar = (e) =>{
    setHide(!hide)
    console.log(hide)
  }

  if (hide === true) {
    return (

      <div>
        <Navbar click={sidebar} />
                <Sidebar />
        {children}
        <BottomNav />
      </div>
    )
  } else {
    return (

      <div>
        <Navbar click={sidebar} />
        <div className={styles.content}>
        <DesktopNav className={styles.desktopNav}/>
          {children}
        </div>
        <BottomNav />
      </div>
    )
  }
}

export default Layout;
