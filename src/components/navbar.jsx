import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DehazeIcon from "@mui/icons-material/Dehaze";
import CloseIcon from "@mui/icons-material/Close";
import DarkMode from "./DarkMode/DarkMode";
import BlueLogo from "../static/images/iste-logo-blue.png";

const Navbar = () => {
  const [mobile, setMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth > 768) {
      setMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobile(!mobile);
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/">
          {" "}
          {/* Link to the home page */}
          <img
            src={BlueLogo}
            alt="Logo"
            style={{ width: "9vh", padding: "1px" }}
          />
        </Link>
        <button className="mobile-menu-icon" onClick={toggleMobileMenu}>
          {mobile ? <CloseIcon /> : <DehazeIcon />}
        </button>
        <ul className={mobile ? "nav-links-mobile" : "nav-links"}>
          <li onClick={() => setMobile(false)} className="navlink-text">
            <Link to="/">Home</Link>
          </li>
          <li onClick={() => setMobile(false)} className="navlink-text">
            <Link to="/members">Members</Link>
          </li>
          <li onClick={() => setMobile(false)} className="navlink-text">
            <Link to="/events">Events</Link>
          </li>
          <li onClick={() => setMobile(false)} className="navlink-text">
            <Link to="/gallery">Gallery</Link>
          </li>
          <li onClick={() => setMobile(false)} className="navlink-text">
            <Link to="/blogs">Blogs</Link>
          </li>
          <li onClick={() => setMobile(false)}>
            <DarkMode />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
