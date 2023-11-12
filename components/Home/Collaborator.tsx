import { Box, Typography } from "@mui/material";

function Collaborator() {
  return (
    <Box
      paddingX={{ lg: "48px", xl: "150px" }}
      paddingY="100px"
      style={{
        borderTop: "1px solid #727272",
        background:
          "linear-gradient(174deg, #FFF1FD 5.06%, rgba(255, 252, 255, 0.77) 89.94%, rgba(255, 255, 255, 0.00) 126.68%)",
      }}>
      <Typography
        component="h3"
        fontSize="60px"
        fontWeight="600"
        marginBottom="48px">
        Our collaborator
      </Typography>
    </Box>
  );
}

export default Collaborator;
