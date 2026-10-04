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

  // Wait until Clerk finishes checking authentication
  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <BrowserRouter>
      <Routes>

        {/* Clerk OAuth / SSO Callback */}
        <Route
          path="/sso-callback"
          element={<AuthenticateWithRedirectCallback />}
        />

        {/* Login */}
        <Route
          path="/login"
          element={
            isSignedIn ? <Navigate to="/Home" replace /> : <Login />
          }
        />

        {/* Signup */}
        <Route
          path="/signup"
          element={
            isSignedIn ? <Navigate to="/Home" replace /> : <Signup />
          }
        />

        {/* Protected Home */}
        <Route
          path="/Home"
          element={
            isSignedIn ? <Home /> : <Navigate to="/login" replace />
          }
        />

        {/* Default */}
        <Route
          path="/"
          element={
            <Navigate
              to={isSignedIn ? "/Home" : "/login"}
              replace
            />
          }
        />

        {/* Unknown routes */}
        <Route
          path="*"
          element={
            <Navigate
              to={isSignedIn ? "/Home" : "/login"}
              replace
            />
          }
        />

      </Routes>
    </BrowserRouter>
  );
};

export default App;