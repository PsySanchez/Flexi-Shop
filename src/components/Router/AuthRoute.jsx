import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AuthRoute({ children }) {
  const user = useSelector((state) => state.auth.user);

  if (user) {
    // Redirect to login page
    return <Navigate to="/home" replace />;
  }
  return children;
}
