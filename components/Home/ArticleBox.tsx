import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Image from "next/image";
import article_1 from "@/images/article_1.png";
import article_2 from "@/images/article_2.png";
import article_3 from "@/images/article_3.png";
import Link from "next/link";

function ArticleBox() {
  return (
    <Box
      paddingX={{ lg: "48px", xl: "150px" }}
      paddingY="100px"
      style={{
        borderTop: "1px solid #727272",
        background:
          "linear-gradient(180deg, #E6EAF2 0%, rgba(255, 255, 255, 0.00) 100%)",
      }}>
      <Typography
        component="h3"
        fontSize="60px"
        fontWeight="600"
        marginBottom="48px">
        Featured articles
      </Typography>
      <Grid container spacing={2}>
        <Grid xs={4}>
          <Link
            style={{ textDecoration: "none", color: "#000" }}
            href="https://www.notion.so/Why-Humans-Must-Die-0378eefd4b944559aa37340d80be2a8b?pvs=4"
            target="_blank">
            <Box
              height="500px"
              padding="24px"
              display="flex"
              flexDirection="column"
              style={{
                borderRadius: "5px",
                border: "1px solid  #1A1A1A",
                background: "#FFF",
              }}>
              <Image
                src={article_1}
                alt=""
                style={{ width: "100%", height: "auto", flexShrink: 0 }}
              />

              <Typography
                component="h2"
                fontSize="28px"
                paddingTop="24px"
                fontFamily="Heiti SC"
                marginBottom="auto">
                内容共创｜Why Humans Must Die
              </Typography>
              <Box height="100%"></Box>

              <Typography
                component="span"
                fontFamily="Lexend Exa"
                fontSize="20px">
                阿森、Twone、Wingo、K
              </Typography>
              <Box flexShrink="0" marginTop="12px">
                {["#Desci", "#VitaDAO", "#Cyborg"].map((i) => (
                  <Typography
                    key={i}
                    component="span"
                    padding="8px 12px"
                    color="#5A5858"
                    fontSize="18px"
                    borderRadius="30px"
                    marginRight="12px"
                    style={{ background: "#D1DEFF" }}>
                    {i}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Link>
        </Grid>
        <Grid xs={4}>
          <Link
            style={{ textDecoration: "none", color: "#000" }}
            href="https://www.notion.so/ReFi-f00a18bd74824cd1837c0a186b5a72ee?pvs=4"
            target="_blank">
            <Box
              height="500px"
              padding="24px"
              display="flex"
              flexDirection="column"
              style={{
                borderRadius: "5px",
                border: "1px solid  #1A1A1A",
                background: "#FFF",
              }}>
              <Image
                src={article_2}
                alt=""
                style={{ width: "100%", height: "auto", flexShrink: 0 }}
              />

              <Typography
                component="h2"
                fontSize="28px"
                paddingTop="24px"
                fontFamily="Heiti SC"
                marginBottom="auto">
                解密 ReFi 全景图谱：链上碳市场及其未来（一）
              </Typography>
              <Box height="100%"></Box>

              <Typography
                component="span"
                fontFamily="Lexend Exa"
                fontSize="20px">
                不白、Shannon、K、蔓、Weiwei
              </Typography>
              <Box flexShrink="0" marginTop="12px">
                {["#Refi", "#Greenpill"].map((i) => (
                  <Typography
                    key={i}
                    component="span"
                    padding="8px 12px"
                    color="#5A5858"
                    fontSize="18px"
                    borderRadius="30px"
                    marginRight="12px"
                    style={{ background: "#D1DEFF" }}>
                    {i}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Link>
        </Grid>
        <Grid xs={4}>
          <Link
            style={{ textDecoration: "none", color: "#000" }}
            href="https://www.notion.so/DAO-1b75182cabaf4f8bb4e4a0c90b75d1c4?pvs=4"
            target="_blank">
            <Box
              height="500px"
              padding="24px"
              display="flex"
              flexDirection="column"
              style={{
                borderRadius: "5px",
                border: "1px solid  #1A1A1A",
                background: "#FFF",
              }}>
              <Image
                src={article_3}
                alt=""
                style={{ width: "100%", height: "auto", flexShrink: 0 }}
              />

              <Typography
                component="h2"
                fontSize="28px"
                paddingTop="24px"
                fontFamily="Heiti SC"
                marginBottom="auto"
                color="#000">
                从世界游戏说开来：如何用DAO和以太坊构筑一个更好的世界
              </Typography>
              <Box height="100%"></Box>

              <Typography
                component="span"
                fontFamily="Lexend Exa"
                fontSize="20px">
                Twone、Survivor
              </Typography>
              <Box flexShrink="0" marginTop="12px">
                {["#Greenpill", "#Ethereum"].map((i) => (
                  <Typography
                    key={i}
                    component="span"
                    padding="8px 12px"
                    color="#5A5858"
                    fontSize="18px"
                    borderRadius="30px"
                    marginRight="12px"
                    style={{ background: "#D1DEFF" }}>
                    {i}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Link>
        </Grid>
      </Grid>
      <Typography
        component="a"
        display="block"
        href="https://www.notion.so/13d67d3da69c4ee58b55458b6b3d3076"
        marginTop="12px"
        textAlign="right"
        color="#2E2E2E"
        fontSize="24px">
        read more
      </Typography>
    </Box>
  );
}

export default ArticleBox;
