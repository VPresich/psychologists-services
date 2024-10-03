import React from "react";
import clsx from "clsx";
import iconsPath from "../../assets/img/icons.svg";
import css from "./IconComponent.module.css";

const IconComponent = ({ iconId, isPrimary = true }) => {
  return (
    <React.Fragment>
      {iconId && (
        <span
          className={clsx(
            css.container,
            isPrimary ? css.primary : css.secondary
          )}
        >
          <svg
            className={clsx(css.icon, isPrimary ? css.primary : css.secondary)}
            aria-label={`Icons ${iconId}`}
          >
            <use href={`${iconsPath}#${iconId}`} />
          </svg>
        </span>
      )}
    </React.Fragment>
  );
};
export default IconComponent;
