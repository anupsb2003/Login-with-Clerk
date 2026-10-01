import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useUser, AuthenticateWithRedirectCallback } from "@clerk/clerk-react";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import './App.css';
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
          path="/Home"
          element={isSignedIn ? <Home /> : <Navigate to="/login" />}
        />

        {/*  DEFAULT REDIRECT */}
        <Route
          path="/"
          element={<Navigate to="/Home" />}
        />

        <Route
          path="/login"
          element={!isSignedIn ? <Login /> : <Navigate to="/Home" />}
        />

        <Route
          path="/signup"
          element={!isSignedIn ? <Signup /> : <Navigate to="/Home" />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;