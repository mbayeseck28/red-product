import React from "react";
import styled from "styled-components";
import { LuArrowLeft } from "react-icons/lu";

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 30px 20px;
  border-radius: 5px;
  width: 50%;
  height: 95%;
  overflow-y: auto;
  overflow-x: hidden;
  @media only screen and (max-width: 700px) {
    width: 90%;
  }
`;

const Head = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  margin-bottom: 1em;
  padding: 1em 0;
  border-bottom: 2px solid #dddddd;
  border-style: dotted;
`;
const Titre = styled.h2`
  text-transform: uppercase;
  color: #555555;
  font-weight: 700;
`;

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const handleClose = (e) => {
    e.stopPropagation();
    onClose();
  };

  return (
    <ModalWrapper onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <Head>
          <button onClick={handleClose}>
            <LuArrowLeft />
          </button>
          <Titre>Créer un nouveau hôtel</Titre>
        </Head>
        {children}
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
