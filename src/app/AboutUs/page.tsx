"use client";
import { Box, Typography } from "@mui/material";
import { useCallback, useState } from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Image from "next/image";

import about_01 from "@/images/about-01.png";
import about_02 from "@/images/about-02.png";
import about_03 from "@/images/about-03.png";
import { useStore } from "@/store";
import Link from "next/link";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  padding: 0,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  padding: 0,
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper": {
    marginRight: "16px",
  },
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginTop: 0,
    marginBottom: 0,
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  paddingLeft: "32px",
  color: "#5A5858",
  fontWeight: 300,
}));

function AboutUs() {
  const { isPhone } = useStore();
  const imgWidthSize = isPhone ? "100%" : "355px";
  const [expanded, setExpanded] = useState<number>(1);

  const handleChange = useCallback(
    (key: number) => {
      setExpanded(key);
    },
    [setExpanded]
  );

  return (
    <Box padding={{ xs: "40px 28px", sm: "88px 48px", xl: "88px 150px" }}>
      <Typography
        variant="h1"
        fontSize="40px"
        fontWeight="600"
        marginBottom={{ lg: "48px" }}>
        About us
      </Typography>
      <Typography
        variant="body1"
        fontSize="22px"
        fontWeight="300"
        color="#2E2E2E"
        marginBottom="16px">
        Uncommons is a public sphere where a collective of Commons Builders
        explores Crypto Thoughts together. It was formerly known as GreenPill
        Chinese Community.
      </Typography>
      <Accordion expanded={expanded === 1} onChange={() => handleChange(1)}>
        <AccordionSummary>
          <Typography color="#2E2E2E" fontSize="22px" fontWeight="300">
            What is Public Sphere?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The concept of the Public Sphere, originating from the German term
            'Öffentlichkeit', embodies notions of openness and transparency.
            While not originally coined by Jürgen Habermas, his seminal work
            "The Structural Transformation of the Public Sphere" is regarded as
            the authoritative genesis of Public Sphere theory, embedding it as a
            universal concept in European political discourse. In his work,
            Habermas equates the public sphere with publicness, defining it as
            "a realm in our social life where public opinion can be formed." He
            further describes it as "a domain where individuals, assembled into
            a public body, challenge the controlled public realm exerted by
            public authorities, creating a space for discourse on issues like
            commodity exchange and social labor, which are fundamentally private
            but retain a public character."
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 2} onChange={() => handleChange(2)}>
        <AccordionSummary>
          <Typography color="#2E2E2E" fontSize="22px" fontWeight="300">
            What is Public Goods?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Public goods are characterized by their non-competitive and
            non-exclusionary nature, allowing unrestricted access to all. In the
            realm of Web3, the significance of public goods is paramount. These
            include clean air, water, libraries, and even the internet and
            open-source software. Their hallmark is universal accessibility,
            where one person's use does not detrimentally affect another's.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 3} onChange={() => handleChange(3)}>
        <AccordionSummary>
          <Typography color="#2E2E2E" fontSize="22px" fontWeight="300">
            What is Crypto Toughts?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The Web3.0 landscape is rife with decentralized politico-economic
            movements, exploring grand visions like public goods, sovereign
            individuals, UBI, network states, creator economies, Ostrom’s school
            of public choice, radical markets, Harberger taxes, and more. At
            Uncommons, we aspire to foster a community of internet citizens who
            are intrigued by radical 'crypto thoughts.' Our goal is to explore
            the feasibility of public goods, the journey to becoming a sovereign
            individual, discussing radical markets through the lens of Austrian
            School monetary theory, and the potential integration of Harberger
            taxes into Web3. We aim to explore whether DAOs can strike a balance
            between Leviathan and privatization in addressing the tragedy of the
            commons, akin to Ostrom's concept of self-governance.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Typography
        variant="h2"
        fontSize="40px"
        fontWeight="600"
        marginTop="100px"
        marginBottom="48px">
        Learn more
      </Typography>

      <Box
        display="flex"
        gap="56px"
        justifyContent="space-between"
        flexWrap={{ lg: "nowrap", xs: "wrap" }}>
        <Box>
          <Link
            href="https://www.notion.so/uncommons/New-branding-story-f31aa473654c45c386404e248ab5e789?pvs=4"
            target="_blank"
            style={{ color: "#000", textDecoration: "none" }}>
            <Image
              src={about_01}
              style={{ width: imgWidthSize, height: "auto", flexShrink: 0 }}
              alt="about us"
            />

            <Typography
              variant="h3"
              fontSize="24px"
              fontWeight="700"
              marginTop="24px">
              New branding story
            </Typography>
          </Link>
        </Box>
        <Box>
          <Link
            href="https://drive.google.com/file/d/1e0vACcdEzHLoVAKUdHdH0S7qEpOuc2hm/view?usp=sharing"
            target="_blank"
            style={{ color: "#000", textDecoration: "none" }}>
            <Image
              src={about_02}
              style={{ width: imgWidthSize, height: "auto", flexShrink: 0 }}
              alt="about us"
            />

            <Typography
              variant="h3"
              fontSize="24px"
              fontWeight="700"
              marginTop="24px">
              GreenPill CN
            </Typography>
          </Link>
        </Box>
        <Box>
          <Link
            href="https://drive.google.com/file/d/1eL-M4FfxQO61Sg4sUQK1x559FPGJa1EI/view?usp=drivesdk"
            target="_blank"
            style={{ color: "#000", textDecoration: "none" }}>
            <Image
              src={about_03}
              style={{ width: imgWidthSize, height: "auto", flexShrink: 0 }}
              alt="about us"
            />
            <Typography
              variant="h3"
              fontSize="24px"
              fontWeight="700"
              marginTop="24px">
              ImpactDAOs
            </Typography>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default AboutUs;
