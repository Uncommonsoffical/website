import { Box, Typography } from "@mui/material";
import joinus_01 from "@/images/joinus-01.svg";
import joinus_02 from "@/images/joinus-02.svg";
import joinus_03 from "@/images/joinus-03.svg";
import Image from "next/image";

function JoinUs() {
  return (
    <Box
      height={{ xl: "calc(100vh - 380px)" }}
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
          padding={{ sm: "24px", xs: "0" }}
          display="flex"
          justifyContent="center"
          alignItems="center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </Box>
        <Box
          height={{ xs: "max-content" }}
          padding="24px"
          borderRadius="5px"
          border="1px solid  #8E8E8E"
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection={{ xs: "column", sm: "row" }}>
          <Image src={joinus_01} alt="join us" style={{ height: "156px" }} />
          <Box
            height={{ lg: "156px" }}
            paddingTop="20px"
            boxSizing="border-box">
            <Typography variant="h2" fontSize="19px" fontWeight="500">
              Beginner’s bonfire camp
            </Typography>
            <Typography
              variant="body1"
              fontSize="16px"
              color="#2E2E2E"
              fontWeight="300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Box>
        </Box>
        <Box
          height={{ xs: "max-content" }}
          padding="24px"
          borderRadius="5px"
          border="1px solid  #8E8E8E"
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection={{ xs: "column", sm: "row" }}>
          <Image src={joinus_02} alt="join us" style={{ height: "156px" }} />
          <Box
            height={{ lg: "156px" }}
            paddingTop="20px"
            boxSizing="border-box">
            <Typography variant="h2" fontSize="19px" fontWeight="500">
              Beginner’s bonfire camp
            </Typography>
            <Typography
              variant="body1"
              fontSize="16px"
              color="#2E2E2E"
              fontWeight="300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Box>
        </Box>
        <Box
          height={{ xs: "max-content" }}
          padding="24px"
          borderRadius="5px"
          border="1px solid  #8E8E8E"
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection={{ xs: "column", sm: "row" }}>
          <Image src={joinus_03} alt="join us" style={{ height: "156px" }} />
          <Box
            height={{ lg: "156px" }}
            paddingTop="20px"
            boxSizing="border-box">
            <Typography variant="h2" fontSize="19px" fontWeight="500">
              Beginner’s bonfire camp
            </Typography>
            <Typography
              variant="body1"
              fontSize="16px"
              color="#2E2E2E"
              fontWeight="300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default JoinUs;
