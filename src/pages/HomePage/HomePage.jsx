import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import HomeImage from "../../components/HomeImage/HomeImage";
import StatisticsItem from "../../components/StatisticsItem/StatisticsItem";
import { selectTheme } from "../../redux/auth/selectors";
import Button from "../../components/UI/Button/Button";
import DocumentTitle from "../../components/DocumentTitle";
import css from "./HomePage.module.css";

export default function HomePage() {
  const theme = useSelector(selectTheme);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/psychologists");
  };

  return (
    <React.Fragment>
      <DocumentTitle>Home Page</DocumentTitle>
      <section className={clsx(css.section, css[theme])}>
        <div className={css.container}>
          <div className={css.infoContainer}>
            <h1 className={css.title}>
              The road to the{" "}
              <span className={clsx(css.accent, css[theme])}>depths</span> of
              the human soul.
            </h1>
            <p className={css.text}>
              We help you to reveal your potential, overcome challenges and find
              a guide in your own life with the help of our experienced
              psychologists
            </p>
            <Button
              iconId="icon-arrow"
              btnAuxStyles={css.btnAuxStyles}
              onClick={handleClick}
            >
              Get started
            </Button>
          </div>
          <div className={css.imgContainer}>
            <HomeImage />
            <div className={css.statisticsContainer}>
              <StatisticsItem iconId="icon-check" />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
