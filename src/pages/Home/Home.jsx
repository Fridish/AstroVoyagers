import Timeline from "@components/Timeline/Timeline";
import styles from "./Home.module.css";
import Typography from "@components/Typography/Typography";
import Icons from "@components/Icons";

const Home = () => {
  return (
    <main className={styles.container}>
      <section className={styles.hero}>
        <Typography variant="h1" style={{ fontFamily: "porter-sans" }}>
          Astro Voyagers
        </Typography>
        <Typography variant="h5">
          SpaceX History, Rockets and Roadster
        </Typography>

        <Icons
          variant={"planetStripesDots"}
          color="black"
          className={styles.planetStripesDots}
        />
        <Icons
          variant={"planetRing"}
          color="black"
          className={styles.planetRing}
        />
        <div className={styles.gloab} />

        <div className={styles.rocketContainer}>
          <Icons variant={"rocket"} color="black" className={styles.rocket} />
        </div>
        <div className={styles.rocketContainer2}>
          <Icons variant={"rocket2"} color="black" className={styles.rocket2} />
        </div>

        <Icons variant={"star"} color="black" className={styles.star1} />
        <Icons variant={"star"} color="black" className={styles.star2} />
      </section>
      <Timeline />
    </main>
  );
};

export default Home;
