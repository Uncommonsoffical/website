"use client";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { useStore } from "@/store";
import axios from "axios";
import useSWR from "swr";

interface ArticleType {
  mediaHash: string;
  title: string;
  cover: string;
  summary: string;
  tags: ArticleTags[];
  author: ArticleAuthor;
}

interface ArticleTags {
  content: string;
}

interface ArticleAuthor {
  userName: string;
}

function Content() {
  const { isPC, isIpad } = useStore();

  const {
    data: articleList = [],
    error,
    isLoading,
  } = useSWR("/getContentList", async () => {
    const result = await axios.post("https://server.matters.news/graphql", {
      headers: {
        "Access-control-allow-origin": "*",
        "Access-Control-Allow-Headers": "content-type",
        "Access-Control-Allow-Methods": "DELETE,PUT,POST,GET,OPTIONS",
      },
      query: `query {
        user(input: { ethAddress: "0x1b1ab439770b938d900d876038676f4697170049" }) {
          id
          userName
          avatar
          articles(input: {}) {
            totalCount
            edges {
              node {
                mediaHash
                title
                cover
                summary
                tags {
                  content
                }
                author {
                  userName
                }
              }
            }
          }
        }
      }
      `,
    });
    const list =
      result.data.data?.user?.articles?.edges?.map((i: any) => ({
        ...i.node,
      })) || [];
    return list as ArticleType[];
  });
  const imgSize = isPC ? "100%" : isIpad ? "168px" : "100%";
  return (
    <Box padding={{ xs: "88px 28px", sm: "88px 48px", xl: "88px 150px" }}>
      <Typography
        variant="h2"
        fontSize={{ sm: "33px", xs: "23px" }}
        fontWeight="600"
        marginBottom={{ xs: "64px" }}>
        Our content
      </Typography>
      <Box
        display="grid"
        gridTemplateColumns={{ xl: "1fr 1fr 1fr" }}
        style={{ gridGap: "32px" }}>
        {articleList.map((article) => (
          <Link
            key={article.mediaHash}
            style={{ textDecoration: "none", color: "#000" }}
            href={`/Content/${article.mediaHash}`}
            target="_blank">
            <Box
              className="article"
              height={{ lg: "400px", sm: "auto" }}
              padding="24px"
              display="flex"
              flexDirection={{ lg: "column", sm: "row", xs: "column" }}
              style={{
                borderRadius: "5px",
                border: "1px solid  #1A1A1A",
                background: "#FFF",
              }}>
              <Typography
                component="img"
                src={article.cover}
                style={{
                  width: imgSize,
                  height: isPC ? "auto" : imgSize,
                  maxHeight: "208px",
                  flexShrink: 0,
                }}></Typography>
              <Box
                marginLeft={{ lg: 0, sm: "24px" }}
                display="flex"
                height={{ xl: "100%", sm: "168px" }}
                flexDirection="column">
                <Typography
                  component="h2"
                  fontSize={{ sm: "28px", xs: "16px" }}
                  paddingTop={{ lg: "24px", sm: 0, xs: "24px" }}
                  marginBottom="auto">
                  {article.title}
                </Typography>
                <Box height="100%"></Box>

                <Typography
                  component="span"
                  fontSize={{ sm: "20px", xs: "12px" }}>
                  {article.author.userName}
                </Typography>
                <Box flexShrink="0" marginTop="12px">
                  {article.tags.map((i) => (
                    <Typography
                      key={i.content}
                      component="span"
                      padding="8px 12px"
                      color="#5A5858"
                      fontSize={{ sm: "18px", xs: "12px" }}
                      borderRadius="30px"
                      marginRight="12px"
                      style={{ background: "#D1DEFF" }}>
                      {i.content}
                    </Typography>
                  ))}
                </Box>
              </Box>
            </Box>
          </Link>
        ))}
      </Box>
    </Box>
  );
}

export default Content;
