"use client";
import styled from "styled-components";
import React from "react";

const Conteneur = styled.div`
  width: 225px;
  background-color: white;
  box-shadow: 0px 2.6662580966949463px 2.6662580966949463px 0px #00000008;
  border-radius: 15px;
  min-height: 300px;
  @media only screen and (max-width: 850px) {
    width: 450px;
  }
  @media only screen and (max-width: 600px) {
    width: 250px;
  }
`;

const Image = styled.div`
  width: 100%;
  height: 150px;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
`;

const Textes = styled.div`
  padding: 2em 1em;
`;

const Adresse = styled.p`
  font-size: 9px;
  color: #8d4b38;
  font-weight: 400;
  /* margin: 15px 0; */
`;
const NomHotel = styled.p`
  font-size: 18px;
  color: #222222;
  font-weight: 600;
  margin: 5px 0 15px 0;
`;
const PrixHotel = styled.p`
  font-size: 10px;
  color: #222222;
  font-weight: 400;
`;

const Hotel = ({ nomHotel, adresse, prix, image }) => {
  return (
    <div>
      <Conteneur>
        <Image image={image}></Image>
        <Textes>
          <Adresse>{adresse}</Adresse>
          <NomHotel>{nomHotel}</NomHotel>
          <PrixHotel>{prix} par nuit</PrixHotel>
        </Textes>
      </Conteneur>
    </div>
  );
};

export default Hotel;
