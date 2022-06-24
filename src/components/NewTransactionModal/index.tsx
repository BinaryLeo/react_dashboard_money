import { on } from "events";
import React from "react";
import Modal from "react-modal";
import {Container} from "./styles";
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
              <Container>
        <h2>Add a new Transaction</h2>
        <input
        placeholder="Title"
        />
        <input
        type="number"
        placeholder="Value"
        />
        <input
        placeholder="Category"
        />
        <button type="submit">Add</button>
        <button type="button" onClick={onRequestClose}>
          Close
        </button>
        </Container>
      </Modal>
  
    );
}