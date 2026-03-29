import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";

const App: React.FC = () => {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={isSignedIn ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={!isSignedIn ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/signup"
          element={!isSignedIn ? <Signup /> : <Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;