import { lazy } from "react";
import {Route, BrowserRouter, Routes} from "react-router-dom";

const Home = lazy(() => import("./pages/Home/Home"))
const Rocket = lazy(() => import("./pages/Rocket/Rocket"))

const App = ({}) => {
  return(
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/:id" element={<Rocket/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
