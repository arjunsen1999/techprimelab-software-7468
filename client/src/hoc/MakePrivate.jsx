import React from "react";
import { Navigate } from "react-router-dom";

export default function MakePrivate({ children }) {
  const isAuth = false;
  if (!isAuth) {
    return <Navigate to="/login" />;
  }
  return children;
}
