import axios from 'axios';
import {createServer, Model} from "miragejs"
import {usecanadianTime} from '../hooks/useCanadianTime';
const api = axios.create({
   baseURL : '/api'
   //baseURL : 'http://localhost:3000/api'
});

 function createMirageAPI(){
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
            created_at: usecanadianTime(),
          },
          {
            id:2,
            title:"Rent for the month",
            type:"withdraw",
            category:"Rent",
            amount:3000,
            created_at: usecanadianTime(),
          },
        ],
      });
      },
      routes(){
        this.namespace ='api';
        this.get('/transactions', ()=>{
         return this.schema.all('transaction');
        })
        this.post('/transactions', (schema, request)=>{
          const data = JSON.parse(request.requestBody);
          return schema.create('transaction', data);//Model/Data
          
        });
      },
    });
}

export {api, createMirageAPI};