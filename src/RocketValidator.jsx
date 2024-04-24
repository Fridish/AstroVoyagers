import { Navigate, Outlet, useParams } from "react-router-dom";
import RocketIds from "./lib/Rocket";

const RocketValidator = () => {
    const { rocket } = useParams();
    const allowedRockets = Object.keys(RocketIds);
    
    if (rocket && allowedRockets.includes(rocket)) {
        return <Outlet />
    }

    return <Navigate to="/404" replace />
};

export default RocketValidator;