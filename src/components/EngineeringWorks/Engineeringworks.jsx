import React from "react";
import s from "./Engineeringworks.module.css";
import logoComoany from "../img/logoCompany.png";
import phone from "../img/Phone.png";
import instaImg from "../img/messages/Instagram.png";
import gmailImg from "../img/messages/Gmail.png";
import vkImg from "../img/messages/Vk.png";

const Engineeringworks = () => {
  return (
    <div className={s.worksWindow}>
      <div className={s.worksInfo}>
        <img src={logoComoany} alt="" />
        <h3>Ведутся технические работы</h3>
        <p>
          Наш сайт находится на техническом обслуживании и скоро будет доступен.
        </p>
        <h4 className={s.linkText}>Связь с нами с нами:</h4>
        <div className={s.phoneInfo}>
          <div className={s.phone1}>
            <img src={phone} alt="" />
            <a href="tel:88002005919">8 800 2352-235-325</a>
          </div>
          <div className={s.phone2}>
            <img src={phone} alt="" />
            <a href="tel:88007752839">8 800 3252-235-536</a>
          </div>
        </div>
        <div className={s.messages}>
          <a href="https://www.instagram.com/canzit/">
            <img src={instaImg} alt="" />
          </a>
          <a href="">
            <img src={gmailImg} alt="" />
          </a>

          <a href="https://vk.com/canzit">
            <img src={vkImg} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Engineeringworks;
