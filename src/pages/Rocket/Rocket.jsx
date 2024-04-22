import { useParams } from "react-router-dom";
import styles from "./Rocket.module.css";
import RocketIds from "../../lib/Rocket.js";
import useFetch from "@hooks/useFetch";
import Typography from "@components/Typography/Typography";

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
    <Typography variant="h1" style={{ fontFamily: 'porter-sans'}}> {rocketData.name} </Typography>
    <video className={styles.heroBackground} autoPlay loop muted src={ RocketIds[rocket].hero || ""} alt={rocketData.name} />
    <img className={styles.heroBackground}  src={ RocketIds[rocket].hero } alt={"Hero img of " [rocketData.name]} />
    </section>

 {/*  weight, height, diameter */}
 <div className={styles.details}>
    <section className={styles.RocketDetails}>
      <Typography variant="h2" style={{ fontFamily: 'inter', color: 'white'}}>{rocketData.height.meters}meters </Typography>
      <Typography variant="h2" style={{ fontFamily: 'inter', color: 'white'}}>{rocketData.height.meters}meters </Typography>
      <Typography variant="h2" style={{ fontFamily: 'inter', color: 'white'}}>{rocketData.height.meters}kg </Typography>
    </section>

    <section className={styles.description}>
    <Typography variant="p" style={{ fontFamily: 'inter', color: 'white'}} > {rocketData.description} </Typography>
    </section>

    {/* tables with all stages, engines and payload weights */}

    <section className={styles.description}>
      <Typography variant="h2" style={{ fontFamily: 'inter', color: 'white'}} > First Stage </Typography>
      <div>
       <Typography variant="p" style={{ fontFamily: 'inter', color: 'white'}} > Thrust at Sea Level {rocketData.first_stage.thrust_sea_level.kN } kn</Typography>
       <Typography variant="p" style={{ fontFamily: 'inter', color: 'white'}} > Thrust Vacuum {rocketData.first_stage.thrust_vacuum.kN} kn</Typography>
       <Typography variant="p" style={{ fontFamily: 'inter', color: 'white'}} > Reusable: {rocketData.first_stage.reusable ? "true" : "false"}</Typography>
       <Typography variant="p" style={{ fontFamily: 'inter', color: 'white'}} > Engines: {rocketData.first_stage.engines}</Typography>
       <Typography variant="p" style={{ fontFamily: 'inter', color: 'white'}} > Fuel: {rocketData.first_stage.fuel_ammount_tons} </Typography>
       <Typography variant="p" style={{ fontFamily: 'inter', color: 'white'}} > Burn Time: {rocketData.first_stage.burn_time_sec}s</Typography>
       </div>
    </section>

    <section className={styles.description}>
    <Typography variant="h2" style={{ fontFamily: 'inter', color: 'white'}} > Second Stage </Typography>
    <div>
       <Typography variant="p" style={{ fontFamily: 'inter', color: 'white'}} > Thrust: {rocketData.second_stage.thrust.kN } kn</Typography>
       <Typography variant="p" style={{ fontFamily: 'inter', color: 'white'}} > Reusable: {rocketData.second_stage.reusable ? "true" : "false"}</Typography>
       <Typography variant="p" style={{ fontFamily: 'inter', color: 'white'}} > Engines: {rocketData.second_stage.engines}</Typography>
       <Typography variant="p" style={{ fontFamily: 'inter', color: 'white'}} > Fuel: {rocketData.second_stage.fuel_ammount_tons} </Typography>
       <Typography variant="p" style={{ fontFamily: 'inter', color: 'white'}} > Burn Time: {rocketData.second_stage.burn_time_sec}s</Typography>
       </div>
    </section>

    <section className={styles.description}>
    <Typography variant="h2" style={{ fontFamily: 'inter', color: 'white'}} > Engines </Typography>
    <div>
       <Typography variant="p" style={{ fontFamily: 'inter', color: 'white'}} > Type: {rocketData.engines.type }</Typography>
       <Typography variant="p" style={{ fontFamily: 'inter', color: 'white'}} > Number: {rocketData.engines.number ? "true" : "false"}</Typography>
       <Typography variant="p" style={{ fontFamily: 'inter', color: 'white'}} > Layout: {rocketData.engines.layout}</Typography>
       <Typography variant="p" style={{ fontFamily: 'inter', color: 'white'}} > Propellant 1: {rocketData.engines.propellant_1} </Typography>
       <Typography variant="p" style={{ fontFamily: 'inter', color: 'white'}} > Propellant 2: {rocketData.engines.propellant_2}</Typography>
       </div>
    </section>

    <section className={styles.description}>
    <Typography variant="h2" style={{ fontFamily: 'inter', color: 'white'}} > Payload Weights </Typography>
    <div>
      {rocketData.payload_weights.map((item, index) => (
      <div key={index}>
        <Typography variant="h6">{item.id}</Typography>
        <Typography>Name: {item.name}</Typography>
        <Typography>Kilos: {item.kg}</Typography>
       </div>
        ))}
        </div>
    </section>

    <section>


    <Typography variant="h2" style={{ fontFamily: 'inter', color: 'white'}} > Images </Typography>
      {rocketData.flickr_images.map((image, index) => (
        <img className={styles.image} key={index} src={image} alt={rocketData.name} />))}
    </section>

    </div>
  </div>
  : null
  }
</main>;
};

export default Rocket;
