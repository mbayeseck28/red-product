"use client";
import styled from "styled-components";
import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import Hotel from "../components/reutil/Hotel";

const hotels = [
  {
    nomHotel: "Hôtel de la Plage",
    adresse: "123 Rue de la Mer, Ville-sur-Mer, France",
    prix: "85000 XOF",
    image:
      "https://i.pinimg.com/originals/ef/c6/62/efc662ad7d783e588fcf5f8a2f28693f.jpg",
  },
  {
    nomHotel: "Grand Palace Hotel",
    adresse: "456 Avenue Royale, Métropoleville, France",
    prix: "113000 XOF",
    image:
      "https://i.pinimg.com/originals/85/3e/6e/853e6e87a4dd0fae90855edfc0ce9f58.jpg",
  },
  {
    nomHotel: "Mountain View Lodge",
    adresse: "789 Summit Drive, Mountain Town, USA",
    prix: "102000 XOF",
    image:
      "https://i.pinimg.com/originals/00/6e/09/006e09eef15d15b9b9aa2b30ad5408d8.jpg",
  },
  {
    nomHotel: "Sunset Resort & Spa",
    adresse: "101 Palm Beach Road, Seaside City, USA",
    prix: "142000 XOF",
    image:
      "https://i.pinimg.com/originals/c3/43/c8/c343c8b175d6e17304bd29fe3c54d6b1.jpg",
  },
  {
    nomHotel: "Villa Serena",
    adresse: "15 Calle de la Palma, Playa del Sol, Spain",
    prix: "123000 XOF",
    image:
      "https://i.pinimg.com/originals/35/8a/44/358a4468cf82a9c05856bb72c7a80c49.jpg",
  },
  {
    nomHotel: "Eternal Gardens ",
    adresse: "1 Tranquility Lane, Nature Haven, Canada",
    prix: "107000 XOF",
    image:
      "https://i.pinimg.com/originals/c7/e8/37/c7e837987f340835757236a4061e1146.jpg",
  },
  {
    nomHotel: "Majestic Towers Hotel",
    adresse: "1001 Avenue des Champs-Élysées, Paris, France",
    prix: "170000 XOF",
    image:
      "https://i.pinimg.com/originals/e4/15/e7/e415e7fbf29d2926ec6385e72d1872a5.jpg",
  },
  {
    nomHotel: "Coastal Haven Inn",
    adresse: "55 Beachfront Drive, Seaview Village, Australia",
    prix: "96000 XOF",
    image:
      "https://i.pinimg.com/originals/c5/e3/49/c5e349783162a3105ed3898eb78f6e90.jpg",
  },
  {
    nomHotel: "Green Valley Resort",
    adresse: "25 Pine Tree Lane, EcoCity, USA",
    prix: "124000 XOF",
    image:
      "https://i.pinimg.com/originals/bb/85/fe/bb85fe153f1af64e1e4105c9c1966b71.jpg",
  },
  {
    nomHotel: "Royal Mirage Palace",
    adresse: "777 Desert Sands Road, Oasis City, UAE",
    prix: "210000 XOF",
    image:
      "https://i.pinimg.com/originals/7b/b6/82/7bb68251e50e9d07e15eeb94444e1494.jpg",
  },
];

const Wrapper = styled.div`
  background-color: white;
  box-shadow: 0px 2.6662580966949463px 2.6662580966949463px 0px #00000008;
  padding: 1em 4%;
  /* min-height: 80px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Hotels = styled.div`
  padding: 1.5em 3%;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1em;
  flex-wrap: wrap;
`;

const Centre = styled.div`
  width: 80%;

  @media only screen and (max-width: 700px) {
    width: 100%;
  }
`;
const Gauche = styled.div`
  width: 20%;

  @media only screen and (max-width: 700px) {
    width: 0;
  }
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #f7fafc;
`;
const Bouton = styled.button`
  padding: 0.5em 1em;
  border: 1px solid #aeaeae;
  border-radius: 10px;
`;

const page = () => {
  return (
    <main>
      <Container>
        <Gauche>
          <Sidebar />
        </Gauche>
        <Centre>
          <Navbar />
          <Wrapper>
            <h1>Hôtels</h1>
            <Bouton>Créer un nouveau hotel</Bouton>
          </Wrapper>
          <Hotels>
            {hotels.map((obj, index) => (
              <Hotel
                nomHotel={obj.nomHotel}
                adresse={obj.adresse}
                prix={obj.prix}
                image={obj.image}
                key={index}
              />
            ))}
          </Hotels>
        </Centre>
      </Container>
    </main>
  );
};

export default page;
