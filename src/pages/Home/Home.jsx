import Timeline from "@components/Timeline/Timeline";
import styles from "./Home.module.css";
import Typography from "@components/Typography/Typography";
import Footer from "@components/Footer/Footer";
import Wallpaper from "@components/Wallpaper/Wallpaper";

const Home = () => {
  return (
    <>
      <main className={styles.container}>
        <section className={styles.hero}>
          <div className={styles.head}>
            <Typography variant="h1" style={{ fontFamily: "porter-sans" }}>
              Astro
            </Typography>
            <Typography variant="h1" style={{ fontFamily: "porter-sans" }}>
              Voyagers
            </Typography>
            <Typography variant="h5">
              SpaceX History, Rockets and Roadster
            </Typography>
          </div>
          <Wallpaper />
        </section>
        <Timeline />
      </main>
      <Footer />
    </>
  );
};

export default Home;
