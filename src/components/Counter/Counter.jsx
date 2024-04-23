import Typography from "@components/Typography/Typography";
import styles from "./Counter.module.css";
const Counter = ({value, unit}) => {
return (
    <div className={styles.container}>
        <Typography variant="h2">{value}</Typography>
        <Typography variant="p">{unit}</Typography>
    </div>
)
}
export default Counter; 