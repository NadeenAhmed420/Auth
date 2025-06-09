// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import TutorialDetails from "./pages/TutorialDetails";
import ErrorBoundary from "./pages/ErrorBoundary";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            <ErrorBoundary>
              <Dashboard />
            </ErrorBoundary>
          }
        />
        <Route path="/tutorials/:id" element={<TutorialDetails />} /> ✅ Dynamic
        route
        <Route path="*" element={<Login />} /> {/* fallback route */}
      </Routes>
    </Router>
  );
};

export default App;
