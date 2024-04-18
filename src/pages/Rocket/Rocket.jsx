import { useParams } from "react-router-dom";
import styles from "./Rocket.module.css";

const Rocket = () => {
  const { id } = useParams();

  return <main className={styles.container}>{id}</main>;
};

export default Rocket;
