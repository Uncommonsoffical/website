import { NextResponse, NextRequest } from "next/server";

import { Client } from "@notionhq/client";
import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export const GET = async (req: NextRequest, res: NextResponse) => {
  const response = await await axios.post(
    "https://server.matters.news/graphql",
    {
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
    }
  );
  return NextResponse.json({ user: response?.data?.data.user || {} });
};
