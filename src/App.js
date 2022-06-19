import { AllRoutes } from "./Components/AllRoutes";
import SmallWithSocial from "./Components/Footer";
import Navbar2 from "./Components/Navbar2";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Navbar2 />
      <br></br>
      <AllRoutes />
      <SmallWithSocial />
    </div>
  );
}
