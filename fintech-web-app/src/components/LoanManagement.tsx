// src/components/LoanManagement.tsx
import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';

const LoanManagement: React.FC = () => {
    const { loans, setLoans } = useAppContext();
    const [newLoan, setNewLoan] = useState({ amount: '', tenure: '', purpose: '' });
    const [error, setError] = useState<string>('');

    const handleLoanRequest = () => {
        const { amount, tenure, purpose } = newLoan;
        if (!amount || !tenure || !purpose) {
            setError('All fields are required');
            return;
        }
        setLoans([...loans, { id: loans.length + 1, amount: Number(amount), tenure: Number(tenure), purpose, status: 'active' }]);
        setNewLoan({ amount: '', tenure: '', purpose: '' });
        setError('');
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Loan Management</h1>
            <h2 className="text-lg">Active Loans</h2>
            <ul>
                {loans.filter(loan => loan.status === 'active').map(loan => (
                    <li key={loan.id}>Loan Amount: ${loan.amount}, Tenure: {loan.tenure} months</li>
                ))}
            </ul>
            <h2 className="text-lg mt-4">Request a New Loan</h2>
            <input type="number" placeholder="Amount" value={newLoan.amount} onChange={e => setNewLoan({ ...newLoan, amount: e.target.value })} className="border p-2 mr-2" />
            <input type="number" placeholder="Tenure" value={newLoan.tenure} onChange={e => setNewLoan({ ...newLoan, tenure: e.target.value })} className="border p-2 mr-2" />
            <input type="text" placeholder="Purpose" value={newLoan.purpose} onChange={e => setNewLoan({ ...newLoan, purpose: e.target.value })} className="border p-2 mr-2" />
            <button onClick={handleLoanRequest} className="bg-blue-500 text-white px-4 py-2">Request Loan</button>
            {error && <p className="text-red-500">{error}</p>}
        </div>
    );
};

export default LoanManagement;
