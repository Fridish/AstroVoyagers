import useFetch from "@hooks/useFetch";
import styles from "./Home.module.css";

const Home = () => {
  const { data } = useFetch(
    "https://api.spacexdata.com/v4/rockets/5e9d0d95eda69974db09d1ed"
  );

  return (
    <main className={styles.container}>
      <section className={styles.hero}>Hero</section>
      <section className={styles.timeline}>
        {Array.isArray(data) &&
          data.map((item) => (
            <div style={{ margin: "1rem 0" }} key={item.id}>
              <p>{item.title}</p>
              <p>{item.event_date_utc}</p>
              <p>{item.details}</p>
            </div>
          ))}
      </section>
    </main>
  );
};

export default Home;
