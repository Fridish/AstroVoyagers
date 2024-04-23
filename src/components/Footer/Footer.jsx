import Typography from "@components/Typography/Typography";
import styles from "./Footer.module.css";
import { List } from "@components/Nav/Nav";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <Typography size="lg">Astro Voyagers</Typography>
        <Typography size="lg" style={{ color: "var(--grey)" }}>
          {new Date().getFullYear()}
        </Typography>
      </div>
      <div>
        <List />
      </div>
    </footer>
  );
};

export default Footer;
