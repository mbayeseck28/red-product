"use client";
import styled from "styled-components";
import React from "react";

const Conteneur = styled.div`
  display: flex;
  justify-content: start;
  padding: 15px;
  gap: 15px;
  align-items: center;
  width: 305px;
  background-color: white;
  box-shadow: 0px 2.6662580966949463px 2.6662580966949463px 0px #00000008;
  border-radius: 15px;
  @media only screen and (max-width: 700px) {
    width: 100%;
  }
`;
const Icon = styled.div`
  display: flex;
  justify-content: center;
  padding: 12px;
  align-items: center;
  background-color: ${(props) => props.color || "#a88add"};
  color: white;
  border-radius: 50%;
`;
const Inf = styled.div`
  display: flex;
  justify-content: start;
  gap: 5px;
`;
const Chiffre = styled.h1`
  font-size: 25px;
  font-weight: 200;
`;
const Titre = styled.h5`
  font-size: small;
  font-weight: 300;
  padding-top: 13px;
`;
const Desc = styled.h5`
  font-size: smaller;
  font-weight: 300;
`;

const Carte = ({ icon, color, nombre, titre }) => {
  return (
    <Conteneur>
      <Icon color={color}>{icon}</Icon>
      <div>
        <Inf>
          <Chiffre>{nombre}</Chiffre>
          <Titre>{titre}</Titre>
        </Inf>
        <Desc>Je ne sais pas quoi mettre</Desc>
      </div>
    </Conteneur>
  );
};

export default Carte;
