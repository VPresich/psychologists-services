import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import iconsPath from "../../assets/img/icons.svg";
import { selectTheme } from "../../redux/auth/selectors";
import IconButton from "../../components/UI/IconButton/IconButton";

import DocumentTitle from "../../components/DocumentTitle";
import css from "./HomePage.module.css";

export default function HomePage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/nannies");
  };
  const theme = useSelector(selectTheme);
  return (
    <>
      <DocumentTitle>Home Page</DocumentTitle>
      <section className={css.section}>
        <div className={css.container}>
          <div className={css.info}>
            <div className={css.infoContainer}>
              <h1 className={css.title}>
                The road to the depths of the human soul.
              </h1>
              <p className={css.text}>
                We help you to reveal your potential, overcome challenges and
                find a guide in your own life with the help of our experienced
                psychologists
              </p>
              <IconButton iconId="icon-arrow" onClick={handleClick}>
                Get started
              </IconButton>
            </div>
          </div>
          <div className={css.statistics}>
            <div className={css.statisticItem}>
              <div className={clsx(css.iconContainer, css[theme])}>
                <svg
                  className={clsx(css.checkIcon, css[theme])}
                  aria-label="check box icon"
                >
                  <use href={`${iconsPath}#icon-check`} />
                </svg>
              </div>
              <div className={css.textWrapper}>
                <p className={css.descriptionItem}>Experienced nannies</p>
                <p className={css.valueItem}> 15,000</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
