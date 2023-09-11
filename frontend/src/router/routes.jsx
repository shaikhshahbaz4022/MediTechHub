import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/Homepage";
import Login from "../Pages/Login";
import { RegisterPage } from "../Pages/register";
import { ProductPage } from "../Pages/productPage";
import ParticularProduct from "../Pages/particular";
import { CartPage } from "../Pages/CartPage";

function Routing() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/:productID" element={<ParticularProduct />} />
        <Route path="/cartpage" element={<CartPage />} />
      </Routes>
    </div>
  );
}
export default Routing;
