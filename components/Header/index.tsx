import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import logo from "@/images/logo.svg";
import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const navList = [
  {
    text: "About",
    href: "/",
  },
  {
    text: "Content",
    href: "/",
  },
  {
    text: "Community",
    href: "/",
  },
  {
    text: "Database",
    href: "/",
  },
  {
    text: "Join Us",
    href: "/",
  },
];

function Header() {
  return (
    <Box
      paddingX="48px"
      paddingY="24px"
      display="flex"
      justifyContent="space-between">
      <Box display="flex" alignItems="center">
        <Image
          src={logo}
          alt="logo"
          style={{ paddingRight: "16px", width: "134px" }}
        />
        {navList.map((nav) => (
          <Link
            key={nav.text}
            href={nav.href}
            style={{
              paddingLeft: "16px",
              paddingRight: "16px",
              color: "#2E2E2E",
              textDecoration: "none",
            }}>
            <Typography
              sx={{
                "&:hover": {
                  textDecoration: "underline",
                },
              }}>
              {nav.text}
            </Typography>
          </Link>
        ))}
      </Box>
      <ConnectButton
        accountStatus="avatar"
        showBalance={false}
        label="Connect Wallet "
      />
    </Box>
  );
}

export default Header;
