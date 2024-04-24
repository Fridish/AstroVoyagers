import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";
import Typography from "@components/Typography/Typography";
import Footer from "@components/Footer/Footer";
import Button from "@components/Button/Button";
import Wallpaper from "@components/Wallpaper/Wallpaper";

const NotFound = () => {
  return (
    <>
      <main className={styles.container}>
        <div className={styles.content}>
          <Typography variant="h2">Page not found</Typography>
          <Typography variant="h1">404</Typography>
          <Button variant="secondary" asChild>
            <Link to={"/"}>Return Home</Link>
          </Button>
        </div>
        <Wallpaper />
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
