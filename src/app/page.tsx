"use client";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import Introduce from "../../components/Home/Introduce";
import Information from "../../components/Home/Information";
import ArticleBox from "../../components/Home/ArticleBox";
import Workstream from "../../components/Home/WorkStream";
// import Partner from "../../components/Home/Partner";
import { useStore } from "@/store";
import { useEffect } from "react";

export default function Home() {
  const isPC = useMediaQuery("(min-width:1200px)");
  const isIpad = useMediaQuery("(min-width:800px)");
  const isPhone = useMediaQuery("(min-width:300px)");
  const { setScreenSize } = useStore();

  useEffect(() => {
    console.log(isPC, isIpad, isPhone);
    if (isPC) {
      setScreenSize({ isPC, isIpad: false, isPhone: false });
    } else if (isIpad) {
      setScreenSize({ isIpad, isPC: false, isPhone: false });
    } else if (!isIpad && isPhone) {
      setScreenSize({ isPhone, isPC: false, isIpad: false });
    }
  }, [isPC, isIpad, isPhone]);

  return (
    <Box>
      <Introduce />
      <Information />
      <ArticleBox />
      <Workstream />
      {/* <Partner /> */}
    </Box>
  );
}
