import { useEffect, useState } from "react";
import { api } from "../../lib/api";
import { Container } from "./styles";
interface Transaction {
  id: number;
  title: string;
  type: string;
  category: string;
  amount: number;
  created_at: string;
}
export function TransactionsTable() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  useEffect(() => {
    api
      .get("/transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
              {new Intl.NumberFormat('en-CA',{
                style: 'currency',
                currency: 'CAD',
                minimumFractionDigits: 2
              }).format(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>{transaction.created_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
