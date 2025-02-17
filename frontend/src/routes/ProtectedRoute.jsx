/* eslint-disable react/prop-types */
import { useContext } from "react";
import { authContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, allowedRoles }) {
  const { token, role } = useContext(authContext);

  const isAllowed = allowedRoles.includes(role); //User can access this route based on their roles.
  const accessibleRoute =
    token && isAllowed ? children : <Navigate to={"/login"} replace={true} />;
  return accessibleRoute;
}

export default ProtectedRoute;
