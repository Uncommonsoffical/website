"use client";

import { Box } from "@mui/material";
import Image from "next/image";
import researchScopes from "@/images/researchScopes.png";
import communityStructure from "@/images/communityStructure.png";

function Information() {
  return (
    <Box
      paddingX="15%"
      paddingY="100px"
      textAlign="center"
      style={{
        borderTop: "1px solid #727272",
        background: "linear-gradient(180deg, #E3EFE0 14.75%, #FFF 128.74%)",
      }}>
      <Image
        src={communityStructure}
        alt="researchScopes"
        style={{ width: "100%", height: "auto" }}
      />
      <Image
        src={researchScopes}
        alt="researchScopes"
        style={{ marginTop: "116px", width: "100%", height: "auto" }}
      />
    </Box>
  );
}

export default Information;
