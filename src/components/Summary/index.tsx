import {useContext} from "react";
import IncomeImage from '../../assets/incomes.svg';
import OutcomeImage from '../../assets/outcome.svg';
import DolarImage from '../../assets/dolar.svg';
import { Container} from "./styles";
import { TransactionsContext } from "../../TransactionsContext";

export function Summary(){
  const {transactions} = useContext(TransactionsContext);
 

  const summary =  transactions.reduce((acc,transaction)=>{
   if(transaction.type === 'deposit'){
      acc.deposits += transaction.amount;
      acc.total += transaction.amount;
    }
   else{
      acc.withdraw += transaction.amount;
      acc.total -= transaction.amount;
   }
    return acc;

  },{deposits:0, withdraw:0,total:0})

    return (
     <Container>
        <div>
            <header>
              <p>Incomes</p>
              <img src={IncomeImage} alt="incomes"/>
            </header>
            <strong>
            {new Intl.NumberFormat('en-CA',{
                style: 'currency',
                currency: 'CAD',
                minimumFractionDigits: 2
              }).format(summary.deposits)}
              </strong>
        </div>
        <div>
            <header>
              <p>Outcome</p>
              <img src={OutcomeImage} alt="outcome"/>
            </header>
            <strong> -{new Intl.NumberFormat('en-CA',{
                style: 'currency',
                currency: 'CAD',
                minimumFractionDigits: 2
              }).format(summary.withdraw)}</strong>
        </div>
        <div className='highlight'>
            <header>
              <p>Total</p>
              <img src={DolarImage} alt="total"/>
            </header>
            <strong> {new Intl.NumberFormat('en-CA',{
                style: 'currency',
                currency: 'CAD',
                minimumFractionDigits: 2
              }).format(summary.total)}</strong>
        </div>
     </Container>
    );
}