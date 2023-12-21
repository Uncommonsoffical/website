import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Image from "next/image";
import article_1 from "@/images/article_1.png";
import article_2 from "@/images/article_2.png";
import article_3 from "@/images/article_3.png";
import Link from "next/link";
import { useStore } from "@/store";

function ArticleBox() {
    const { isPC, isIpad } = useStore();

    const imgSize = isPC ? "100%" : isIpad ? "214px" : "100%";

    return (
        <Box
            paddingX={{ lg: "48px", xl: "150px", sm: "48px", xs: "24px" }}
            paddingY={{ sm: "100px", xs: "64px" }}
            style={{
                borderTop: "1px solid #727272",
                background:
                    "linear-gradient(180deg, #E6EAF2 0%, rgba(255, 255, 255, 0.00) 100%)",
            }}
        >
            <Typography
                component="h3"
                fontSize={{ lg: "60px", sm: "40px", xs: "24px" }}
                fontWeight="600"
                marginBottom={{ sm: "48px", xs: "24px" }}
            >
                Featured articles
            </Typography>
            <Grid
                container
                spacing={{ lg: 2, sm: 6, xs: 2 }}
                sx={{
                    "& .article:hover": {
                        boxShadow: "4px 4px 24px 0px rgba(0, 0, 0, 0.10)",
                    },
                }}
            >
                <Grid lg={4} sm={12} xs={12}>
                    <Link
                        style={{ textDecoration: "none", color: "#000" }}
                        href="/Content/Why-Humans-Must-Die"
                        target="_blank"
                    >
                        <Box
                            className="article"
                            height={{ lg: "500px", sm: "auto" }}
                            padding="24px"
                            display="flex"
                            flexDirection={{
                                lg: "column",
                                sm: "row",
                                xs: "column",
                            }}
                            style={{
                                borderRadius: "5px",
                                border: "1px solid  #1A1A1A",
                                background: "#FFF",
                            }}
                        >
                            <Image
                                src={article_1}
                                alt=""
                                style={{
                                    width: imgSize,
                                    height: isPC ? "auto" : imgSize,
                                    flexShrink: 0,
                                }}
                            />
                            <Box
                                marginLeft={{ lg: 0, sm: "24px" }}
                                display="flex"
                                height="100%"
                                flexDirection="column"
                            >
                                <Typography
                                    component="h2"
                                    fontSize={{ sm: "28px", xs: "16px" }}
                                    paddingTop={{
                                        lg: "24px",
                                        sm: 0,
                                        xs: "24px",
                                    }}
                                    marginBottom="auto"
                                >
                                    内容共创｜Why Humans Must Die
                                </Typography>
                                <Box height="100%"></Box>

                                <Typography
                                    component="span"
                                    fontSize={{ sm: "20px", xs: "12px" }}
                                >
                                    阿森、Twone、Wingo、K
                                </Typography>
                                <Box flexShrink="0" marginTop="12px">
                                    {["#Desci", "#VitaDAO", "#Cyborg"].map(
                                        (i) => (
                                            <Typography
                                                key={i}
                                                component="span"
                                                padding="8px 12px"
                                                color="#5A5858"
                                                fontSize={{
                                                    sm: "18px",
                                                    xs: "12px",
                                                }}
                                                borderRadius="30px"
                                                marginRight="12px"
                                                style={{
                                                    background: "#D1DEFF",
                                                }}
                                            >
                                                {i}
                                            </Typography>
                                        )
                                    )}
                                </Box>
                            </Box>
                        </Box>
                    </Link>
                </Grid>
                <Grid lg={4} sm={12} xs={12}>
                    <Link
                        style={{ textDecoration: "none", color: "#000" }}
                        href="/Content/decrypt-refi-1"
                        target="_blank"
                    >
                        <Box
                            className="article"
                            height={{ lg: "500px", sm: "auto" }}
                            padding="24px"
                            display="flex"
                            flexDirection={{
                                lg: "column",
                                sm: "row",
                                xs: "column",
                            }}
                            style={{
                                borderRadius: "5px",
                                border: "1px solid  #1A1A1A",
                                background: "#FFF",
                            }}
                        >
                            <Image
                                src={article_2}
                                alt=""
                                style={{
                                    width: imgSize,
                                    height: isPC ? "auto" : imgSize,
                                    flexShrink: 0,
                                }}
                            />
                            <Box
                                marginLeft={{ lg: 0, sm: "24px" }}
                                display="flex"
                                height="100%"
                                flexDirection="column"
                            >
                                <Typography
                                    component="h2"
                                    fontSize={{ sm: "28px", xs: "16px" }}
                                    paddingTop={{
                                        lg: "24px",
                                        sm: 0,
                                        xs: "24px",
                                    }}
                                    marginBottom="auto"
                                >
                                    解密 ReFi 全景图谱：链上碳市场及其未来（一）
                                </Typography>
                                <Box height="100%"></Box>

                                <Typography
                                    component="span"
                                    fontSize={{ sm: "20px", xs: "12px" }}
                                >
                                    不白、Shannon、K、蔓、Weiwei
                                </Typography>
                                <Box flexShrink="0" marginTop="12px">
                                    {["#Refi", "#Greenpill"].map((i) => (
                                        <Typography
                                            key={i}
                                            component="span"
                                            padding="8px 12px"
                                            color="#5A5858"
                                            fontSize={{
                                                sm: "18px",
                                                xs: "12px",
                                            }}
                                            borderRadius="30px"
                                            marginRight="12px"
                                            style={{ background: "#D1DEFF" }}
                                        >
                                            {i}
                                        </Typography>
                                    ))}
                                </Box>
                            </Box>
                        </Box>
                    </Link>
                </Grid>
                <Grid lg={4} sm={12} xs={12}>
                    <Link
                        style={{ textDecoration: "none", color: "#000" }}
                        href="/Content/better-world"
                        target="_blank"
                    >
                        <Box
                            className="article"
                            height={{ lg: "500px", sm: "auto" }}
                            padding="24px"
                            display="flex"
                            flexDirection={{
                                lg: "column",
                                sm: "row",
                                xs: "column",
                            }}
                            style={{
                                borderRadius: "5px",
                                border: "1px solid  #1A1A1A",
                                background: "#FFF",
                            }}
                        >
                            <Image
                                src={article_3}
                                alt=""
                                style={{
                                    width: imgSize,
                                    height: isPC ? "auto" : imgSize,
                                    flexShrink: 0,
                                }}
                            />
                            <Box
                                marginLeft={{ lg: 0, sm: "24px" }}
                                display="flex"
                                height="100%"
                                flexDirection="column"
                            >
                                <Typography
                                    component="h2"
                                    fontSize={{ sm: "28px", xs: "16px" }}
                                    paddingTop={{
                                        lg: "24px",
                                        sm: 0,
                                        xs: "24px",
                                    }}
                                    marginBottom="auto"
                                    color="#000"
                                >
                                    从世界游戏说开来：如何用DAO和以太坊构筑一个更好的世界
                                </Typography>
                                <Box height="100%"></Box>

                                <Typography
                                    component="span"
                                    fontSize={{ sm: "20px", xs: "12px" }}
                                >
                                    Twone、Survivor
                                </Typography>
                                <Box flexShrink="0" marginTop="12px">
                                    {["#Greenpill", "#Ethereum"].map((i) => (
                                        <Typography
                                            key={i}
                                            component="span"
                                            padding="8px 12px"
                                            color="#5A5858"
                                            fontSize={{
                                                sm: "18px",
                                                xs: "12px",
                                            }}
                                            borderRadius="30px"
                                            marginRight="12px"
                                            style={{ background: "#D1DEFF" }}
                                        >
                                            {i}
                                        </Typography>
                                    ))}
                                </Box>
                            </Box>
                        </Box>
                    </Link>
                </Grid>
            </Grid>
            <Typography
                component="a"
                display="block"
                href="/Content"
                marginTop="12px"
                textAlign="right"
                color="#2E2E2E"
                style={{ textDecoration: "none" }}
                fontSize="24px"
                sx={{ "&:hover": { textDecoration: "underline !important" } }}
            >
                read more
            </Typography>
        </Box>
    );
}

export default ArticleBox;
