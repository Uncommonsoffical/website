import { Box, Typography } from "@mui/material";
import Image from "next/image";

import collaborator from "@/images/collaborator.png";
import LXDAO from "@/images/LXDAO-logo.svg";
import SEAS from "@/images/4SEAS-logo.svg";
import plancker from "@/images/plancker-logo.svg";
import abcd from "@/images/abcd-logo.png";
import WBF from "@/images/WBF-logo.svg";
import ddao from "@/images/ddao-logo.svg";
import GCC from "@/images/GCC-logo.svg";
import protector from "@/images/protector-logo.jpeg";
import HTLC from "@/images/HTLC-logo.png";
import Link from "next/link";
import { useStore } from "@/store";

function Partner() {
  const { isPhone } = useStore();
  return (
    <Box
      paddingX={{ lg: "48px", xl: "150px", sm: "48px", xs: "48px" }}
      paddingY={{ sm: "100px", xs: "64px" }}
      style={{
        borderTop: "1px solid #727272",
        background:
          "linear-gradient(174deg, #FFF1FD 5.06%, rgba(255, 252, 255, 0.77) 89.94%, rgba(255, 255, 255, 0.00) 126.68%)",
      }}>
      <Typography
        component="h3"
        fontSize={{ lg: "60px", sm: "40px", xs: "24px" }}
        fontWeight="600"
        marginBottom={{ sm: "48px", xs: "24px" }}>
        Our Partner
      </Typography>
      <Box
        display="flex"
        justifyContent={{ lg: "center", sm: "space-evenly", xs: "flex-start" }}
        flexWrap="wrap"
        flexDirection={{ xs: "column", sm: "row" }}
        sx={{
          "& img": {
            height: { md: "42px", xs: "33px" },
            width: "max-content",
            maxWidth: "100%",
            marginX: isPhone ? 0 : "28px",
            marginBottom: { md: "24px", xs: "16px" },
            flexShrink: 0,
            objectFit: "contain",
          },
        }}>
        <Image src={collaborator} alt="collaborator" />
        <Link href="https://www.4seas.io/" target="_blank">
          <Image src={SEAS} alt="4SEAS" />
        </Link>
        <Link href="https://lxdao.io/" target="_blank" title="lxdao">
          <Image src={LXDAO} alt="LXDAO" />
        </Link>
        <Link href="https://plancker.org/" target="_blank" title="plancker">
          <Image src={plancker} alt="plancker" />
        </Link>
        <Link href="https://t.me/weareabcd" target="_blank">
          <Image src={abcd} alt="abcd" />
        </Link>
        <Link href="https://twitter.com/womenbuidl" target="_blank">
          <Image src={WBF} alt="WBF" />
        </Link>
        <Link href="https://discord.gg/sg5c3zqJ6M" target="_blank">
          <Image src={ddao} alt="WBF" />
        </Link>

        <Link href="https://www.gccofficial.org/" target="_blank">
          <Image src={GCC} alt="GCC" />
        </Link>
        {/* <Link href="https://protector.notion.site/" target="_blank">
          <Image src={protector} alt="protector" />
        </Link>
        <Link href="http://haotian.io/" target="_blank">
          <Image src={HTLC} alt="HTLC" />
        </Link> */}
      </Box>
    </Box>
  );
}

export default Partner;
