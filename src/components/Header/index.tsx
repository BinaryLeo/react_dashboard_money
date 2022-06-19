import {Container, Content} from './styles';
import logo from '../../assets/logo.svg';
export function Header(){
    return (
        <Container>
            <Content>

            <img src={logo} alt="dashbard money logo"/>
           <button type="button">New Transaction</button>
            </Content>
       
        </Container>
    );
}