import React from "react";
import { useAppContext } from "../context/AppContext";

const UserOverview: React.FC = () => {
  const { user } = useAppContext();

  return (
    <div className="pt-12">
      <h1 className="text-2xl text-white font-bold mb-4">Welcome Back</h1>
      {user ? (
        <>
          <p className="text-white">Name: {user.name}</p>
          <p className="text-white">Account Balance: ${user.accountBalance}</p>
          <h2 className="text-lg mt-4 userh2">
            This is your recent transactions
          </h2>
          {user.recentTransactions && user.recentTransactions.length > 0 ? (
            <ul>
              {user.recentTransactions.slice(0, 5).map((tx, index) => (
                <li key={index}>
                  {tx.date} - ${tx.amount} ({tx.type})
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-white">No recent transactions found.</p>
          )}
        </>
      ) : (
        <p className="text-white">Loading user data...</p>
      )}
    </div>
  );
};

export default UserOverview;
