import Typography from "@components/Typography/Typography";
import styles from "./Counter.module.css";

const Counter = ({ value, unit, type }) => {
  return (
    <div className={styles.container}>
      <Typography variant="h2">
        {value} {unit}
      </Typography>
      <Typography variant="p">{type}</Typography>
    </div>
  );
};
export default Counter;
