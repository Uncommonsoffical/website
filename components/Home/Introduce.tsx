"use client";

import { Typography, Box } from "@mui/material";
import styled from "@emotion/styled";
import Cursorlick from "@/images/CursorClick.svg";
import Hammer from "@/images/Hammer.svg";
import Plant from "@/images/Plant.svg";
import RainbowCloud from "@/images/RainbowCloud.svg";
import Image from "next/image";
import { useEffect, useState } from "react";

const TextBox = styled("div")`
  position: absolute;
  width: max-content;
  height: 64px;
  padding: 16px 32px;
  font-size: 48px;
  font-weight: 400;
  border: 1px solid #1a1a1a;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Introduce() {
  return (
    <Box
      height="590px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      style={{
        background:
          "linear-gradient(180deg, #C9EFFA 0%, rgba(255, 255, 255, 0.00) 116.67%)",
      }}>
      <Box position="relative" height="390px" width="1000px">
        <TextBox style={{ left: "0", top: "0" }}>Uncommons is</TextBox>
        <TextBox style={{ right: "16px", top: "16px" }}>
          a digital commons
          <Image
            src={RainbowCloud}
            alt="RainbowCloud"
            style={{ marginLeft: "16px", width: "64px", height: "64px" }}
          />
        </TextBox>
        <TextBox style={{ left: "220px", top: "110px" }}>
          a digital garden
          <Image
            src={Plant}
            alt="Plant"
            style={{ marginLeft: "16px", width: "64px", height: "64px" }}
          />
        </TextBox>
        <TextBox style={{ left: "0", bottom: "60px" }}>
          for public goods builders
          <Image
            src={Hammer}
            alt="Hammer"
            style={{ marginLeft: "16px", width: "64px", height: "64px" }}
          />
        </TextBox>
        <TextBox style={{ right: "0", bottom: "0" }}>
          Join us!
          <Image
            src={Cursorlick}
            alt="Cursorlick"
            style={{ marginLeft: "16px", width: "64px", height: "64px" }}
          />
        </TextBox>
      </Box>
    </Box>
  );
}

export default Introduce;
