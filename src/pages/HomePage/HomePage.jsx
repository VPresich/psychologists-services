import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import IconComponent from "../../components/IconComponent/IconComponent";
import StatisticsItem from "../../components/StatisticsItem/StatisticsItem";
import { selectTheme } from "../../redux/auth/selectors";
import Button from "../../components/UI/Button/Button";
import DocumentTitle from "../../components/DocumentTitle";
import css from "./HomePage.module.css";

export default function HomePage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/psychologists");
  };
  const theme = useSelector(selectTheme);
  return (
    <>
      <DocumentTitle>Home Page</DocumentTitle>
      <section className={css.section}>
        <div className={css.container}>
          <div className={css.content}>
            <div className={css.infoContainer}>
              <h1 className={css.title}>
                The road to the{" "}
                <span className={clsx(css.accent, css[theme])}>depths</span> of
                the human soul.
              </h1>
              <p className={css.text}>
                We help you to reveal your potential, overcome challenges and
                find a guide in your own life with the help of our experienced
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
          </div>
          <div className={css.statistics}>
            <StatisticsItem iconId="icon-check" />
            <div className={css.iconPrimaryWrapper}>
              <IconComponent iconId="icon-question" isPrimary={true} />
            </div>
            <div className={css.iconSecondaryWrapper}>
              <IconComponent iconId="icon-users" isPrimary={false} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
