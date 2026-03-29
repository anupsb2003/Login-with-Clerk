import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useUser, AuthenticateWithRedirectCallback } from "@clerk/clerk-react";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";

const App: React.FC = () => {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <BrowserRouter>
      <Routes>
        {/* CALLBACK */}
        <Route
          path="/sso-callback"
          element={<AuthenticateWithRedirectCallback />}
        />

        {/*  MAIN HOME */}
        <Route
          path="/home"
          element={isSignedIn ? <Home /> : <Navigate to="/login" />}
        />

        {/*  DEFAULT REDIRECT */}
        <Route
          path="/"
          element={<Navigate to="/home" />}
        />

        <Route
          path="/login"
          element={!isSignedIn ? <Login /> : <Navigate to="/home" />}
        />

        <Route
          path="/signup"
          element={!isSignedIn ? <Signup /> : <Navigate to="/home" />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;