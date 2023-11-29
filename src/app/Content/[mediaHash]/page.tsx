"use client";
import { Box, Typography } from "@mui/material";
import { useParams } from "next/navigation";
import axios from "axios";
import useSWR from "swr";
import moment from "moment";

function ArticleDetail() {
  const { mediaHash } = useParams();
  const {
    data = {},
    error,
    isLoading,
  } = useSWR("/getArticleContent", async () => {
    const result = await axios.post("https://server.matters.news/graphql", {
      query: `query {
        article(input:{mediaHash:"${mediaHash}"}){
          id,
          title,
          summary,
          content,
          createdAt,
          author {
            userName
          },
          tags {
            content
          }
        }
      }
      `,
    });
    return result?.data?.data?.article || {};
  });

  if (isLoading) {
    return <Box>加载中</Box>;
  }

  return (
    <Box
      minHeight={{ sm: "calc(100vh - 380px)" }}
      padding={{ xs: "88px 28px", sm: "88px 48px", xl: "88px 150px" }}>
      <Typography
        variant="h2"
        fontSize={{ sm: "33px", xs: "23px" }}
        fontWeight="600"
        marginBottom={{ xs: "64px" }}>
        {data.title}
      </Typography>
      <Box color="#5A5858" fontSize="16px" display="flex">
        <Typography variant="body2" marginRight="56px">
          Author: {data.author?.userName}
        </Typography>
        <Typography variant="body2">
          Publishing time:{" "}
          {moment(data.createdAt).format("YYYY-MM-DD HH:mm:ss")}
        </Typography>
      </Box>
      <div dangerouslySetInnerHTML={{ __html: data.content }} />
    </Box>
  );
}

export default ArticleDetail;
