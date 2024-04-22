import { useParams } from "react-router-dom";
import styles from "./Rocket.module.css";
import RocketIds from "../../lib/Rocket.js";
import useFetch from "@hooks/useFetch";

const Rocket = () => {
  const { rocket } = useParams();
   const id = RocketIds[rocket].id;

  const { data: rocketData, isLoading, error } = useFetch(`https://api.spacexdata.com/v4/rockets/${id}`);

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }
  console.log(rocketData);


return <main className={styles.container}>
    
{ rocketData ? 
  <div>
   {/*  hero section */}
    <section className= {styles.hero}> 
    <h1 className={styles.header1}> {rocketData.name} </h1>
    <video className={styles.heroBackground} autoPlay loop muted src={ RocketIds[rocket].hero || ""} alt={rocketData.name} />
    </section>

 {/*  weight, height, diameter */}
    <section className={styles.RocketDetails}>
      <h2> {rocketData.height.meters}meters </h2>
      <h2> {rocketData.diameter.meters}meters</h2>
      <h2> {rocketData.mass.kg}kg</h2>
    </section>

    {/*  description */}
  </div>
  : null
  }
</main>;
};


export default Rocket;
