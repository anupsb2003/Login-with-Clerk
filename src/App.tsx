import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {
  useUser,
  AuthenticateWithRedirectCallback,
} from "@clerk/clerk-react";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";

import "./App.css";

const App: React.FC = () => {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <BrowserRouter>
      <Routes>

        {/* Clerk OAuth Callback */}
        <Route
          path="/sso-callback"
          element={<AuthenticateWithRedirectCallback />}
        />

        {/* Login */}
        <Route
          path="/login"
          element={
            isSignedIn ? (
              <Navigate to="/" replace />
            ) : (
              <Login />
            )
          }
        />

        {/* Signup */}
        <Route
          path="/signup"
          element={
            isSignedIn ? (
              <Navigate to="/" replace />
            ) : (
              <Signup />
            )
          }
        />

        {/* Home */}
        <Route
          path="/"
          element={
            isSignedIn ? (
              <Home />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        {/* If Clerk or old code sends user to /home */}
        <Route
          path="/home"
          element={<Navigate to="/" replace />}
        />

        {/* Unknown routes */}
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />

      </Routes>
    </BrowserRouter>
  );
};

export default App;