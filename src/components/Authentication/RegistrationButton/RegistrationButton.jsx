import React, { useState } from "react";
import { errNotify } from "../../../auxiliary/notification/notification";
import { ERR_REGISTRATION } from "../Forms/constants";
import { useDispatch } from "react-redux";
import { register } from "../../../redux/auth/operations";
import ModalWrapper from "../../UI/ModalWrapper/ModalWrapper";
import RegisterForm from "../Forms/RegisterForm/RegisterForm";
import Button from "../../UI/Button/Button";
import css from "./RegistrationButton.module.css";

const RegistrationButton = ({ handleClick }) => {
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const dispatch = useDispatch();

  const handleShowRegister = () => {
    setShowRegisterForm(true);
  };

  const handleCloseRegister = () => {
    setShowRegisterForm(false);
  };

  const handleRegistration = (values) => {
    dispatch(register(values))
      .unwrap()
      .then(() => {
        setShowRegisterForm(false);
        handleClick && handleClick();
      })
      .catch((error) => {
        if (error.includes("409")) {
          errNotify("The user is already registered");
        } else {
          errNotify(ERR_REGISTRATION);
        }
      });
  };

  return (
    <React.Fragment>
      <Button onClick={handleShowRegister} btnAuxStyles={css.btnAuxStyles}>
        Registration
      </Button>
      {showRegisterForm && (
        <ModalWrapper onClose={handleCloseRegister}>
          <RegisterForm handleRegistration={handleRegistration} />
        </ModalWrapper>
      )}
    </React.Fragment>
  );
};

export default RegistrationButton;
