import { Box, Typography } from "@mui/material";

function WorkStream() {
  return (
    <Box
      paddingX={{ lg: "48px", xl: "150px" }}
      paddingY="100px"
      marginBottom="48px"
      style={{
        borderTop: "1px solid #727272",
        background:
          "linear-gradient(180deg, #FFFBE7 0%, rgba(255, 255, 255, 0.00) 126.5%)",
      }}>
      <Typography
        component="h3"
        fontSize="60px"
        fontWeight="600"
        marginBottom="48px">
        Workstreams
      </Typography>

      <Box
        marginTop="48px"
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
        sx={{ "&>div": { marginBottom: "48px" } }}>
        <Box width="300px">
          <Typography
            height="160px"
            component="p"
            color="#574729"
            fontFamily="Lexend Exa"
            fontSize="36px"
            fontWeight="600">
            Ethereum Translation Team
          </Typography>
          <Typography
            component="p"
            marginTop="16px"
            borderTop="1px solid #574729"
            color="#574729"
            fontFamily="Lexend Deca"
            fontSize="22px"
            fontWeight="300">
            Translating Ethereum content alongside other communities, the
            research aims to explore the establishment of new forms of social
            structures.
          </Typography>
        </Box>
        <Box width="300px">
          <Typography
            height="160px"
            component="p"
            color="#574729"
            fontFamily="Lexend Exa"
            fontSize="36px"
            fontWeight="600">
            GreenPill Podcast Co-learning
          </Typography>
          <Typography
            component="p"
            marginTop="16px"
            borderTop="1px solid #574729"
            color="#574729"
            fontFamily="Lexend Deca"
            fontSize="22px"
            fontWeight="300">
            Participants extract key insights and engage in collaborative
            learning based on the podcast.
          </Typography>
        </Box>
        <Box width="300px">
          <Typography
            height="160px"
            component="p"
            color="#574729"
            fontFamily="Lexend Exa"
            fontSize="36px"
            fontWeight="600">
            Uncommons x Nouns
          </Typography>
          <Typography
            component="p"
            marginTop="16px"
            borderTop="1px solid #574729"
            color="#574729"
            fontFamily="Lexend Deca"
            fontSize="22px"
            fontWeight="300">
            The Uncommons community actively engages in Nouns' ecological
            governance.
          </Typography>
        </Box>
        <Box width="300px">
          <Typography
            height="160px"
            component="p"
            color="#574729"
            fontFamily="Lexend Exa"
            fontSize="36px"
            fontWeight="600">
            Desci workshop
          </Typography>
          <Typography
            component="p"
            marginTop="16px"
            borderTop="1px solid #574729"
            color="#574729"
            fontFamily="Lexend Deca"
            fontSize="22px"
            fontWeight="300">
            The Uncommons community organized the Desci Talks series,
            participated in donations related to Desci, and engaged in
            governance for Gitcoin DeSci
          </Typography>
        </Box>
        <Box width="300px">
          <Typography
            height="160px"
            component="p"
            color="#574729"
            fontFamily="Lexend Exa"
            fontSize="36px"
            fontWeight="600">
            WAMO anniversary content writing
          </Typography>
          <Typography
            component="p"
            marginTop="16px"
            borderTop="1px solid #574729"
            color="#574729"
            fontFamily="Lexend Deca"
            fontSize="22px"
            fontWeight="300">
            Examining the Uncommons community's pivotal role in co-creating Wamo
            Summer, with a retrospective on its one-year anniversary
          </Typography>
        </Box>
        <Box width="300px">
          <Typography
            height="160px"
            component="p"
            color="#574729"
            fontFamily="Lexend Exa"
            fontSize="36px"
            fontWeight="600">
            Crypto Nomad
          </Typography>
          <Typography
            component="p"
            marginTop="16px"
            borderTop="1px solid #574729"
            color="#574729"
            fontFamily="Lexend Deca"
            fontSize="22px"
            fontWeight="300">
            Exploring the novel political identity constructed by the 'crypto
            nomads' and the social structures emerging around this identity.
          </Typography>
        </Box>
        <Box width="300px"></Box>
        <Box width="300px"></Box>
        <Box width="300px"></Box>
      </Box>
    </Box>
  );
}

export default WorkStream;
