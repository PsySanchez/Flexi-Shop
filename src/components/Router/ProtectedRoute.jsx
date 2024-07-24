import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { checkAuth } from "../../actions/authAction";
import { useEffect } from "react";

export default function ProtectedRoute({ children }) {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);
  const isLoading = useSelector((state) => state.auth.isLoading);

  useEffect(() => {
    // check if user is logged in
    dispatch(checkAuth());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    // Redirect to login page
    return <Navigate to="/login" replace />;
  }
  return children;
}
