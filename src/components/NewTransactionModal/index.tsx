import React, { useState } from "react";
import Modal from "react-modal";
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
  const [transactionType, setTransactionType] = useState("deposit");
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
      <Container>
        <h2>Add a new Transaction</h2>
        <input placeholder="Title" />
        <input type="number" placeholder="Value" />
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

        <input placeholder="Category" />
        <button type="submit">Register</button>
      </Container>
    </Modal>
  );
}
