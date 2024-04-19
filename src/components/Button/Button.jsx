import Slot from "@components/Slot";
import styles from "./Button.module.css";

const Button = ({ variant = "primary", asChild, ...props }) => {
  const Comp = asChild ? Slot : "button";

  return <Comp {...props} className={`${styles.base} ${styles[variant]}`} />;
};

export default Button;
