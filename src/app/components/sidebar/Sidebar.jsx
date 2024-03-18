"use client";
import { MdDashboard } from "react-icons/md";
import { FaHotel } from "react-icons/fa";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Sidebar = () => {
  const Wrapper = styled.section`
    padding: 2em;
    height: 1166px;
    background-color: #5a595d;
  `;
  return (
    <div>
      <Wrapper>
        <Link className="flex gap-2 items-center" href="dashboard">
          <MdDashboard />
          Dashboard
        </Link>{" "}
        <br />
        <Link className="flex gap-2 items-center" href="hotels">
          <FaHotel />
          Liste des hôtels
        </Link>
      </Wrapper>
    </div>
  );
};

export default Sidebar;
