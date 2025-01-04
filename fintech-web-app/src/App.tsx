// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import UserOverview from './components/UserOverview';
import LoanManagement from './components/LoanManagement';
import TransactionHistory from './components/TransactionHistory';

const App: React.FC = () => {
    return (
        <AppProvider>
            <Router>
                <div className="p-4">
                    <nav className="mb-4">
                        <Link to="/" className="mr-4">User Overview</Link>
                        <Link to="/loan-management" className="mr-4">Loan Management</Link>
                        <Link to="/transaction-history">Transaction History</Link>
                    </nav>
                    <Routes>
                        <Route path="/" element={<UserOverview />} />
                        <Route path="/loan-management" element={<LoanManagement />} />
                        <Route path="/transaction-history" element={<TransactionHistory />} />
                    </Routes>
                </div>
            </Router>
        </AppProvider>
    );
};

export default App;
