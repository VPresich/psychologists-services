import { useSelector } from "react-redux";
import clsx from "clsx";
import { selectTheme } from "../../redux/auth/selectors";
import css from "./Logo.module.css";

export default function Logo() {
  const theme = useSelector(selectTheme);
  return (
    <div className={css.logoContainer}>
      <span className={clsx(css.logoAccent, css[theme])}>psychologists</span>
      <span className={clsx(css.logoPoint, css[theme])}>.</span>
      <span className={css.logoText}>services</span>
    </div>
  );
}
