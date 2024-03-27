"use client";
import styled from "styled-components";
import React from "react";

const Conteneur = styled.div`
  width: 220px;
  background-color: white;
  box-shadow: 0px 2.6662580966949463px 2.6662580966949463px 0px #00000008;
  border-radius: 10px;
  min-height: 270px;
  /* @media only screen and (max-width: 940px) {
    width: 300px;
  } */
  @media only screen and (max-width: 500px) {
    width: 320px;
  }
  /* @media only screen and (max-width: 600px) {
    width: 100%;
  } */
`;

const Image = styled.div`
  width: 100%;
  height: 150px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
`;

const Textes = styled.div`
  padding: 1em;
`;

const Adresse = styled.p`
  font-size: 11px;
  color: #8d4b38;
  font-weight: 400;
  /* margin: 15px 0; */
`;
const NomHotel = styled.p`
  font-size: 16px;
  color: #222222;
  font-weight: 600;
  margin: 5px 0;
`;
const PrixHotel = styled.p`
  font-size: 12px;
  color: #222222;
  font-weight: 400;
`;

const Hotel = ({ nomHotel, adresse, prix, image, devise }) => {
  return (
    <Conteneur>
      <Image image={image}></Image>
      <Textes>
        <Adresse>{adresse}</Adresse>
        <NomHotel>{nomHotel}</NomHotel>
        <PrixHotel>
          {prix} {devise} par nuit
        </PrixHotel>
      </Textes>
    </Conteneur>
  );
};

export default Hotel;
