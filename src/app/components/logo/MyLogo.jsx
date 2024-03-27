"use client";
import React from "react";
import { IoBookmark } from "react-icons/io5";
import styled from "styled-components";
import NextLink from "next/link";

const DivLogo = styled.div`
  height: 46px;
  display: flex;
  align-items: center;
`;
const Icon = styled.span`
  display: flex;
  align-items: center;
  width: 23px;
  height: 23px;
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
  @media only screen and (max-width: 700px) {
    display: none;
  }
`;

const MyLogo = () => {
  return (
    <div>
      <DivLogo>
        <NextLink href="/dashboard" passHref>
          <Logo>
            <Icon>
              <IoBookmark className="w-[23px] h-[23px]" />
            </Icon>
            <TextLogo>RED PRODUCT</TextLogo>
          </Logo>
        </NextLink>
      </DivLogo>
    </div>
  );
};

export default MyLogo;
