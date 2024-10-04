import { useSelector } from "react-redux";
import clsx from "clsx";
import iconsPath from "../../assets/img/icons.svg";
import { selectTheme } from "../../redux/auth/selectors";
import css from "./StatisticsItem.module.css";

const StatisticsComponent = ({ iconId }) => {
  const theme = useSelector(selectTheme);
  return (
    <div className={clsx(css.container, css[theme])}>
      <div className={css.iconContainer}>
        <svg
          className={clsx(css.icon, css[theme])}
          aria-label={"check box icon"}
        >
          <use href={`${iconsPath}#${iconId}`} />
        </svg>
      </div>
      <div className={css.textContainer}>
        <span className={css.description}>Experienced psychologists</span>
        <span className={css.value}> 15,000</span>
      </div>
    </div>
  );
};
export default StatisticsComponent;
