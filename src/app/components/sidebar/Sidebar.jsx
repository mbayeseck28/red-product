"use client";
import { MdDashboard } from "react-icons/md";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { BiLogoVenmo } from "react-icons/bi";
import React from "react";
import styled from "styled-components";
import NextLink from "next/link";

const MesLink = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const StyledLink = styled.a`
  display: flex;
  gap: 15px;
  align-items: start;
  color: white;
  text-decoration: none;
`;

const Logo = styled.a`
  display: flex;
  gap: 15px;
  align-items: start;
  color: white;
  text-decoration: none;
`;

const TextLogo = styled.p`
  font-size: 20px;
  font-weight: 700;
  line-height: 21.33px;
  text-align: left;
`;
const DivLogo = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
`;

const Text = styled.p`
  font-size: 13px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
  color: white;
`;

const Small = styled.p`
  font-size: 12px;
  margin: 15px 0;
`;

const Icon = styled.span`
  width: 23px;
  height: 23px;
`;

const Sidebar = () => {
  const Wrapper = styled.section`
    height: 1166px;
    background-color: #434246;
    padding: 0 1em;

    @media only screen and (max-width: 700px) {
      display: none;
    }
  `;

  return (
    <div>
      <Wrapper>
        <DivLogo>
          <NextLink href="/" passHref>
            <Logo>
              <Icon>
                <BiLogoVenmo className="w-[23px] h-[23px]" />
              </Icon>
              <TextLogo>RED PRODUCT</TextLogo>
            </Logo>
          </NextLink>
        </DivLogo>
        <Text>
          <Small>Principal</Small>
        </Text>
        <MesLink>
          <NextLink href="/dashboard" passHref>
            <StyledLink>
              <Icon>
                <MdDashboard className="w-[23px] h-[23px]" />
              </Icon>
              <Text>Dashboard</Text>
            </StyledLink>
          </NextLink>
          <NextLink href="/hotels" passHref>
            <StyledLink>
              <Icon>
                <HiOutlineDesktopComputer className="w-[23px] h-[23px]" />
              </Icon>
              <Text>Liste des hôtels</Text>
            </StyledLink>
          </NextLink>
        </MesLink>
      </Wrapper>
    </div>
  );
};

export default Sidebar;
