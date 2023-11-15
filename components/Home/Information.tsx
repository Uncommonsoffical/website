"use client";

import { Box } from "@mui/material";
import Image from "next/image";
import researchScopes from "@/images/researchScopes.png";
import researchScopes_ipad from "@/images/researchScopes_ipad.png";
import communityStructure from "@/images/communityStructure.png";
import communityStructure_ipad from "@/images/communityStructure_ipad.png";
import { useStore } from "@/store";

function Information() {
  const { isPC, isIpad } = useStore();

  const scopes = isPC ? researchScopes : researchScopes_ipad;
  const structure = isPC ? communityStructure : communityStructure_ipad;

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
        src={structure}
        alt="researchScopes"
        style={{ width: "100%", height: "auto" }}
      />
      <Image
        src={scopes}
        alt="researchScopes"
        style={{ marginTop: "116px", width: "100%", height: "auto" }}
      />
    </Box>
  );
}

export default Information;
