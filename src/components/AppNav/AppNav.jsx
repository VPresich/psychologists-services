import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import clsx from "clsx";
import { selectIsLoggedIn, selectTheme } from "../../redux/auth/selectors";
import css from "./AppNav.module.css";

const classItem = ({ isActive }, theme) => {
  return clsx(css.item, isActive && css.active, isActive && css[theme]);
};

export default function AppNav() {
  const theme = useSelector(selectTheme);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav className={css.nav}>
      <NavLink className={(props) => classItem(props, theme)} to="/">
        Home
      </NavLink>
      <NavLink
        className={(props) => classItem(props, theme)}
        to="/psychologists"
      >
        Psychologists
      </NavLink>
      {isLoggedIn && (
        <NavLink className={(props) => classItem(props, theme)} to="/favorites">
          Favorites
        </NavLink>
      )}
    </nav>
  );
}
