import { Box, Typography } from "@mui/material";

function WorkStream() {
  return (
    <Box
      paddingX={{ lg: "48px", xl: "150px", sm: "48px", xs: "48px" }}
      paddingY={{ sm: "100px", xs: "64px" }}
      style={{
        borderTop: "1px solid #727272",
        background:
          "linear-gradient(180deg, #FFFBE7 0%, rgba(255, 255, 255, 0.00) 126.5%)",
      }}>
      <Typography
        component="h3"
        fontSize={{ lg: "60px", sm: "40px", xs: "24px" }}
        fontWeight="600"
        marginBottom={{ sm: "48px", xs: "24px" }}>
        Workstreams
      </Typography>

      <Box
        marginTop="48px"
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
        sx={{ "&>div": { marginBottom: "48px" } }}>
        <Box width={{ lg: "300px", md: "400px", sm: "300px" }}>
          <Typography
            height={{ sm: "160px", xs: "auto" }}
            component="p"
            color="#574729"
            fontSize={{ sm: "36px", xs: "20px" }}
            fontWeight="600">
            Ethereum Translation Team
          </Typography>
          <Typography
            component="p"
            marginTop="16px"
            borderTop="1px solid #574729"
            color="#574729"
            fontSize={{ sm: "22px", xs: "16px" }}
            fontWeight="300">
            Translating Ethereum content alongside other communities, the
            research aims to explore the establishment of new forms of social
            structures.
          </Typography>
        </Box>
        <Box width={{ lg: "300px", md: "400px", sm: "300px" }}>
          <Typography
            height={{ sm: "160px", xs: "auto" }}
            component="p"
            color="#574729"
            fontSize={{ sm: "36px", xs: "20px" }}
            fontWeight="600">
            GreenPill Podcast Co-learning
          </Typography>
          <Typography
            component="p"
            marginTop="16px"
            borderTop="1px solid #574729"
            color="#574729"
            fontSize={{ sm: "22px", xs: "16px" }}
            fontWeight="300">
            Participants extract key insights and engage in collaborative
            learning based on the podcast.
          </Typography>
        </Box>
        <Box width={{ lg: "300px", md: "400px", sm: "300px" }}>
          <Typography
            height={{ sm: "160px", xs: "auto" }}
            component="p"
            color="#574729"
            fontSize={{ sm: "36px", xs: "20px" }}
            fontWeight="600">
            Uncommons x Protector
          </Typography>
          <Typography
            component="p"
            marginTop="16px"
            borderTop="1px solid #574729"
            color="#574729"
            fontSize={{ sm: "22px", xs: "16px" }}
            fontWeight="300">
            Governance through participation: Through collaboration with
            Protector, members of Uncommons are actively participating the
            governance of DAOs, such as Nouns, Optimism, Arbitrum and more...
          </Typography>
        </Box>
        <Box width={{ lg: "300px", md: "400px", sm: "300px" }}>
          <Typography
            height={{ sm: "160px", xs: "auto" }}
            component="p"
            color="#574729"
            fontSize={{ sm: "36px", xs: "20px" }}
            fontWeight="600">
            Desci workshop
          </Typography>
          <Typography
            component="p"
            marginTop="16px"
            borderTop="1px solid #574729"
            color="#574729"
            fontSize={{ sm: "22px", xs: "16px" }}
            fontWeight="300">
            The Uncommons community organized the Desci Talks series,
            participated in donations related to Desci, and engaged in
            governance for Gitcoin DeSci
          </Typography>
        </Box>
        <Box width={{ lg: "300px", md: "400px", sm: "300px" }}>
          <Typography
            height={{ sm: "160px", xs: "auto" }}
            component="p"
            color="#574729"
            fontSize={{ sm: "36px", xs: "20px" }}
            fontWeight="600">
            WAMO anniversary content writing
          </Typography>
          <Typography
            component="p"
            marginTop="16px"
            borderTop="1px solid #574729"
            color="#574729"
            fontSize={{ sm: "22px", xs: "16px" }}
            fontWeight="300">
            Examining the Uncommons community's pivotal role in co-creating Wamo
            Summer, with a retrospective on its one-year anniversary
          </Typography>
        </Box>
        <Box width={{ lg: "300px", md: "400px", sm: "300px" }}>
          <Typography
            height={{ sm: "160px", xs: "auto" }}
            component="p"
            color="#574729"
            fontSize={{ sm: "36px", xs: "20px" }}
            fontWeight="600">
            Crypto Nomad
          </Typography>
          <Typography
            component="p"
            marginTop="16px"
            borderTop="1px solid #574729"
            color="#574729"
            fontSize={{ sm: "22px", xs: "16px" }}
            fontWeight="300">
            Exploring the novel political identity constructed by the 'crypto
            nomads' and the social structures emerging around this identity.
          </Typography>
        </Box>
        <Box
          width={{ lg: "300px", md: "400px", sm: "300px" }}
          style={{ padding: "0", margin: "0" }}></Box>
        <Box
          width={{ lg: "300px", md: "400px", sm: "300px" }}
          style={{ padding: "0", margin: "0" }}></Box>
        <Box
          width={{ lg: "300px", md: "400px", sm: "300px" }}
          style={{ padding: "0", margin: "0" }}></Box>
      </Box>
    </Box>
  );
}

export default WorkStream;
