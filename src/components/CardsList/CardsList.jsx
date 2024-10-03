import Card from "../../components/Card/Card";
import css from "./CardsList.module.css";

export default function CardsList({ psychologists }) {
  return (
    <ul className={css.container}>
      {psychologists.map((psychologist) => (
        <li key={psychologist._id}>
          <Card psychologist={psychologist} />
        </li>
      ))}
    </ul>
  );
}
