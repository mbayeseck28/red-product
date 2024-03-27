import { IoMdNotificationsOutline } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 4px 4%;
  align-items: center;
  flex-wrap: wrap;
  background-color: white;
  margin-bottom: 2px;
  position: sticky;
  top: 0;
  width: 100%;

  @media only screen and (max-width: 700px) {
    width: 100%;
    justify-content: center;
    top: 50px;
    padding: 4px 2%;
  }
`;

const Titre = styled.h2`
  font-size: 20px;
  font-weight: 500;
  line-height: 50px;
  text-align: left;
`;

const Bar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

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
  background: url("https://s3-alpha-sig.figma.com/img/d0ad/5715/ff957c6bfb22eb955f71f63b6a0704d4?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U71OHM9zr3MaNZ~ru8K-3EdJEurUtr75qYQBhRcHPBpN8twlO5I8DEhV959VmPFkMOZMr35QZgR7cblhIJ~AkbDva-T1sC1As-5SeOmtpxXds-N0IzYFVoFC1uciThIfWnlsgueD0wEI8sDfDpkp~EUTYqZZ1vNcfsPav3uZTArAszokQgRIjosWTfbpls6pOP-TuW1CMUoJXoBTHdcAnQ9UVOVre5SL0L6pzj-8iwshtEBHVkAwFgMv3upgLI-e~liGfbmPcbuxo~8TIHB0mhRWnoAPzBWUf53PBf3PU7RrTcWXTo-CblP-a8aFQbE6ElK91Gc-ciijAsE8CTDftg__");
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
`;

const Navbar = ({ title, onFilteredHotelsChange }) => {
  const router = useRouter();

  const [hotels, setHotels] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchHotels();
  }, []);

  useEffect(() => {
    if (onFilteredHotelsChange) {
      filterHotels();
      console.log(filteredHotels);
    }
  }, [search, hotels]);

  const fetchHotels = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/hotels");
      const hotelsData = response.data;
      setHotels(hotelsData);
    } catch (error) {
      console.error("Erreur lors de la récupération des hotels:", error);
    }
  };

  const filterHotels = () => {
    if (onFilteredHotelsChange) {
      const filtered = hotels.filter((hotel) =>
        hotel.nom.toLowerCase().startsWith(search.toLowerCase())
      );
      setFilteredHotels(filtered);
      if (onFilteredHotelsChange) {
        onFilteredHotelsChange(filtered);
      }
    }
  };

  const logout = () => {
    if (confirm("Voulez-vous vous déconnecter ?")) {
      localStorage.removeItem("token");
      router.push("connexion");
    }
  };

  return (
    <>
      <Header>
        <Titre>{title}</Titre>
        <Bar>
          <DivIcone>
            <SearchInput
              placeholder="Recherche..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <IoMdNotificationsOutline />
            <DivProfil />
            <button onClick={logout} className="text-md">
              <MdLogout />
            </button>
          </DivIcone>
        </Bar>
      </Header>
    </>
  );
};

export default Navbar;
