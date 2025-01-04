// src/components/TransactionHistory.tsx
import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';

const TransactionHistory: React.FC = () => {
    const { transactions } = useAppContext();
    const [filterType, setFilterType] = useState<'all' | 'credit' | 'debit'>('all');
    const filteredTransactions = transactions.filter(tx => filterType === 'all' || tx.type === filterType);

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Transaction History</h1>
            <div className="mb-4">
                <select onChange={e => setFilterType(e.target.value as 'all' | 'credit' | 'debit')} className="border p-2">
                    <option value="all">All Transactions</option>
                    <option value="credit">Credit</option>
                    <option value="debit">Debit</option>
                </select>
            </div>
            <table className="min-w-full border">
                <thead>
                    <tr>
                        <th className="border p-2">Date</th>
                        <th className="border p-2">Amount</th>
                        <th className="border p-2">Type</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredTransactions.map((tx, index) => (
                        <tr key={index}>
                            <td className="border p-2">{tx.date}</td>
                            <td className="border p-2">${tx.amount}</td>
                            <td className="border p-2">{tx.type}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TransactionHistory;
