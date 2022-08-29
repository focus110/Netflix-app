import { Navigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

const ProtectedRoute = ({ Children }) => {
  const { user } = UserAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return Children;
};

export default ProtectedRoute;
