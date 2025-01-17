import React from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectTheme } from "../../redux/auth/selectors";
import { selectUserName } from "../../redux/auth/selectors";
import AuthButton from "../../components/Authentication/AuthButton/AuthButton";
// import GoogleButton from "../Authentication/GoogleBtn/GoogleBtn";
import RegistrationButton from "../Authentication/RegistrationButton/RegistrationButton";
import clsx from "clsx";
import css from "./AppMobileMenuContent.module.css";

const AppMobileMenuContent = ({ onMenuClick }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userName = useSelector(selectUserName);
  const theme = useSelector(selectTheme);
  const isHome = useLocation().pathname === "/";

  const classItem = ({ isActive }) => {
    return clsx(css.item, isActive && css.active, isHome && css.home);
  };

  return (
    <div className={css.mobileContent}>
      <div className={css.authPart}>
        {isLoggedIn ? (
          <React.Fragment>
            <p
              className={clsx(css.userName, isHome && css[theme])}
            >{`Hi, ${userName}`}</p>
            <AuthButton handleClick={onMenuClick}>Logout</AuthButton>
          </React.Fragment>
        ) : (
          <>
            <AuthButton handleClick={onMenuClick}>Log In</AuthButton>
            <RegistrationButton
              handleClick={onMenuClick}
              isSecondary={isHome ? false : true}
            />
            {/* <GoogleButton /> */}
          </>
        )}
      </div>
      <nav className={css.nav}>
        <NavLink className={classItem} to="/" onClick={onMenuClick}>
          Home
        </NavLink>
        <NavLink
          className={classItem}
          to="/psychologists"
          onClick={onMenuClick}
        >
          Psychologists
        </NavLink>
        {isLoggedIn && (
          <NavLink className={classItem} to="/favorites" onClick={onMenuClick}>
            Favorites
          </NavLink>
        )}
      </nav>
    </div>
  );
};

export default AppMobileMenuContent;
