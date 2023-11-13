import { Box, Typography } from "@mui/material";
import Image from "next/image";

import collaborator from "@/images/collaborator.png";
import LXDAO from "@/images/LXDAO-logo.svg";
import SEAS from "@/images/4SEAS-logo.png";
import plancker from "@/images/plancker-logo.svg";
import abcd from "@/images/abcd-logo.png";
import WBF from "@/images/WBF-logo.svg";
import Link from "next/link";

function Collaborator() {
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
        Our collaborator
      </Typography>
      <Box
        sx={{
          "& img": { height: "42px", width: "auto", marginRight: "56px" },
        }}>
        <Link href="/" target="_blank">
          <Image src={collaborator} alt="collaborator" />
        </Link>
        <Link href="/" target="_blank">
          <Image src={SEAS} alt="4SEAS" />
        </Link>
        <Link href="https://lxdao.io/" target="_blank">
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
      </Box>
    </Box>
  );
}

export default Collaborator;
