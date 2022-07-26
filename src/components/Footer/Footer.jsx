import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as LogoGithubSVG } from '../../assets/images/github_logo_icon.svg';
import { ReactComponent as LogoVkSVG } from '../../assets/images/vk_logo_icon.svg';
import css from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.container}>
        <ul className={css.links_list}>
          <li className={css.links_list__item}><Link to='/'><LogoGithubSVG className={css.logo} /></Link></li>
          <li className={css.links_list__item}><Link to='/'><LogoVkSVG className={css.logo} /></Link></li>
        </ul>
        <div className={css.text_block}>
          <div className={css.copy}>© Zamdikhanov, 2022</div>
          <div className={css.text}>Мой обновленный первый проект</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
