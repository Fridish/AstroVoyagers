import styles from "./Typography.module.css";

const Typography = ({ variant = "p", size = "md", color, style, ...props }) => {
  const Tag = variant;

  return (
    <Tag
      {...props}
      style={{ color: color, ...style }}
      className={`${styles[variant]} ${styles[size]}`}
    />
  );
};

export default Typography;
