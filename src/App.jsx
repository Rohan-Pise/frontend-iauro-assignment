import { useEffect, useState } from "react";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Login from "./components/Login.jsx";
import ExManager from "./components/ExManager.jsx";
import Signup from "./components/Signup.jsx";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <>
      <Router>
        <Routes>
          {/* Public Route: Login */}
          <Route
            path="/"
            element={<Login onLoginSuccess={handleLoginSuccess} />}
          />

          {/* Private Route: ExManager */}
          <Route
            path="/dashboard"
            element={isAuthenticated ? <ExManager /> : <Navigate to="/" />} // Navigate to Login if not authenticated
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
