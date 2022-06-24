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
        <Container>
            <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
      >
        <h2>Add a new Transaction</h2>
        <button type="button" onClick={onRequestClose}>
          Close
        </button>
      </Modal>
        </Container>
    );
}