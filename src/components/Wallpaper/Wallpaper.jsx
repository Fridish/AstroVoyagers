import styles from "./Wallpaper.module.css";
import Rocket from "../../../public/rocket.svg?react";
import Planet2 from "../../../public/planet2.svg?react";
import Planet3 from "../../../public/planet3.svg?react";
import Planet4 from "../../../public/planet4.svg?react";
import Star from "../../../public/star.svg?react";

const Wallpaper = () => {
  return (
    <>
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
    </>
  );
};

export default Wallpaper;
