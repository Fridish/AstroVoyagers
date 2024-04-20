import styles from "./Timeline.module.css";
import useFetch from "@hooks/useFetch";
import Typography from "@components/Typography/Typography";
import Divider from "@components/Divider/Divider";
import Button from "@components/Button/Button";
import Icons from "@components/Icons";

const planets = ["planetRing", "planetStripesDots", "planetStripes"];

const Timeline = () => {
  const { data, loading } = useFetch("https://api.spacexdata.com/v4/history");

  const formatDate = (date) => {
    const [month, day, year] = new Date(date)
      .toString()
      .split(" ")
      .splice(1, 3);

    return `${year}, ${day} ${month}`;
  };

  const getRandomPlanet = () => {
    const index = Math.floor(Math.random() * planets.length);

    return planets[index];
  };

  if (loading) return <div>Loading</div>;

  return (
    <section className={styles.container}>
      {data &&
        data.map((item, i) => (
          <div className={styles.story} key={item.id}>
            <div className={styles.side}>
              <div>
                <Icons
                  width={"100%"}
                  height={"100%"}
                  variant={getRandomPlanet()}
                />
              </div>
              {i < data.length - 1 && (
                <Divider
                  orientation={"vertical"}
                  size={"md"}
                  color={"var(--yellow)"}
                />
              )}
            </div>
            <div className={styles.content}>
              <div>
                <Typography variant="h3">{item.title}</Typography>
                <Typography color={"var(--grey)"} size={"sm"}>
                  {formatDate(item.event_date_utc)}
                </Typography>
              </div>
              <Typography size={"md"}>{item.details}</Typography>
              <Button variant="outlined" asChild>
                <a
                  href={item.links.article}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read more
                </a>
              </Button>
            </div>
          </div>
        ))}
    </section>
  );
};

export default Timeline;