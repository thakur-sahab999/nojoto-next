
import BottomNav from "./Common/BottomNav/BottomNav.jsx"
import Navbar from "./Common/Navbar/Navbar";
import Sidebar from "./Common/Sidebar/Sidebar"
import { useState } from "react";
import DesktopNav from "./Common/DesktopNav/DesktopNav.jsx";
import NewPostModal from "./Modals/NewPost/NewPostModal"


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
        <Sidebar  click={sidebar}/>
        {children}
        <BottomNav />
      </div>
    )
  } else {
    return (

      <div>
      
        <Navbar click={sidebar} />
        <DesktopNav />
        {children}
        <BottomNav />
      </div>
    )
  }
}

export default Layout;
