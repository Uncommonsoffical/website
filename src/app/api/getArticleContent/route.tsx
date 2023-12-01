import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export const GET = async (req: NextRequest, res: NextResponse) => {
  const { searchParams } = new URL(req.url);
  const mediaHash = searchParams.get("mediaHash");
  const response = await await axios.post(
    "https://server.matters.news/graphql",
    {
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
    }
  );
  return NextResponse.json({ article: response?.data?.data?.article || {} });
};
