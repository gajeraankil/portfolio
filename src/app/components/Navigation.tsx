"use client";

import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import DraftsIcon from "@mui/icons-material/Drafts";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

export default function Navigation() {
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    router.push(newValue);
  };

  return (
    <BottomNavigation
      value={pathname}
      onChange={handleChange}
      sx={{
        position: "fixed",
        zIndex: 9,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#2b2a2a",
      }}
    >
      <BottomNavigationAction
        label="Home"
        value="/"
        icon={<HomeIcon />}
        sx={{ color: "#fff" }}
      />
      <BottomNavigationAction
        label="About"
        value="/about"
        icon={<PersonIcon />}
        sx={{ color: "#fff" }}
      />
      {/* <BottomNavigationAction
        label="Portfolio"
        value="/portfolio"
        icon={<BusinessCenterIcon />}
        sx={{ color: "#fff" }}
      /> */}
      <BottomNavigationAction
        label="Contact"
        value="/contact"
        icon={<DraftsIcon />}
        sx={{ color: "#fff" }}
      />
    </BottomNavigation>
  );
}
