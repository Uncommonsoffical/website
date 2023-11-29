import { Box, Typography } from "@mui/material";
import community1 from "@/images/community-01.svg";
import community2 from "@/images/community-02.svg";
import Image from "next/image";

function Community() {
  return (
    <Box padding={{ xs: "88px 28px", sm: "88px 48px", xl: "88px 150px" }}>
      <Typography
        variant="h2"
        fontSize={{ sm: "33px", xs: "23px" }}
        fontWeight="600"
        marginBottom={{ xs: "48px" }}>
        Community structure
      </Typography>
      <Typography
        variant="body1"
        fontSize="16px"
        fontWeight="300"
        color="#2E2E2E"
        marginBottom="48px">
        Proposals are the epitome of community development. You can find each of
        our important changes in proposals.
      </Typography>
      <Typography
        variant="h3"
        fontSize={{ sm: "28px", xs: "19px" }}
        fontWeight="600"
        marginBottom="24px">
        Collaboration structure
      </Typography>
      <Typography
        variant="body1"
        fontSize="22px"
        fontWeight="300"
        color="#2E2E2E"
        marginBottom={{ sm: "32px", xs: "48px" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua.
      </Typography>
      <Image
        src={community1}
        alt="community"
        style={{
          maxWidth: "613px",
          width: "100%",
          margin: "0 auto",
          display: "block",
          marginBottom: "64px",
        }}
      />
      <Typography
        variant="h3"
        fontSize={{ sm: "28px", xs: "19px" }}
        fontWeight="600"
        marginBottom="24px">
        Community governance UIP
      </Typography>
      <Typography
        variant="body1"
        fontSize="22px"
        fontWeight="300"
        color="#2E2E2E"
        marginBottom="36px">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua.
      </Typography>
      <Image
        src={community2}
        alt="community"
        style={{
          width: "100%",
          margin: "0 auto",
          display: "block",
          marginBottom: "100px",
        }}
      />

      <Typography
        variant="h2"
        fontSize={{ sm: "33px", xs: "23px" }}
        fontWeight="600"
        marginBottom="48px">
        Community Roles
      </Typography>

      <Box
        display="grid"
        gridTemplateColumns={{ lg: "1fr 1fr" }}
        style={{ gridGap: "32px" }}>
        <Box
          height={{ sm: "380px", xs: "max-content" }}
          padding="24px"
          borderRadius="5px"
          border="1px solid  #8E8E8E"
          display="flex"
          flexDirection="column">
          <Typography variant="h3" fontSize="23px" fontWeight="500">
            Operation(OP)
          </Typography>
          <Typography
            variant="body1"
            marginY="16px"
            fontSize="16px"
            color="#2E2E2E">
            Handles community-wide support matters, assists WS in allocating
            community resources
          </Typography>
          <Box
            display="flex"
            justifyContent="flex-start"
            flexWrap="wrap"
            gap="16px"
            marginBottom="16px">
            <Box
              height="max-content"
              padding="8px 16px"
              fontSize="13px"
              color="#5A5858"
              style={{ backgroundColor: "#D1DEFF", borderRadius: "8px" }}>
              monthly salary
            </Box>
            <Box
              height="max-content"
              padding="8px 16px"
              fontSize="13px"
              color="#5A5858"
              style={{ backgroundColor: "#D1DEFF", borderRadius: "8px" }}>
              Service work
            </Box>
            <Box
              height="max-content"
              padding="8px 16px"
              fontSize="13px"
              color="#5A5858"
              style={{ backgroundColor: "#D1DEFF", borderRadius: "8px" }}>
              Assist WS
            </Box>
            <Box
              height="max-content"
              padding="8px 16px"
              fontSize="13px"
              color="#5A5858"
              style={{ backgroundColor: "#D1DEFF", borderRadius: "8px" }}>
              Everyone can run
            </Box>
          </Box>
          <Box height="100%"></Box>
          <Typography
            variant="h3"
            fontSize="20px"
            fontWeight="500"
            color="#2E2E2E">
            Full time OP:
          </Typography>
          <Typography
            variant="body1"
            marginBottom="24px"
            fontSize="16px"
            color="#2E2E2E">
            3 roles for 6 months, workdays standby
          </Typography>
          <Typography
            variant="h3"
            fontSize="20px"
            fontWeight="500"
            color="#2E2E2E">
            Part-time OP:
          </Typography>
          <Typography variant="body1" fontSize="16px" color="#2E2E2E">
            1 role for 3 months
          </Typography>
        </Box>
        <Box
          height={{ sm: "380px", xs: "max-content" }}
          padding="24px"
          borderRadius="5px"
          border="1px solid  #8E8E8E"
          display="flex"
          flexDirection="column">
          <Typography variant="h3" fontSize="23px" fontWeight="500">
            Work Stream(WS)
          </Typography>
          <Typography
            variant="body1"
            marginY="16px"
            fontSize="16px"
            color="#2E2E2E">
            Highly self-governed, output-oriented workgroup
          </Typography>
          <Box
            display="flex"
            justifyContent="flex-start"
            flexWrap="wrap"
            gap="16px"
            marginBottom="16px">
            <Box
              height="max-content"
              padding="8px 16px"
              fontSize="13px"
              color="#5A5858"
              style={{ backgroundColor: "#D1DEFF", borderRadius: "8px" }}>
              Core members can start
            </Box>
            <Box
              height="max-content"
              padding="8px 16px"
              fontSize="13px"
              color="#5A5858"
              style={{ backgroundColor: "#D1DEFF", borderRadius: "8px" }}>
              Everyone can run
            </Box>
            <Box
              height="max-content"
              padding="8px 16px"
              fontSize="13px"
              color="#5A5858"
              style={{ backgroundColor: "#D1DEFF", borderRadius: "8px" }}>
              Maximum 5 WS/year
            </Box>
            <Box
              height="max-content"
              padding="8px 16px"
              fontSize="13px"
              color="#5A5858"
              style={{ backgroundColor: "#D1DEFF", borderRadius: "8px" }}>
              Members vote for passing funds
            </Box>
          </Box>
          <Box height="100%"></Box>
          <Typography
            variant="h3"
            fontSize="20px"
            fontWeight="500"
            color="#2E2E2E">
            Self-governed:
          </Typography>
          <Typography
            variant="body1"
            marginBottom="24px"
            fontSize="16px"
            color="#2E2E2E">
            Need milestones & deliverables & budget set and published
          </Typography>
          <Typography
            variant="h3"
            fontSize="20px"
            fontWeight="500"
            color="#2E2E2E">
            Reward with progress:
          </Typography>
          <Typography variant="body1" fontSize="16px" color="#2E2E2E">
            Only gets funded after progress evaluation
          </Typography>
        </Box>
        <Box
          height={{ sm: "380px", xs: "max-content" }}
          padding="24px"
          borderRadius="5px"
          border="1px solid  #8E8E8E"
          display="flex"
          flexDirection="column">
          <Typography variant="h3" fontSize="23px" fontWeight="500">
            Playstream(PS)
          </Typography>
          <Typography
            variant="body1"
            marginY="16px"
            fontSize="16px"
            color="#2E2E2E">
            Light-weighted output-oriented group
          </Typography>
          <Box
            display="flex"
            justifyContent="flex-start"
            flexWrap="wrap"
            gap="16px"
            marginBottom="16px">
            <Box
              height="max-content"
              padding="8px 16px"
              fontSize="13px"
              color="#5A5858"
              style={{ backgroundColor: "#D1DEFF", borderRadius: "8px" }}>
              Everyone can start
            </Box>
            <Box
              height="max-content"
              padding="8px 16px"
              fontSize="13px"
              color="#5A5858"
              style={{ backgroundColor: "#D1DEFF", borderRadius: "8px" }}>
              Bounty instead of funds
            </Box>
            <Box
              height="max-content"
              padding="8px 16px"
              fontSize="13px"
              color="#5A5858"
              style={{ backgroundColor: "#D1DEFF", borderRadius: "8px" }}>
              Weekly updates on Meeting
            </Box>
            <Box
              height="max-content"
              padding="8px 16px"
              fontSize="13px"
              color="#5A5858"
              style={{ backgroundColor: "#D1DEFF", borderRadius: "8px" }}>
              PS -&gt; WS when feasible
            </Box>
          </Box>
          <Box height="100%"></Box>
          <Typography
            variant="h3"
            fontSize="20px"
            fontWeight="500"
            color="#2E2E2E">
            Main Focus:
          </Typography>
          <Typography
            variant="body1"
            marginBottom="24px"
            fontSize="16px"
            color="#2E2E2E">
            3 roles for 6 months, workdays standby
          </Typography>
          <Typography
            variant="h3"
            fontSize="20px"
            fontWeight="500"
            color="#2E2E2E">
            Can require tools to assist:
          </Typography>
          <Typography variant="body1" fontSize="16px" color="#2E2E2E">
            ChatGPT Plus, Midjourney, ...
          </Typography>
        </Box>
        <Box
          height={{ sm: "380px", xs: "max-content" }}
          padding="24px"
          borderRadius="5px"
          border="1px solid  #8E8E8E"
          display="flex"
          flexDirection="column"
          alignItems="flex-start">
          <Typography variant="h3" fontSize="23px" fontWeight="500">
            Content co-creation(CCC)
          </Typography>
          <Typography
            variant="body1"
            marginY="16px"
            fontSize="16px"
            color="#2E2E2E">
            A content co-creation mechanism
          </Typography>
          <Box
            display="flex"
            justifyContent="flex-start"
            flexWrap="wrap"
            gap="16px"
            marginBottom="16px">
            <Box
              height="max-content"
              padding="8px 16px"
              fontSize="13px"
              color="#5A5858"
              style={{ backgroundColor: "#D1DEFF", borderRadius: "8px" }}>
              Set out for vibrant vibe
            </Box>
            <Box
              height="max-content"
              padding="8px 16px"
              fontSize="13px"
              color="#5A5858"
              style={{ backgroundColor: "#D1DEFF", borderRadius: "8px" }}>
              Content form unlimited
            </Box>
            <Box
              height="max-content"
              padding="8px 16px"
              fontSize="13px"
              color="#5A5858"
              style={{ backgroundColor: "#D1DEFF", borderRadius: "8px" }}>
              Everything related to public goods/ crypto thoughts
            </Box>
          </Box>
          <Box height="100%"></Box>
          <Typography
            variant="h3"
            fontSize="20px"
            fontWeight="500"
            color="#2E2E2E">
            Sparkle CCC:
          </Typography>
          <Typography
            variant="body1"
            marginBottom="24px"
            fontSize="16px"
            color="#2E2E2E">
            No reviews, members create content out of a brainstorm or such
          </Typography>
          <Typography
            variant="h3"
            fontSize="20px"
            fontWeight="500"
            color="#2E2E2E">
            Co-learn & Co-create CCC:
          </Typography>
          <Typography variant="body1" fontSize="16px" color="#2E2E2E">
            Simplify, teach, review, and conclude notions
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Community;
