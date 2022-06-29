import React from 'react';
import ReactDOM from "react-dom/client";
import {createServer, Model} from "miragejs"
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
   
  models:{
    transaction: Model,
 }
,
  seeds: (server) => {
   server.db.loadData({
    transactions:[
      {
        id:1,
        title:"Website freelance services",
        type:"deposit",
        category:"Development",
        amount:6000,
        created_at: date.toLocaleString('en-CA', dateOptions),
      },
      {
        id:2,
        title:"Rent for the month",
        type:"withdraw",
        category:"Rent",
        amount:3000,
        created_at: date.toLocaleString('en-CA', dateOptions),
      }
    ],
  })
  },
  routes(){
    this.namespace ='api';
    this.get('/transactions', ()=>{
     return this.schema.all('transaction');
    })
    this.post('/transactions', (schema, request)=>{
      const data = JSON.parse(request.requestBody);
      return schema.create('transaction', data);//Model/Data
      
    })
  }
})
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(<App />);