import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import { useEffect, useState } from "react";
import "./layout.css";

function Layout() {
  const [toggleSidebar, setTogglesidebar] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 970) {
        setTogglesidebar(true);
      } else {
        setTogglesidebar(false);
      }
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSidebarToggle = () => {
    setTogglesidebar(!toggleSidebar);
  };

  return (
    <div className="layout">
      <Navbar sidebar={handleSidebarToggle} toggleSideBar={toggleSidebar} />
      <div className="sidebar-layout">
        <Sidebar toggleSideBar={toggleSidebar} />
        <div className="outlet-layout">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
