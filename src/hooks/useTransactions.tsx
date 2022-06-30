import {createContext, useEffect, useState, ReactNode, useContext} from 'react';
import { api } from '../lib/api';
import {date,dateOptions} from '../dateOptions'
interface Transaction {
    id: number;
    title: string;
    type: string;
    category: string;
    amount: number;
    created_at: string;
  }

type TransactionInput = Omit<Transaction, 'id' | 'created_at'>;
  interface TransactionsProviderProps { 
    children: ReactNode;
  }
  interface TransactionContextData{
 transactions: Transaction[]; 
 createTransaction:(transaction: TransactionInput)=> Promise<void>;
  }
const TransactionsContext = createContext<TransactionContextData>({} as TransactionContextData);
export function TransactionsProvider({children}: TransactionsProviderProps) {
const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get("/transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);
   async function createTransaction(transactionInput: TransactionInput){
      const response = await api.post("/transactions", {
        ...transactionInput, created_at: date.toLocaleString('en-CA', dateOptions),
      })
       const {transaction} = response.data ;
        setTransactions([...transactions, transaction])// Immutability concept 
    } 
  return (
    <TransactionsContext.Provider value={{transactions, createTransaction}}>
        {children}
    </TransactionsContext.Provider>

    );
    
}
export function useTransactions(){
  const  context = useContext(TransactionsContext)
  return context;
}