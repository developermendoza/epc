import React from "react";

import { Link } from "react-router-dom";

import logo2 from "../../images/logo2.png";
import { Social } from "../../ui";
import { BsFillTelephoneFill, BsEnvelopeFill } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import { IconContext } from "react-icons";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={`section dark-bg ${styles.footer}`}>
      <div className="container">
        <div className={`${styles.footer_header} ${styles.footer_mobile_view}`}>
          <h2>
            epc <span>power</span> <img src={logo2} />
          </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className={styles.footer_sections}>
          <div className={styles.footer_section}>
            <h2>Contact</h2>
            <div>
              <div className={styles.contact_info}>
                <div className={styles.contact_icon}>
                  <IconContext.Provider
                    value={{ color: "#0F71BA", size: "1.3em" }}
                  >
                    <ImLocation />
                  </IconContext.Provider>
                </div>
                <p style={{ marginLeft: "15px" }}>
                  13250 Gregg Street, Suite A-2 Poway, CA 92064
                </p>
              </div>
              <div className={styles.contact_info}>
                <div className={styles.contact_icon}>
                  <IconContext.Provider
                    value={{ color: "#0F71BA", size: "1.2em" }}
                  >
                    <BsFillTelephoneFill />
                  </IconContext.Provider>
                </div>
                <p style={{ marginLeft: "15px" }}> +1.858.748.5590</p>
              </div>
              <div className={styles.contact_info}>
                <div className={styles.contact_icon}>
                  <IconContext.Provider
                    value={{ color: "#0F71BA", size: "1.2em" }}
                  >
                    <BsEnvelopeFill />
                  </IconContext.Provider>
                </div>
                <p style={{ marginLeft: "15px" }}>info@epcpower.com</p>
              </div>
            </div>
          </div>
          <div className={styles.footer_section}>
            <h2>Navigation</h2>
            <ul>
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/products">PRODUCTS</Link>
              </li>
              <li>
                <Link to="/company">COMPANY</Link>
              </li>
              <li>
                <Link to="/applications">APPLICATIONS</Link>
              </li>
              <li>
                <Link to="/resources">RESOURCES</Link>
              </li>
              <li>
                <Link to="/news">NEWS</Link>
              </li>
            </ul>
          </div>
          <div className={styles.footer_section}>
            <div
              className={`${styles.footer_header} ${styles.footer_desktop_view}`}
            >
              <h2>
                epc <span>power</span> <img src={logo2} />
              </h2>
              <p>
                EPC Power creates innovative power conversion products that are
                stable, powerful and smaller than you ever thought possible
              </p>
            </div>
            <div className={styles.footer_social}>
              <h2>Social Links</h2>
              <Social />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
