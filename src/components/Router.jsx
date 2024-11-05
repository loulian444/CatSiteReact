import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Gallery from "./Gallery";

const Router = () => {
  return (
    <>
      <section>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </section>
    </>
  );
};

export default Router;
