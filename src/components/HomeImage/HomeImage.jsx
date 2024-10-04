import img1x from "../../assets/img/homepage/home-bgr@1x.webp";
import img2x from "../../assets/img/homepage/home-bgr@2x.webp";
import IconComponent from "../IconComponent/IconComponent";
import css from "./HomeImage.module.css";

const HomeImage = () => {
  return (
    <picture className={css.container}>
      <source srcSet={`${img1x} 1x, ${img2x} 2x`} />
      <img className={css.img} src={img1x} alt="Psychologist photo" />
      <div className={css.iconPrimaryWrapper}>
        <IconComponent iconId="icon-question" isPrimary={true} />
      </div>
      <div className={css.iconSecondaryWrapper}>
        <IconComponent iconId="icon-users" isPrimary={false} />
      </div>
    </picture>
  );
};

export default HomeImage;
