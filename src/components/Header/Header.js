import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <div>
      <div className={styles.picture}>
        <div className={styles.img}>
          <img src="https://imageio.forbes.com/specials-images/imageserve/62d599ede3ff49f348f9b9b4/0x0.jpg?format=jpg&crop=821,821,x155,y340,safe&height=416&width=416&fit=bounds" alt=""/>
        </div>
          <h2 className={styles.title}>Spend Bill Gates's Money</h2>
        <div></div>
      </div>
    </div>
  );
}

export default Header;
