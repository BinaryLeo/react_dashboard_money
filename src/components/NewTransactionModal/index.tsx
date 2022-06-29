import React, { FormEvent, useState } from "react";
import Modal from "react-modal";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/incomes.svg";
import outcomeImg from "../../assets/outcome.svg";
import { api } from "../../lib/api";
import { Container, TransactionTypeContainer, RadioBox } from "./styles";
interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}
export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [transactionType, setTransactionType] = useState("deposit");
  const [title, setTitle] = useState("");
  const [value, setValue] = useState(0);
  const[category, setCategory] = useState("");

  function handleCreateNewTransaction(event: FormEvent) {
   event.preventDefault();
   const data={
    title,
    value,
    category,
    transactionType 
  }
  api.post('/transactions', data);
  }
  
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="close" />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Add a new Transaction</h2>
        <input placeholder="Title"
         value={title}
          onChange={event =>  setTitle(event.target.value)} 
          /> 
        <input 
          type="number"
          placeholder="Value"
          value={value}
          onChange={event =>  setValue(Number(event.target.value))} 
          /> 
        <TransactionTypeContainer>
          <RadioBox
           type="button" 
           onClick={() => {setTransactionType("deposit");}}
           isActive={transactionType === "deposit"}
           activeColor="green"
           > 
            <img src={incomeImg} alt="income" />
            <span>Icome</span>
          </RadioBox>
          <RadioBox 
            type="button"
            onClick={() => {setTransactionType("withdraw");}}
            isActive={transactionType === "withdraw"}
            activeColor="red"
          >
            <img src={outcomeImg} alt="outcome" />
            <span>Outcome</span>
          </RadioBox> 
        </TransactionTypeContainer>

        <input 
        placeholder="Category"
        value={category}
        onChange={event =>  setCategory(event.target.value)} 
        />
        <button type="submit">Register</button>
      </Container>
    </Modal>
  );
}
