import Timeline from "@components/Timeline/Timeline";
import styles from "./Home.module.css";
import Button from "@components/Button/Button";

const Home = () => {
  return (
    <main className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.canvas}>Astro Vayagers</div>
      </section>
      <Timeline />
    </main>
  );
};

export default Home;
