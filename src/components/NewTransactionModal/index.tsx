
import React from "react";
import Modal from "react-modal";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/incomes.svg";
import outcomeImg from "../../assets/outcome.svg";
import {Container, TransactionTypeContainer} from "./styles";
interface NewTransactionModalProps {
isOpen: boolean;
onRequestClose: () => void;
}
export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
    return(
       
            <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <button
         type="button" 
         onClick={onRequestClose}
         className="react-modal-close">
          <img src={closeImg} alt="close" />
        </button>
              <Container>
        <h2>Add a new Transaction</h2>
        <input
        placeholder="Title"
        />
        <input
        type="number"
        placeholder="Value"
        />
        <TransactionTypeContainer>
          <button 
          type="button"
          
          >
          <img src={incomeImg} alt="income" />
          <span>Icome</span>
          </button>
          <button
          type="button"
          >
          <img src={outcomeImg} alt="outcome" />
          <span>Outcome</span>
          </button>
        </TransactionTypeContainer>

        <input
        placeholder="Category"
        />
        <button type="submit">Register</button>
        
        </Container>
      </Modal>
  
    );
}