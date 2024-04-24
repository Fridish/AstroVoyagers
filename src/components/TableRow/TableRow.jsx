import Typography from "@components/Typography/Typography";
import styles from "./TableRow.module.css";

const TableRow =({type, value, ...props}) => {
return (
<section {...props} className={styles.tableRow}>
    <Typography variant="p" > {type} </Typography>
    <Typography style={{color:'var(--yellow)' }} > {value}</Typography>
 </section>
);
}
export default TableRow