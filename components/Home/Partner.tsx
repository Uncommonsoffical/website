import { Box, Typography } from "@mui/material";
import Image from "next/image";

import collaborator from "@/images/collaborator.png";
import LXDAO from "@/images/LXDAO-logo.svg";
import SEAS from "@/images/4SEAS-logo.svg";
import plancker from "@/images/plancker-logo.svg";
import abcd from "@/images/abcd-logo.png";
import WBF from "@/images/WBF-logo.svg";
import ddao from "@/images/ddao-logo.svg";
import ptdao from "@/images/ptdao-svg.svg";
import GCC from "@/images/GCC-logo.svg";
import Link from "next/link";

function Partner() {
  return (
    <Box
      paddingX={{ lg: "48px", xl: "150px" }}
      paddingY="100px"
      style={{
        borderTop: "1px solid #727272",
        background:
          "linear-gradient(174deg, #FFF1FD 5.06%, rgba(255, 252, 255, 0.77) 89.94%, rgba(255, 255, 255, 0.00) 126.68%)",
      }}>
      <Typography
        component="h3"
        fontSize="60px"
        fontWeight="600"
        marginBottom="48px">
        Our Partner
      </Typography>
      <Box
        display="flex"
        justifyContent="center"
        flexWrap="wrap"
        sx={{
          "& img": {
            height: "42px",
            width: "auto",
            marginX: "28px",
            marginBottom: "24px",
          },
        }}>
        <Image src={collaborator} alt="collaborator" />
        <Link href="https://www.4seas.io/" target="_blank">
          <Image src={SEAS} alt="4SEAS" />
        </Link>
        <Link href="https://lxdao.io/" target="_blank" title="lxdao">
          <Image src={LXDAO} alt="LXDAO" />
        </Link>
        <Link href="https://plancker.org/">
          <Image src={plancker} alt="plancker" />
        </Link>
        <Link href="/" target="_blank">
          <Image src={abcd} alt="abcd" />
        </Link>
        <Link href="/" target="_blank">
          <Image src={WBF} alt="WBF" />
        </Link>
        <Link href="https://discord.gg/sg5c3zqJ6M" target="_blank">
          <Image src={ddao} alt="WBF" />
        </Link>
        <Link href="/" target="_blank">
          <Image src={ptdao} alt="ptdao" />
        </Link>
        <Link href="/" target="_blank">
          <Image src={GCC} alt="GCC" />
        </Link>
      </Box>
    </Box>
  );
}

export default Partner;
