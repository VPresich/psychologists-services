import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { selectTheme } from "../../redux/auth/selectors";
import css from "./Logo.module.css";

export default function Logo() {
  const theme = useSelector(selectTheme);
  return (
    <Link to="/" className={css.container}>
      <span className={clsx(css.accent, css[theme])}>psychologists</span>
      <span className={clsx(css.point, css[theme])}>.</span>
      <span className={css.text}>services</span>
    </Link>
  );
}
