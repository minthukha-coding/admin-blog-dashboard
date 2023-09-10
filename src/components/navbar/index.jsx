import React from "react";
import styles from "./style.module.css";

function Navbar() {
  return (
    <div className={styles.NavbarConatainner}>
      <div className={styles.logoContainner}>
        <div>Admin Panel</div>
        {/* <button className={styles.icon}>
          <img src="../../../../public/menu.svg" alt="" />
        </button> */}
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
