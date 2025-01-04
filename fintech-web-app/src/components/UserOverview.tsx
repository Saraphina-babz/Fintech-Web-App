// src/components/UserOverview.tsx
import React from 'react';
import { useAppContext } from '../context/AppContext';

const UserOverview: React.FC = () => {
    const { user } = useAppContext();

    return (
        <div className="mb-6">
            <h1 className="text-2xl font-bold mb-4">User Overview</h1>
            {user ? (
                <>
                    <p>Name: {user.name}</p>
                    <p>Account Balance: ${user.accountBalance}</p>
                    <h2 className="text-lg mt-4">Recent Transactions</h2>
                    <ul>
                        {user.recentTransactions.slice(0, 5).map((tx, index) => (
                            <li key={index}>{tx.date} - ${tx.amount} ({tx.type})</li>
                        ))}
                    </ul>
                </>
            ) : (
                <p>Loading user data...</p>
            )}
        </div>
    );
};

export default UserOverview;
