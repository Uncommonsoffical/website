"use client";

import { Typography, Box, useTheme, useMediaQuery } from "@mui/material";
import styled from "@emotion/styled";
import Cursorlick from "@/images/CursorClick.svg";
import Hammer from "@/images/Hammer.svg";
import Plant from "@/images/Plant.svg";
import RainbowCloud from "@/images/RainbowCloud.svg";
import leaf1 from "@/images/leaf1.png";
import leaf2 from "@/images/leaf2.png";
import Image from "next/image";
import { useStore } from "@/store";
import { useRouter } from "next/navigation";

const TextBox = styled(Box)`
  position: absolute;
  width: max-content;
  font-weight: 400;
  border: 1px solid #1a1a1a;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Introduce() {
  const route = useRouter();
  const { isPC, isIpad, isPhone } = useStore();
  const imgSize = isPC ? "64px" : isIpad ? "54px" : isPhone ? "24px" : "64px";

  const toJoinUs = () => {
    route.push("/JoinUs");
  };

  return (
    <Box
      height={{ sm: "590px", xs: "350px" }}
      display="flex"
      justifyContent="center"
      alignItems="center"
      position="relative"
      style={{
        background:
          "linear-gradient(180deg, #C9EFFA 0%, rgba(255, 255, 255, 0.00) 116.67%)",
      }}>
      <Image
        src={leaf1}
        alt="leaf1"
        style={{
          position: "absolute",
          left: "0",
          top: "0",
          width: "30%",
          maxWidth: "300px",
          height: "auto",
        }}
      />
      <Image
        src={leaf2}
        alt="leaf2"
        style={{
          position: "absolute",
          right: "0",
          bottom: "30px",
          width: "30%",
          maxWidth: "300px",
          height: "auto",
        }}
      />
      <Typography variant="h1" display="none">
        Uncommons is a digital commons a digital garden for public goods
        builders
      </Typography>
      <Box
        position="relative"
        height={{ lg: "390px", sm: "470px", xs: "270px" }}
        width={{ lg: "1000px", sm: "730px", xs: "330px" }}
        fontSize={{ lg: "48px", sm: "32px", xs: "20px" }}>
        <TextBox
          height={{ sm: "64px", xs: "24px" }}
          padding={{ sm: "16px 32px", xs: "12px 16px" }}
          left={{ lg: 0, sm: "60px", xs: 0 }}
          top={{ lg: 0, sm: 0, xs: 0 }}
          zIndex={{ lg: 0, sm: 1, xs: 1 }}>
          Uncommons is
        </TextBox>
        <TextBox
          padding={{ sm: "16px 32px", xs: "12px 16px" }}
          height={{ sm: "64px", xs: "24px" }}
          right={{ lg: "16px", sm: "26px", xs: "50px" }}
          top={{ lg: "16px", sm: "80px", xs: "45px" }}>
          a digital commons
          <Image
            src={RainbowCloud}
            alt="RainbowCloud"
            style={{
              marginLeft: isPhone ? "8px" : "16px",
              width: imgSize,
              height: imgSize,
            }}
          />
        </TextBox>
        <TextBox
          padding={{ sm: "16px 32px", xs: "12px 16px" }}
          height={{ sm: "64px", xs: "24px" }}
          left={{ lg: "220px", sm: "0px", xs: "10px" }}
          top={{ lg: "110px", sm: "150px", xs: "100px" }}>
          a digital garden
          <Image
            src={Plant}
            alt="Plant"
            style={{
              marginLeft: isPhone ? "8px" : "16px",
              width: imgSize,
              height: imgSize,
            }}
          />
        </TextBox>
        <TextBox
          padding={{ sm: "16px 32px", xs: "12px 16px" }}
          height={{ sm: "64px", xs: "24px" }}
          left={{ lg: "0", sm: "80px", xs: "30px" }}
          bottom={{ lg: "60px", sm: "140px", xs: "60px" }}>
          for public goods builders
          <Image
            src={Hammer}
            alt="Hammer"
            style={{
              marginLeft: isPhone ? "8px" : "16px",
              width: imgSize,
              height: imgSize,
            }}
          />
        </TextBox>

        <TextBox
          padding={{ sm: "16px 32px", xs: "12px 16px" }}
          height={{ sm: "64px", xs: "24px" }}
          style={{ right: "0", bottom: "0" }}
          sx={{
            color: "#FF6108",
            border: "1px solid #FF6108 !important",
            cursor: "pointer",
            "&:hover": { boxShadow: "4px 4px 24px 0px rgba(0, 0, 0, 0.10)" },
          }}
          onClick={toJoinUs}>
          Join us!
          <Image
            src={Cursorlick}
            alt="Cursorlick"
            style={{
              marginLeft: isPhone ? "8px" : "16px",
              width: imgSize,
              height: imgSize,
            }}
          />
        </TextBox>
      </Box>
    </Box>
  );
}

export default Introduce;
