import Reviewers from "../Reviewers/Reviewers";
import css from "./CardDetails.module.css";

const CardDetails = ({ psychologist }) => {
  const { reviews } = psychologist;
  return (
    <div className={css.container}>
      <Reviewers reviews={reviews} />
    </div>
  );
};

export default CardDetails;
