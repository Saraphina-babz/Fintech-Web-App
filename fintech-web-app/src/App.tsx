import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import UserOverview from "./components/UserOverview";
import LoanManagement from "./components/LoanManagement";
import TransactionHistory from "./components/TransactionHistory";

import Navbar from "./components/Navbar";

const App: React.FC = () => {
  return (
    <AppProvider>
      <Router>
        <div
          className="min-h-screen bg-cover bg-center"
          style={{ backgroundImage: "url('./assets/fin.jpg')" }}
        >
          <Navbar />
          <Routes>
            <Route path="/" element={<UserOverview />} />
            <Route path="/loan-management" element={<LoanManagement />} />
            <Route
              path="/transaction-history"
              element={<TransactionHistory />}
            />
          </Routes>
        </div>
      </Router>
    </AppProvider>
  );
};

export default App;
