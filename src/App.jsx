import { Suspense, lazy } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Nav from "@components/Nav/Nav";

const Home = lazy(() => import("./pages/Home/Home"));
const Rocket = lazy(() => import("./pages/Rocket/Rocket"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading ...</div>}>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rockets/:rocket" element={<Rocket />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
