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
        <>
          <span className={css.iconContainer}>
            <svg
              className={clsx(css.icon, css[theme])}
              aria-label="man icon"
              width="40"
              height="40"
            >
              <use href={`${iconsPath}#${"icon-man"}`} />
            </svg>
          </span>
          <p className={css.userName}>{`${userName}`}</p>
          <AuthButton>Logout</AuthButton>
        </>
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
