import React from "react";
import { useSelector } from "react-redux";
import clsx from "clsx";
import {
  selectIsLoggedIn,
  selectUserName,
  selectTheme,
} from "../../../redux/auth/selectors";
import AuthButton from "../AuthButton/AuthButton";
import RegistrationButton from "../RegistrationButton/RegistrationButton";
import iconsPath from "../../../assets/img/icons.svg";
// import GoogleButton from "../GoogleBtn/GoogleBtn";

import css from "./AuthMenu.module.css";

const AuthMenu = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userName = useSelector(selectUserName);
  const theme = useSelector(selectTheme);

  return (
    <div className={css.authPart}>
      {isLoggedIn ? (
        <React.Fragment>
          <span className={clsx(css.iconContainer, css[theme])}>
            <svg
              className={css.icon}
              aria-label="user icon"
              width="24"
              height="24"
            >
              <use href={`${iconsPath}#icon-user`} />
            </svg>
          </span>
          <p className={css.userName}>{`${userName}`}</p>
          <AuthButton>Logout</AuthButton>
        </React.Fragment>
      ) : (
        <>
          <AuthButton>Log In</AuthButton>
          <div className={css.btnsWrapper}>
            <RegistrationButton />
            {/* <GoogleButton /> */}
          </div>
        </>
      )}
    </div>
  );
};

export default AuthMenu;
