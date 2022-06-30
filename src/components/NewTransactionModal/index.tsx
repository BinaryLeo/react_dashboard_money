import React, { FormEvent, useState, useContext } from "react";
import Modal from "react-modal";
import { TransactionsContext } from "../../TransactionsContext";

import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/incomes.svg";
import outcomeImg from "../../assets/outcome.svg";
import { Container, TransactionTypeContainer, RadioBox } from "./styles";
interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}
export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const {createTransaction} = useContext(TransactionsContext)
  const [transactionType, setTransactionType] = useState("deposit");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const[category, setCategory] = useState("");

  async function handleCreateNewTransaction(event: FormEvent) {
   event.preventDefault();
    await createTransaction({
      title,
      type: transactionType,
      category,
      amount: amount, 
    });
    setTitle("");
    setAmount(0);
    setCategory("");
    setTransactionType("deposit");
    onRequestClose();
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
          value={amount}
          onChange={event =>  setAmount(Number(event.target.value))} 
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
