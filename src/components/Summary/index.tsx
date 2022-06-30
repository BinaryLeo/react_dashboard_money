import {useContext} from "react";
import IncomeImage from '../../assets/incomes.svg';
import OutcomeImage from '../../assets/outcome.svg';
import DolarImage from '../../assets/dolar.svg';
import { Container} from "./styles";
import { TransactionsContext } from "../../TransactionsContext";

export function Summary(){
  const {transactions} = useContext(TransactionsContext);
  console.log(transactions);
    return (
     <Container>
        <div>
            <header>
              <p>Incomes</p>
              <img src={IncomeImage} alt="incomes"/>
            </header>
            <strong>$ 5.000,00</strong>
        </div>
        <div>
            <header>
              <p>Outcome</p>
              <img src={OutcomeImage} alt="outcome"/>
            </header>
            <strong>-$ 2000,00</strong>
        </div>
        <div className='highlight'>
            <header>
              <p>Total</p>
              <img src={DolarImage} alt="total"/>
            </header>
            <strong>$ 3000,00</strong>
        </div>
     </Container>
    );
}