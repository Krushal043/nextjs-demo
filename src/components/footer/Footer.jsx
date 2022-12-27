import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";

import styles from "@assets/styles/components/Footer.module.scss";
import logo from "@assets/images/crictrackerlogo.svg";

function Footer(props) {
  const { footerData } = props;

  return (
    <div className={styles.footer}>
      <div className={styles.footer_container}>
        <div className={styles.footer_top}>
          {footerData.map((item, index) => (
            <div key={index} className={styles.footerItem}>
              <h2>{item.eType}</h2>
              <hr />
              <ul>
                {item.aResults.map((item) => (
                  <li key={item._id}>{item.sTitle}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className={styles.footer_bottom}>
          <div className={styles.footer_data2}>
            <div className={styles.footer_logo}>
              <Link href="/">
                <Image
                  className={styles.logo}
                  src={logo}
                  width={200}
                  alt="Logo"
                />
              </Link>
              {/* <div className={styles.footer_bottom_right}>
                <ul>
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                  <li>4</li>
                  <li>5</li>
                  <li>6</li>
                  <li>7</li>
                  <li>8</li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Footer.propTypes = {
  footerData: PropTypes.array,
};

export default Footer;
