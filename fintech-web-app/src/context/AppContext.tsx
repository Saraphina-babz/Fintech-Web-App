import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
    name: string;
    accountBalance: number;
    recentTransactions: { date: string; amount: number; type: 'credit' | 'debit' }[];
}

interface Loan {
    id: number;
    amount: number;
    tenure: number;
    purpose: string;
    status: 'active' | 'completed';
}

interface Transaction {
    date: string;
    amount: number;
    type: 'credit' | 'debit';
}

interface AppContextType {
    user: User | null;
    loans: Loan[];
    transactions: Transaction[];
    setLoans: React.Dispatch<React.SetStateAction<Loan[]>>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loans, setLoans] = useState<Loan[]>([]);
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        const fetchUser = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users/1'); 
            const data: User = await response.json();
            setUser({ ...data, accountBalance: 1000, recentTransactions: transactions });
        };

        const fetchTransactions = async () => {
            const data: Transaction[] = [
                { date: '2025-01-01', amount: 200, type: 'credit' },
                { date: '2025-01-02', amount: 150, type: 'debit' },
                { date: '2025-01-03', amount: 300, type: 'credit' },
                { date: '2024-12-31', amount: 250, type: 'debit' },
            ];
            setTransactions(data);
        };

        const fetchLoans = async () => {
            const data: Loan[] = [
                { id: 1, amount: 5000, tenure: 12, purpose: 'Car', status: 'active' },
                { id: 2, amount: 2000, tenure: 6, purpose: 'Home Improvement', status: 'completed' },
            ];
            setLoans(data);
        };

        fetchTransactions().then(() => {
            fetchUser();
        });
        fetchLoans();
    }, []);

    return (
        <AppContext.Provider value={{ user, loans, transactions, setLoans }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};
