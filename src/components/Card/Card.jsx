import { useState } from "react";
import CardFeatures from "../CardFeatures/CardFeatures";
import CardDetails from "../CardDetails/CardDetails";
import FavoriteButton from "../../components/UI/FavoriteButton/FavoriteButton";
import KindList from "../KindList/KindList";
import EllipsisText from "../../components/UI/EllipsisText/EllipsisText";
import Button from "../UI/Button/Button";
import ModalWrapper from "../UI/ModalWrapper/ModalWrapper";
import MakeAppoitmentFormContent from "../MakeAppoitmentFormContent/MakeAppoitmentFormContent";
import Image from "../UI/Image/Image";
import css from "./Card.module.css";

export default function Card({ psychologist }) {
  const {
    _id,
    name,
    about,
    avatar_url,
    experience,
    license,
    specialization,
    initial_consultation,
  } = psychologist;
  const [showModal, setShowModal] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const kinds = [
    { title: "Experience: ", value: experience },
    { title: "License: ", value: license },
    { title: "Specialization: ", value: specialization },
    {
      title: "Initial consultation: ",
      value: initial_consultation,
    },
  ];

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleShowDetails = () => {
    setShowDetails(!showDetails);
  };

  const handleValues = () => {
    setShowModal(false);
    setShowDetails(false);
  };

  return (
    <div className={css.container}>
      <Image imgUrl={avatar_url} name="Psychologist photo" />
      <div className={css.infoWrapper}>
        <div className={css.firstLine}>
          <div className={css.nameWrapper}>
            <span className={css.label}>Psychologist</span>
            <p className={css.name}>{name} </p>
          </div>
          <CardFeatures psychologist={psychologist} />
          <div className={css.favoriteContainer}>
            <FavoriteButton id={_id} />
          </div>
        </div>

        <div className={css.mainInfo}>
          <KindList kinds={kinds} />

          <div className={css.descrWrapper}>
            <EllipsisText
              text={about}
              maxLines={5}
              className={css.description}
            />
          </div>
        </div>
        {!showDetails && (
          <span className={css.readMore} onClick={handleShowDetails}>
            Read more
          </span>
        )}
        <div
          className={
            showDetails
              ? `${css.details} ${css.visible}`
              : `${css.details} ${css.hidden}`
          }
        >
          <CardDetails psychologist={psychologist} />
        </div>

        <div
          className={
            showDetails
              ? `${css.details} ${css.visible}`
              : `${css.details} ${css.hidden}`
          }
        >
          <Button onClick={handleClick} btnAuxStyles={css.btnAuxStyles}>
            Make an appointment
          </Button>
        </div>
      </div>
      {showModal && (
        <ModalWrapper onClose={handleClose}>
          <MakeAppoitmentFormContent
            psychologist={psychologist}
            handleValues={handleValues}
          />
        </ModalWrapper>
      )}
    </div>
  );
}
