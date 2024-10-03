import React from "react";
import { useLocation } from "react-router-dom";
import clsx from "clsx";
import AppNav from "../AppNav/AppNav";
import AuthMenu from "../Authentication/AuthMenu/AuthMenu";
import AppMobileMenuBtn from "../AppMobileMenuBtn/AppMobileMenuBtn";
import ColorSelector from "../ColorSelector/ColorSelector";
import Logo from "../Logo/Logo";
import css from "./AppBar.module.css";

export default function AppBar() {
  const location = useLocation();
  return (
    <React.Fragment>
      <header
        className={clsx(
          css.header,
          location.pathname === "/" && css.headerHome
        )}
      >
        <div className={css.container}>
          <Logo />
          <AppNav />
          <div className={css.wrapper}>
            <AuthMenu />
            <AppMobileMenuBtn />
            <ColorSelector />
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}
