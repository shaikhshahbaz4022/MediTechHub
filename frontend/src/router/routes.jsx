import { Route, Routes } from "react-router-dom";
import { Navbar } from "../Components/navbar";
function Routing() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />} />
      </Routes>
    </div>
  );
}
export default Routing;
