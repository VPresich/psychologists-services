import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { errNotify } from "../../../auxiliary/notification/notification";
import { ERR_LOGIN } from "../Forms/constants";
import { selectIsLoggedIn } from "../../../redux/auth/selectors";
import ModalWrapper from "../../UI/ModalWrapper/ModalWrapper";
import LoginForm from "../Forms/LoginForm/LoginForm";
import { logOut, logIn } from "../../../redux/auth/operations";
import Button from "../../UI/Button/Button";
import css from "./AuthButton.module.css";

export default function AuthButton({ children, handleClick, ...props }) {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const handleButton = () => {
    if (isLoggedIn) {
      dispatch(logOut());
      handleClick && handleClick();
    } else {
      setShowLoginForm(true);
    }
  };

  const handleLogin = (values) => {
    dispatch(logIn(values))
      .unwrap()
      .then(() => {
        setShowLoginForm(false);
        handleClick && handleClick();
      })
      .catch(() => {
        errNotify(ERR_LOGIN);
      });
  };

  const handleCloseLogin = () => {
    setShowLoginForm(false);
  };

  return (
    <React.Fragment>
      <Button
        onClick={handleButton}
        isSecondary={true}
        btnAuxStyles={css.btnAuxStyles}
        {...props}
      >
        {children}
      </Button>
      {showLoginForm && (
        <ModalWrapper onClose={handleCloseLogin}>
          <LoginForm handleLogin={handleLogin} />
        </ModalWrapper>
      )}
    </React.Fragment>
  );
}
