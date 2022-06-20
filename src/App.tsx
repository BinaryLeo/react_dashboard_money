import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import './styles/directives.css'// tailwind directives
import { Widget } from "./components/Widget";
export function App() {
  return (
    <>
     <Header/>
     <Dashboard/>
     <Widget/>
     <GlobalStyle/>
    
    </>
  );
}

