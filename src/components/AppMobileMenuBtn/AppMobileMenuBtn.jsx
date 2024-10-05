import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { selectTheme } from "../../redux/auth/selectors";
import iconsPath from "../../assets/img/icons.svg";
import AppMobileMenuContent from "../AppMobileMenuContent/AppMobileMenuContent";
import clsx from "clsx";
import css from "./AppMobileMenuBtn.module.css";

const AppMobileMenuBtn = () => {
  const theme = useSelector(selectTheme);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <React.Fragment>
      <button className={css.menuBtn} onClick={handleClick}>
        <svg
          className={clsx(css.menuIcon, css[theme])}
          width="24"
          height="24"
          aria-label="burger menu button"
        >
          <use href={`${iconsPath}#icon-menu`} />
        </svg>
      </button>
      <div
        className={clsx(css.mobileMenu, isHome ? css.home : css[theme], {
          [css.open]: isOpen,
        })}
      >
        <button className={css.closeBtn} onClick={handleClick}>
          <svg
            className={clsx(css.closeIcon, css[theme])}
            width="24"
            height="24"
            aria-label="close menu button"
          >
            <use href={`${iconsPath}#icon-x-close`} />
          </svg>
        </button>
        <AppMobileMenuContent onMenuClick={handleClick} />
      </div>
    </React.Fragment>
  );
};

export default AppMobileMenuBtn;
