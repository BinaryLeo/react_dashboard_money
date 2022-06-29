import React from 'react';
import ReactDOM from "react-dom/client";
import {createServer} from "miragejs"
import { App } from './App';
const date = new Date();
const dateOptions: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit'
};
createServer({
  routes(){
    this.namespace ='api';
    this.get('/transactions', ()=>{
      return[
        {
          id:1,
          title:'Transaction 1',
          amount:400,
          type:'deposit',
          category:'Food',
          createDate : date.toLocaleDateString('en-CA', dateOptions)
        }
      ]
    })
    this.post('/transactions', (schema, request)=>{
      const data = JSON.parse(request.requestBody);
      return data;
      
    })
  }
})
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(<App />);