import { useEffect } from "react";

import { Outlet, useNavigate } from "react-router-dom";

export default function ProtectedAdmin() {
  const navigate = useNavigate();
  const role = localStorage.getItem("roleBycrypt");
  useEffect(() => {
    if ( role !== "admin") {
      navigate("/");
    } 
  });

  return  role === "admin" ? <Outlet/> : null;
}
