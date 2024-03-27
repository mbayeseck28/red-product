"use client";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import Carte from "../components/reutil/Carte";
import { FaEnvelopeOpen } from "react-icons/fa6";
import axios from "axios";
import { useRouter } from "next/navigation";

const Wrapper = styled.div`
  background-color: white;
  box-shadow: 0px 2.6662580966949463px 2.6662580966949463px 0px #00000008;
  padding: 1em 4%;
`;

const Small = styled.p`
  font-size: 13px;
  font-weight: 400;
`;
const Titre = styled.h2`
  font-size: 18px;
  font-weight: 300;
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
    width: 100%;
  }
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #f7fafc;
  height: 100vh;
  @media only screen and (max-width: 700px) {
    margin-top: 50px;
  }
`;

const Page = () => {
  const [hotel, setHotel] = useState("");
  const [user, setUser] = useState("");
  const token = localStorage.getItem("token");
  const router = useRouter();

  const fetchHotels = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/hotels");
      const hotels = response.data.map((hotel) => ({
        ...hotel,
      }));
      setHotel(hotels);
    } catch (error) {
      console.error("Erreur lors de la récupération des hotels:", error);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/auth/profiles"
      );
      const profiles = response.data.map((profil) => ({
        ...profil,
      }));
      setUser(profiles);
    } catch (error) {
      console.error("Erreur lors de la récupération des utilisateurs:", error);
    }
  };

  useEffect(() => {
    fetchHotels();
    fetchUsers();
  }, []);

  const datas = [
    {
      color: "#a88add",
      icon: <FaEnvelopeOpen />,
      nombre: 125,
      titre: "Formulaires",
    },
    {
      color: "#0CC2AA",
      icon: <FaEnvelopeOpen />,
      nombre: 40,
      titre: "Messages ",
    },
    {
      color: "#FCC100",
      icon: <FaEnvelopeOpen />,
      nombre: user.length,
      titre: "Utilisateurs ",
    },
    {
      color: "#F90000",
      icon: <FaEnvelopeOpen />,
      nombre: 25,
      titre: "E-mails",
    },
    {
      color: "#9C27B0",
      icon: <FaEnvelopeOpen />,
      nombre: hotel.length,
      titre: "Hôtels",
    },
    {
      color: "#1565C0",
      icon: <FaEnvelopeOpen />,
      nombre: 2,
      titre: "Entités",
    },
  ];

  return (
    <main>
      {token ? (
        <Container>
          <Gauche>
            <Sidebar />
          </Gauche>
          <Centre>
            <Navbar title="Dashboard" />
            <Wrapper>
              <Titre>Bienvenue sur RED Product</Titre>
              <Small>
                {" "}
                La Solution de Gestion Hôtelière Ultime pour les Entreprises de
                Réservation
              </Small>
            </Wrapper>
            <Cartes>
              {datas.map((obj, index) => (
                <Carte
                  icon={obj.icon}
                  color={obj.color}
                  key={index}
                  nombre={obj?.nombre}
                  titre={obj?.titre}
                />
              ))}
            </Cartes>
          </Centre>
        </Container>
      ) : (
        router.push("/connexion")
      )}
    </main>
  );
};

export default Page;
