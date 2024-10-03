import VertSeparator from "../UI/VertSeparator/VertSeparator";
import iconsPath from "../../assets/img/icons.svg";
import formatNumber from "../../auxiliary/formatNumber";

import css from "./CardFeatures.module.css";

export default function CardFeatures({ psychologist }) {
  const { rating, price_per_hour } = psychologist;
  return (
    <div className={css.container}>
      <div className={css.feature}>
        <svg className={css.iconContainer} aria-label="star icon">
          <use className={css.iconStar} href={`${iconsPath}#icon-star`} />
        </svg>
        <span className={css.featureTitle}>Rating:</span>
        <span className={css.featureValue}>{formatNumber(rating)}</span>
        <VertSeparator />
      </div>

      <div className={css.feature}>
        <span className={css.featureTitle}>Price / 1 hour:</span>
        <span className={css.price}>{price_per_hour}$</span>
      </div>
    </div>
  );
}
