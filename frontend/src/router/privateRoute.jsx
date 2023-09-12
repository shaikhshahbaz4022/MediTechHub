import { Navigate, useLocation } from "react-router-dom";
const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const token = JSON.parse(localStorage.getItem("userDetails"));
  if (!token) {
    return <Navigate to={"/login"} state={{ from: location }} replace />;
  }
  return children;
};
export default PrivateRoute;
