"use client";
import { Box } from "@mui/material";
import Introduce from "../../components/Home/Introduce";
import Information from "../../components/Home/Information";
import ArticleBox from "../../components/Home/ArticleBox";
import Workstream from "../../components/Home/WorkStream";
import Collaborator from "../../components/Home/Collaborator";

export default function Home() {
  return (
    <Box>
      <Introduce />
      <Information />
      <ArticleBox />
      <Workstream />
      <Collaborator />
    </Box>
  );
}
