import { Routes, Route } from "react-router";
// import { Category } from "../Pages/Caterory"
import { Home } from "../Pages/Home";
import Single from "../Pages/SingleNews";
// import { CategoryDiv } from "./CategoryDiv"

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/id/:id" element={<Single />} />
    </Routes>
  );
};
