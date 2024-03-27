"use client";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import Hotel from "../components/reutil/Hotel";
import Modal from "../components/modal/Modal";
import Form from "../components/formulaire/Form";
import axios from "axios"; // N'oubliez pas d'importer axios si vous l'utilisez
import { useRouter } from "next/navigation";

const Page = () => {
  const [hotel, setHotel] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const token = localStorage.getItem("token");
  const router = useRouter();

  const [filteredHotels, setFilteredHotels] = useState([]);

  const handleFilteredHotelsChange = (filteredHotels) => {
    setFilteredHotels(filteredHotels);
  };

  const fetchHotels = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/hotels");
      const hotelsAvecQuantiteProd = response.data.map((hotel) => ({
        ...hotel,
      }));
      setHotel(hotelsAvecQuantiteProd);
    } catch (error) {
      console.error("Erreur lors de la récupération des hotels:", error);
    }
  };

  useEffect(() => {
    fetchHotels();
    console.log(filteredHotels);
  }, [filteredHotels]);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main>
      {token ? (
        <Container>
          <Gauche>
            <Sidebar />
          </Gauche>
          <Centre>
            <Navbar
              title="Liste des hôtels"
              onFilteredHotelsChange={handleFilteredHotelsChange}
            />
            <Wrapper>
              <Titre>
                Hôtels
                <Length>{hotel.length}</Length>
              </Titre>
              <Bouton onClick={toggleModal}>Créer un nouveau hotel</Bouton>
              <Modal isOpen={isOpen} onClose={toggleModal}>
                <Form onClose={toggleModal} />
              </Modal>
            </Wrapper>
            <Hotels>
              {filteredHotels.length > 0
                ? filteredHotels.map((obj, index) => (
                    <Hotel
                      nomHotel={obj.nom}
                      adresse={obj.adresse}
                      prix={obj.prix}
                      image={obj.image}
                      devise={obj.devise}
                      key={index}
                    />
                  ))
                : hotel.map((obj, index) => (
                    <Hotel
                      nomHotel={obj.nom}
                      adresse={obj.adresse}
                      prix={obj.prix}
                      image={obj.image}
                      devise={obj.devise}
                      key={index}
                    />
                  ))}
            </Hotels>
          </Centre>
        </Container>
      ) : (
        router.push("/connexion")
      )}
    </main>
  );
};

export default Page;

const Wrapper = styled.div`
  background-color: white;
  box-shadow: 0px 2.6662580966949463px 2.6662580966949463px 0px #00000008;
  padding: 1em 4%;
  /* min-height: 80px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const Hotels = styled.div`
  padding: 1.5em 4%;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1em;
  flex-wrap: wrap;
`;
const Titre = styled.h2`
  font-size: 16px;
  font-weight: 300;
  display: flex;
  gap: 10px;
  align-items: center;
`;
const Length = styled.h2`
  color: #c3c3c3de;
  font-size: 18px;
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
  @media only screen and (max-width: 700px) {
    margin-top: 50px;
  }
`;
const Bouton = styled.button`
  padding: 0.5em 1em;
  border: 1px solid #aeaeae;
  border-radius: 10px;
`;
