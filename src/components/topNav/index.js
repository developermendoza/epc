import React from "react";
import styles from "./TopNav.module.css";
import { BsFillTelephoneFill, BsEnvelopeFill } from "react-icons/bs";
import { IconContext } from "react-icons/";
import { Link } from "react-router-dom";
import { Social } from "../../ui";

const TopNav = () => {
  return (
    <div className={styles.top_nav}>
      <div className="flex space-between align-center">
        <div className="flex align-center">
          <div>
            <IconContext.Provider
              value={{ color: "#0FBA40", style: { verticalAlign: "middle" } }}
            >
              <BsFillTelephoneFill />
            </IconContext.Provider>
          </div>
          <p style={{ color: "#8A8A8A" }}>+1.858.748.5590</p>
          <div style={{ paddingLeft: "30px" }}>
            <IconContext.Provider
              value={{ color: "#0FBA40", style: { verticalAlign: "middle" } }}
            >
              <BsEnvelopeFill />
            </IconContext.Provider>
          </div>
          <p style={{ color: "#8A8A8A" }}>info@epcpower.com</p>
        </div>
        <div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Link
              style={{ color: "#8A8A8A" }}
              to="https://www.epcpower.com/support-epc"
            >
              Support
            </Link>
            <Link
              style={{ color: "#8A8A8A", margin: "0 10px" }}
              to="https://www.linkedin.com/jobs/search/?f_C=3546766&geoId=92000000"
            >
              Careers
            </Link>
            <Social />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
