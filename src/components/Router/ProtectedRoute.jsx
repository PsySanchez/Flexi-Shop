import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ProtectedRoute({ children }) {
  const user = useSelector((state) => state.auth.user);

  if (!user) {
    // Redirect to login page
    return <Navigate to="/login" replace />;
  }
  return children;
}
