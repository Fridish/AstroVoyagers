import styles from "./Hamburger.module.css";

const Hamburger = ({ ...props }) => {
  return (
    <div role="button" {...props} className={styles.menu}>
      <div />
      <div />
      <div />
    </div>
  );
};

export default Hamburger;
