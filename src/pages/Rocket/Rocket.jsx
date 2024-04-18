import { useParams } from "react-router-dom"

const Rocket = ({}) => {
  const { id } = useParams()
  
  return <div>{id}</div>;
};

export default Rocket;