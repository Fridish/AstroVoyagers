import styles from "./Divider.module.css";

const Divider = ({ orientation = "horizontal", size = "sm", color }) => {
  return (
    <div
      style={{ backgroundColor: color }}
      className={`${styles.base} ${styles[orientation]} ${styles[size]}`}
    />
  );
};

export default Divider;
