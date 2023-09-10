import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/Homepage";
import Login from "../Pages/Login";
import { RegisterPage } from "../Pages/register";
import { ProductPage } from "../Pages/productPage";
function Routing() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/products" element={<ProductPage />} />
      </Routes>
    </div>
  );
}
export default Routing;
