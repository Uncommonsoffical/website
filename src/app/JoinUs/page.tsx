import { Box, Typography } from "@mui/material";
import joinus_01 from "@/images/joinus-01.svg";
import joinus_02 from "@/images/joinus-02.svg";
import joinus_03 from "@/images/joinus-03.svg";
import Image from "next/image";
import Link from "next/link";

const contentList = [
  {
    href: "https://www.notion.so/1bc1752ed2554f31b6d8cdeea706a148",
    title: "Pledge campfire",
    content:
      "Within the “Beginner’s bonfire camp”, by undertaking missions of various levels, you can grow and level up within the community.",
    logo: joinus_01,
  },
  {
    href: "https://www.notion.so/dce1dcd8d57541738b6fa3cb44df9327",
    title: "Walkthrough series",
    content: `By reading the "Beginner’s Handbook," you can gain a better understanding and integrate more smoothly into the community.`,
    logo: joinus_02,
  },
  {
    href: "https://www.notion.so/b61fcf8413ca4c2fb4b552b485a20fb8",
    title: "Community activity",
    content: `Participating in "Community Activities" allows you to interact with more community peers and establish connections.`,
    logo: joinus_03,
  },
];

function JoinUs() {
  return (
    <Box
      minHeight={{ xl: "calc(100vh - 180px)" }}
      padding={{ xs: "88px 28px", sm: "88px 48px", xl: "88px 150px" }}>
      <Typography
        variant="h2"
        fontSize={{ sm: "33px", xs: "23px" }}
        fontWeight="600"
        marginBottom={{ xs: "48px" }}>
        Join us
      </Typography>
      <Box
        display="grid"
        gridTemplateColumns={{ lg: "1fr 1fr" }}
        fontSize="16px"
        sx={{ gridGap: "24px" }}>
        <Box
          height={{ sm: "156px", xs: "max-content" }}
          padding={{ sm: "24px", xs: "0" }}>
          <Box
            component="h2"
            marginBottom="20px"
            fontSize="19px"
            fontWeight="500">
            Welcome to dive into the rabbit hole!
          </Box>
          Telegram：
          <Link href="https://t.me/theuncommons" target="_blank">
            https://t.me/theuncommons
          </Link>
          <br />
          Discord：
          <Link href="https://discord.gg/YrAKdQ4cF8" target="_blank">
            https://discord.gg/YrAKdQ4cF8
          </Link>
        </Box>
        {contentList.map((i) => (
          <Link key={i.href} href={i.href}>
            <Box
              height={{ xs: "max-content" }}
              padding="24px"
              borderRadius="5px"
              border="1px solid  #8E8E8E"
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection={{ xs: "column", sm: "row" }}>
              <Image src={i.logo} alt="join us" style={{ height: "156px" }} />
              <Box
                height={{ lg: "156px" }}
                paddingTop="20px"
                boxSizing="border-box">
                <Typography variant="h2" fontSize="19px" fontWeight="500">
                  {i.title}
                </Typography>
                <Typography
                  variant="body1"
                  fontSize="16px"
                  color="#2E2E2E"
                  fontWeight="300">
                  {i.content}
                </Typography>
              </Box>
            </Box>
          </Link>
        ))}
      </Box>
    </Box>
  );
}

export default JoinUs;
