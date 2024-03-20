"use client";
import styled from "styled-components";
import React from "react";
import { FaEnvelopeOpen } from "react-icons/fa6";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import Carte from "./components/reutil/Carte";

const datas = [
  {
    color: "#a88add",
    icon: <FaEnvelopeOpen />,
  },
  {
    color: "#0CC2AA",
    icon: <FaEnvelopeOpen />,
  },
  {
    color: "#FCC100",
    icon: <FaEnvelopeOpen />,
  },
  {
    color: "#F90000",
    icon: <FaEnvelopeOpen />,
  },
  {
    color: "#9C27B0",
    icon: <FaEnvelopeOpen />,
  },
  {
    color: "#1565C0",
    icon: <FaEnvelopeOpen />,
  },
];

const Wrapper = styled.div`
  background-color: white;
  box-shadow: 0px 2.6662580966949463px 2.6662580966949463px 0px #00000008;
  padding: 1em 3%;
  min-height: 100px;
`;

const Small = styled.p`
  font-size: 12px;
`;

const Cartes = styled.div`
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
            <h2>Bienvenue sur RED Product</h2>
            <Small>Lorem ipsum dolor sit amet consectetur</Small>
          </Wrapper>
          <Cartes>
            {datas.map((obj, index) => (
              <Carte icon={obj.icon} color={obj.color} key={index} />
            ))}
          </Cartes>
        </Centre>
      </Container>
    </main>
  );
};

export default page;
