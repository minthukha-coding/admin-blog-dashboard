import React from "react";
import styles from "./style.module.css";

function Navbar() {
  return (
    <div className={styles.NavbarConatainner}>
      <div className={styles.logoContainner}>
        <div className={styles.adContainner}>Admin Pannel</div>
      </div>
      <div className="">
        <div>
          <img src="../../../../public/profile.svg" alt="" className={styles.icon}/>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
