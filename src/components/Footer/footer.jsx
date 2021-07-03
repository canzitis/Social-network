import React from "react";
import s from "./footer.module.css";
import vkLogo from "../img/vk.png";
import instaLogo from "../img/instagram.png";
import gitHubLogo from "../img/github.png";
const Footer = () => {
  return (
    <div className={s.footer}>
      <div className={s.borderFooter}></div>
      My contacts:
      <div className={s.contacts}>
        <a href="https://vk.com/canzit">
          <img src={vkLogo} alt="" />
          ВКонтакте
        </a>
        <a href="https://www.instagram.com/canzit/">
          <img src={instaLogo} alt="" /> instagram
        </a>
        <a href="https://github.com/canzitis">
          <img src={gitHubLogo} alt="" /> GitHub
        </a>
      </div>
      <div className={s.footerInfo}>
        <h6> © 2021 GatHub, Inc</h6>
        <h6>Website creation at home</h6>
      </div>
      <h5 className={s.helpProect}>
        <a href="https://online.sberbank.ru/CSAFront/index.do#/">
          Help the project
        </a>
      </h5>
    </div>
  );
};

export default Footer;
