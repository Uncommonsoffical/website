"use client";
import { Box, Typography } from "@mui/material";
import logo from "@/images/footer-logo.svg";
import frame from "@/images/frame-logo.svg";
import medium from "@/images/medium-logo.svg";
import twitter from "@/images/twitter-logo.svg";
import telegram from "@/images/telegram-logo.svg";
import discord from "@/images/discord-logo.svg";
import Image from "next/image";
import Link from "next/link";
import { useStore } from "@/store";

function Footer() {
  const { isPhone } = useStore();
  const imgSize = isPhone ? "24px" : "auto";

  return (
    <Box
      display="flex"
      justifyContent={{ lg: "space-between", sm: "flex-start" }}
      alignItems={{ lg: "center", sm: "flex-start", xs: "flex-start" }}
      flexDirection={{ lg: "row", sm: "column", xs: "column" }}
      paddingX={{ lg: "48px", xl: "150px", sm: "48px", xs: "24px" }}
      paddingY="24px"
      sx={{ "& img": { height: "50px", width: "auto" } }}
      style={{
        borderTop: "1px solid #727272",
      }}>
      <Image src={logo} alt="logo" />
      <Box
        display="flex"
        justifyContent={{ lg: "flex-end", sm: "space-between" }}
        flexWrap={{ xs: "wrap", sm: "nowrap" }}
        alignItems="center">
        <Typography
          component="span"
          fontSize={{ sm: "20px", xs: "16px" }}
          fontWeight="600"
          color="#2E2E2E"
          marginRight="32px">
          Social media
        </Typography>
        <Link href="https://twitter.com/home" target="_blank">
          <Image
            src={twitter}
            alt="twitter"
            style={{ marginRight: "16px", width: imgSize }}
          />
        </Link>
        <Link href="https://medium.com/@greenpillcn" target="_blank">
          <Image
            src={medium}
            alt="medium"
            style={{ marginRight: "16px", width: imgSize }}
          />
        </Link>
        <Link
          href="https://www.figma.com/file/67d1POjIwm8phTFbMfSgdI/Uncommons-%E5%AE%98%E7%BD%91?type=design&node-id=260-1420&mode=design&t=UZcgabvPkoaJ6MKN-0"
          target="_blank">
          <Image
            src={frame}
            alt="frame"
            style={{ marginRight: "64px", width: imgSize }}
          />
        </Link>
        <Typography
          component="span"
          fontSize={{ sm: "20px", xs: "16px" }}
          fontWeight="600"
          color="#2E2E2E"
          marginRight="32px">
          Community
        </Typography>
        <Link href="https://t.me/theuncommons" target="_blank">
          <Image
            src={telegram}
            alt="telegram"
            style={{ marginRight: "16px", width: imgSize }}
          />
        </Link>
        <Link href="https://discord.gg/EHSGYKJV" target="_blank">
          <Image src={discord} alt="discord" style={{ width: imgSize }} />
        </Link>
      </Box>
    </Box>
  );
}

export default Footer;
