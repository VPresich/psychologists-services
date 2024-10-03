import { useSelector } from "react-redux";
import { selectTheme } from "../../../redux/auth/selectors";
import css from "./Button.module.css";
import clsx from "clsx";

const Button = ({
  children,
  onClick,
  btnAuxStyles,
  isSecondary = false,
  ...props
}) => {
  const theme = useSelector(selectTheme);
  return (
    <button
      className={clsx(
        css.btn,
        css[theme],
        isSecondary ? css.secondary : css.primary,
        btnAuxStyles && btnAuxStyles
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
