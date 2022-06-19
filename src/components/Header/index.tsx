import {Container} from './styles';
import logo from '../../assets/logo.svg';
export function Header(){
    return (
        <Container>
           <img src={logo} alt="dashbard money logo"/>
           <button type="button">New Transaction</button>
        </Container>
    );
}