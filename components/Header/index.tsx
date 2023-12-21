"use client";
import { Box, Menu, MenuItem, Typography } from "@mui/material";
import Image from "next/image";
import logo from "@/images/logo.svg";
import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useState } from "react";

const navList = [
    {
        text: "About",
        href: "/AboutUs",
    },
    {
        text: "Content",
        href: "/Content",
    },
    {
        text: "Community",
        href: "/Community",
    },
    {
        text: "Database",
        href: "/",
    },
    {
        text: "Join Us",
        href: "/JoinUs",
    },
];

function Header() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box
            paddingX={{ xs: "24px", sm: "48px" }}
            paddingY="24px"
            display="flex"
            justifyContent="space-between"
            borderBottom="1px solid #727272"
        >
            <Box display="flex" alignItems="center">
                <Link href="/">
                    <Image
                        src={logo}
                        alt="logo"
                        style={{ paddingRight: "16px", width: "134px" }}
                    />
                </Link>
                {navList.map((nav) => (
                    <Link
                        className="hidden lg:block"
                        key={nav.text}
                        href={nav.href}
                        style={{
                            paddingLeft: "16px",
                            paddingRight: "16px",
                            color: "#2E2E2E",
                            textDecoration: "none",
                        }}
                    >
                        <Typography
                            sx={{
                                "&:hover": {
                                    textDecoration: "underline",
                                },
                            }}
                        >
                            {nav.text}
                        </Typography>
                    </Link>
                ))}
            </Box>
            {
                <div className="hidden lg:block">
                    <ConnectButton
                        accountStatus="avatar"
                        showBalance={false}
                        label="Connect Wallet "
                    />
                </div>
            }
            <div className="lg:hidden">
                <Box display="flex" alignItems="center">
                    <ConnectButton
                        showBalance={false}
                        label="Connect "
                        accountStatus="avatar"
                        chainStatus="none"
                    />
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{}}
                    >
                        {navList.map((nav) => (
                            <MenuItem key={nav.text} onClick={handleClose}>
                                <Link
                                    href={nav.href}
                                    style={{
                                        paddingLeft: "16px",
                                        paddingRight: "16px",
                                        color: "#2E2E2E",
                                        textDecoration: "none",
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            "&:hover": {
                                                textDecoration: "underline",
                                            },
                                        }}
                                    >
                                        {nav.text}
                                    </Typography>
                                </Link>
                            </MenuItem>
                        ))}
                    </Menu>
                    <Typography
                        display="flex"
                        alignItems="center"
                        marginLeft="12px"
                        onClick={handleClick}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                        >
                            <g clipPath="url(#clip0_470_1135)">
                                <path
                                    d="M6.25 20H33.75"
                                    stroke="#2E2E2E"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M6.25 10H33.75"
                                    stroke="#2E2E2E"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M6.25 30H33.75"
                                    stroke="#2E2E2E"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_470_1135">
                                    <rect width="40" height="40" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </Typography>
                </Box>
            </div>
        </Box>
    );
}

export default Header;
