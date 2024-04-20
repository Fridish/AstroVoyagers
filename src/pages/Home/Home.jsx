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
      </section>
      <Timeline />
    </main>
  );
};

export default Home;
