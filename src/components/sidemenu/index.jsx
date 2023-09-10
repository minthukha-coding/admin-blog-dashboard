import React from "react";
import { SideMenuData } from "./data/sideMenuData";
import { NavLink } from "react-router-dom";
import style from "./style.module.css";

function SideMenu() {
  return (
    <>
      <ul className={style.navLinkConatainner}>
        {SideMenuData.map((menu, index) => (
          <li key={index}>
            <NavLink to={menu.route} className={style.mainContainner}>
              <img src={menu.logo} alt="" className={style.logoContainner} />
              {menu.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
}

export default SideMenu;
