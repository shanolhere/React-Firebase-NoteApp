import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
// import { useAuth } from "../firebase-config";

const ProtectedRoute = ({ userName }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (userName) {
      <Outlet />;
    } else {
      navigate("/login");
    }
  }, []);

  return userName ? <Outlet /> : navigate("/login");
};

export default ProtectedRoute;
