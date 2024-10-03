import { useSelector } from "react-redux";
import { selectTheme } from "../../../redux/auth/selectors";
import iconsPath from "../../../assets/img/icons.svg";
import css from "./Button.module.css";
import clsx from "clsx";

const Button = ({
  children,
  onClick,
  btnAuxStyles,
  isSecondary = false,
  iconId = "",
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
      <span className={css.btnContent}>
        {children}
        {iconId && (
          <span className={css.iconContainer}>
            <svg className={clsx(css.icon)} aria-label={`Icons ${iconId}`}>
              <use href={`${iconsPath}#${iconId}`} />
            </svg>
          </span>
        )}
      </span>
    </button>
  );
};

export default Button;
