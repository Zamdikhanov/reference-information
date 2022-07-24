import React from "react";
// import { Link } from "react-router-dom";
import css from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.container}>
        <div className={css.copy}>© Zamdikhanov, 2022</div>
        <div className={css.text_block}>Links</div>
      </div>
    </footer>
  );
}

export default Footer;
