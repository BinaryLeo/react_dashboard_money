import {useEffect} from "react"
import { Container } from "./styles";

export function TransactionsTable(){
useEffect(()=>{
fetch('http://localhost:3000/api/transactions')
.then(response=>response.json())
.then(data=>console.log(data))
},[]);
    return(
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
          <tr>
            <td>Website development</td>
            <td className="deposit">$ 5.000,00</td>
            <td>Front-end</td>
            <td>01/01/2022</td>
          </tr>
          <tr>
            <td>Trainning costs</td>
            <td className="withdraw">- $ 2.000,00</td>
            <td>Front-end</td>
            <td>01/01/2022</td>
          </tr>
          
        </tbody>
    </table>
</Container>
    );
}