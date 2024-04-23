import { useParams } from "react-router-dom";
import styles from "./Rocket.module.css";
import RocketIds from "../../lib/Rocket.js";
import useFetch from "@hooks/useFetch";
import Typography from "@components/Typography/Typography";
import TableRow from "@components/TableRow/TableRow";
import Carousel from "@components/Carousel/Carousel";
import Counter from "@components/Counter/Counter";

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
  
return <main className={styles.container}>
    
{ rocketData ? 
  <div>
   {/*  hero section */}
    <section className= {styles.hero}> 
    <Typography variant="h1" style={{ fontSize: '2.25rem', fontFamily: 'porter-sans'}}> {rocketData.name} </Typography>
    <img className={styles.heroBackground}  src={ RocketIds[rocket].hero } alt={"Hero img of " [rocketData.name]} />
    </section>

  <section className={styles.contentContainer}>

 {/*  weight, height, diameter */}
 <div className={styles.details}>
    <section className={styles.RocketDetails}>
        <Counter value={rocketData.height.meters} unit="meters" />
        <Counter value={rocketData.diameter.meters} unit="meters" />
        <Counter value={rocketData.mass.kg} unit="kg" />
    </section>

    <section className={styles.description}>
    <Typography variant="p" style={{ fontFamily: 'inter', color: 'white'}} > {rocketData.description} </Typography>
    </section>

    {/* tables with all stages, engines and payload weights */}
<Carousel> 
    <section className={styles.description}>
      <Typography variant="h2" style={{ fontFamily: 'inter', color: 'white', fontWeight: 400, marginBottom: 'var(  --p-md)'}} > First Stage </Typography>
      <div className={styles.specsContainer}> 
        <TableRow type= "Thrust at Sea Level" value={rocketData.first_stage.thrust_sea_level.kN + " kN"}/>
        <TableRow type="Thrust Vacuum" value={rocketData.first_stage.thrust_vacuum.kN + " kN"}/>
        <TableRow type="Reusable" value={rocketData.first_stage.reusable ? "true" : "false"}/>
        <TableRow type="Engines" value={rocketData.first_stage.engines}/>
        <TableRow type="Fuel" value={rocketData.first_stage.fuel_amount_tons + " ton"}/>
        <TableRow type="Burn Time" value={rocketData.first_stage.burn_time_sec + "s"}/>
       </div>
    </section>

    <section className={styles.description}>
    <Typography variant="h2" style={{ fontFamily: 'inter', color: 'white', fontWeight: 400, marginBottom: 'var(  --p-md)'}} > Second Stage </Typography>
    <div> 
        <TableRow type= "Thrust" value={rocketData.second_stage.thrust.kN + " kN"}/>
        <TableRow type="Reusable" value={rocketData.second_stage.reusable ? "true" : "false"}/>
        <TableRow type="Engines" value={rocketData.second_stage.engines}/>
        <TableRow type="Fuel" value={rocketData.second_stage.fuel_amount_tons + " ton"}/>
        <TableRow type="Burn Time" value={rocketData.second_stage.burn_time_sec + "s"}/>
       </div>
    </section>
    <section>
    <Typography variant="h2" style={{ fontFamily: 'inter', color: 'white', fontWeight: 400,marginBottom: 'var(  --p-md)'}} > Engines </Typography>
    <div>      
       <TableRow type='Type' value={rocketData.engines.type } ></TableRow>
       <TableRow type='Number' value={rocketData.engines.number}></TableRow>
       <TableRow type='Layout' value={rocketData.engines.layout}></TableRow>
       <TableRow type='Propellant 1' value={rocketData.engines.propellant_1}> </TableRow>
       <TableRow type='Propellant 2' value={rocketData.engines.propellant_2}></TableRow>
       </div>
       </section>


    <section className={styles.description}>
    <Typography variant="h2" style={{ fontFamily: 'inter', color: 'white', fontWeight: 400, marginBottom: 'var(  --p-md)'}} > Payload Weights </Typography>
    <div>
      {rocketData.payload_weights.map((item, index) => (
      <div key={index}>
        <Typography variant="h6">{item.id}</Typography>
        <TableRow type={item.name} value={item.kg + " kg"}/>
       </div>
        ))}
        </div>
    </section>
    </Carousel>

    {/* Images carousel */}
    <Typography variant="h2" style={{ fontWeight: 400, marginBottom: 'var(  --p-md)' }} > Images </Typography>
    <Carousel className={styles.carousel} >{rocketData.flickr_images.map( image => (
      <img key={image} src={image} className={styles.image} />    
    ))}</Carousel>
    </div>
    </section>
  </div>
  : null
  }
</main>;
};

export default Rocket;
