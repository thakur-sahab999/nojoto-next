import styles from "../styles/News.module.css";
import BottomNav from "./Common/BottomNav/BottomNav";
import Navbar from "./Common/Navbar/Navbar";

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <BottomNav />
    </div>
  );
}

export default Layout;
