import Timeline from "@components/Timeline/Timeline";
import styles from "./Home.module.css";
import Typography from "@components/Typography/Typography";
import Rocket from "../../../public/rocket.svg?react";
import Planet2 from "../../../public/planet2.svg?react";
import Planet3 from "../../../public/planet3.svg?react";
import Planet4 from "../../../public/planet4.svg?react";
import Star from "../../../public/star.svg?react";
import Footer from "@components/Footer/Footer";

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

          <Planet4 className={styles.planet4} />
          <Planet2 className={styles.planet2} />
          <Planet3 className={styles.planet3} />

          <Star className={styles.star1} />
          <Star className={styles.star2} />
          <Star className={styles.star3} />

          <div className={styles.rocketContainer}>
            <Rocket className={styles.rocket} />
          </div>
          <div className={styles.rocketContainer2}>
            <Rocket className={styles.rocket2} />
          </div>
        </section>
        <Timeline />
      </main>
      <Footer />
    </>
  );
};

export default Home;
