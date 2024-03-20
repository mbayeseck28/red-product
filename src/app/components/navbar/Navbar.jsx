"use client";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import styled from "styled-components";
import React from "react";
import Link from "next/link";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0 4%;
  align-items: center;
  flex-wrap: wrap;
  background-color: white;
  margin-bottom: 2px;
  position: sticky;
  top: 0;
  z-index: 1000;

  @media only screen and (max-width: 700px) {
    height: 150px;
    width: 100%;
    justify-content: center;
  }
`;

const Titre = styled.h2`
  font-size: 20px;
  font-weight: 500;
  line-height: 50px;
  text-align: left;
`;
// _____
const Bar = styled.div`
  display: flex;
  /* background: #ffffff; */
  /* height: 75px; */
  /* border-bottom: 2px solid #f0f0f0;   */
  /* flex-direction: row; */
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;
// const Dashboard = styled.p`
//   font-size: 26.66px;
//   font-weight: 500;
//   line-height: 74.66px;
//   text-align: left;
// `;
const DivIcone = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 22px;
  flex-wrap: wrap;
`;
const SearchInput = styled.input`
  font-size: 16px;
  padding: 15px 12px 15px 40px;
  border-radius: 20px;
  border: 1px solid #ccc;
  width: 250px;
  height: 20px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M15.5 14h-.79l-.28-.27a6.5 6.5 0 1 0-.7.7l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: 10px 50%;
  background-size: 20px;

  ::placeholder {
    color: #aaa;
  }
`;

const DivProfil = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #000000;
`;

const Navbar = () => {
  return (
    <>
      <Header>
        <Titre>Liste des hôtels</Titre>
        <Bar>
          {/* <Dashboard>Dashboard</Dashboard> */}
          <DivIcone>
            <SearchInput placeholder="Recherche..." />
            <IoMdNotificationsOutline />
            <DivProfil />
            <Link href="/connexion" passHref>
              <FaArrowRightFromBracket />
            </Link>
          </DivIcone>
        </Bar>
      </Header>
    </>
  );
};

export default Navbar;
