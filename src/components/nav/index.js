import React, { useState } from "react";
import { Hamburger, Logo } from "../../ui";
import { Link, useLocation } from "react-router-dom";
import TopNav from "../topNav";
import { IconContext } from "react-icons";

import styles from "./Nav.module.css";
import { NavButton } from "../../ui";

const Nav = () => {
  const [isHidden, setIsHidden] = useState("");
  const [showOverlay, setShowOverlay] = useState("");
  const [icon, setIcon] = useState("");

  const toggleMenu = () => {
    isHidden === styles.hidden ? setIsHidden("") : setIsHidden(styles.hidden);
    icon === "" ? setIcon("close") : setIcon("");
    showOverlay === styles.show
      ? setShowOverlay("")
      : setShowOverlay(styles.show);
  };

  const location = useLocation();

  return (
    <div className={styles.nav}>
      <div className={`${styles.overlay} ${showOverlay}`}></div>
      <TopNav />
      <div
        className={`flex space-between align-center ${styles.nav_container}`}
      >
        <div className={styles.nav_logo_container}>
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className={styles.nav_hamburger} onClick={toggleMenu}>
          <IconContext.Provider value={{ size: "40px" }}>
            <Hamburger icon={icon} />
          </IconContext.Provider>
        </div>
        <ul className={styles.nav_desktop_menu}>
          <li>
            <Link
              id={styles["home-link"]}
              className={styles.nav_link}
              to="/"
              style={{ color: location.pathname === "/" && "#0f71ba" }}
            >
              Home
            </Link>
            <div
              className={styles.nav_line}
              style={{ visibility: location.pathname === "/" && "visible" }}
            ></div>
          </li>
          <li>
            <Link
              id={styles["products-link"]}
              className={styles.nav_link}
              to="/products"
              style={{ color: location.pathname === "/products" && "#0f71ba" }}
            >
              Products
            </Link>
            <div
              className={styles.nav_line}
              style={{
                visibility: location.pathname === "/products" && "visible",
              }}
            ></div>
          </li>
          <li>
            <Link
              className={styles.nav_link}
              id={styles["company-link"]}
              to="/company"
              style={{ color: location.pathname === "/company" && "#0f71ba" }}
            >
              Company
            </Link>
            <div
              className={styles.nav_line}
              style={{
                visibility: location.pathname === "/company" && "visible",
              }}
            ></div>
          </li>
          <li>
            <Link
              className={styles.nav_link}
              id={styles["applications-link"]}
              to="/applications"
              style={{
                color: location.pathname === "/applications" && "#0f71ba",
              }}
            >
              Applications
            </Link>
            <div
              className={styles.nav_line}
              style={{
                visibility: location.pathname === "/applications" && "visible",
              }}
            ></div>
          </li>
          <li>
            <Link
              className={styles.nav_link}
              id={styles["resources-link"]}
              to="/resources"
              style={{ color: location.pathname === "/resources" && "#0f71ba" }}
            >
              Resources
            </Link>
            <div
              className={styles.nav_line}
              style={{
                visibility: location.pathname === "/resources" && "visible",
              }}
            ></div>
          </li>
          <li>
            <Link
              className={styles.nav_link}
              id={styles["news-link"]}
              to="/news"
              style={{ color: location.pathname === "/news" && "#0f71ba" }}
            >
              News
            </Link>
            <div
              className={styles.nav_line}
              style={{ visibility: location.pathname === "/news" && "visible" }}
            ></div>
          </li>
        </ul>
        <div className={styles.nav_desktop_contact}>
          <NavButton />
        </div>
      </div>
      <div className={`${styles.nav_mobile_menu} ${isHidden}`}>
        <p className={styles.nav_mobile_header}>MENU</p>
        <div className="container">
          <ul>
            <li>
              <Link to="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" onClick={toggleMenu}>
                Products
              </Link>
            </li>
            <li>
              <Link to="company" onClick={toggleMenu}>
                Company
              </Link>
            </li>
            <li>
              <Link to="application" onClick={toggleMenu}>
                Applications
              </Link>
            </li>
            <li>
              <Link to="/rosources" onClick={toggleMenu}>
                Resources
              </Link>
            </li>
            <li>
              <Link to="/news" onClick={toggleMenu}>
                News
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
