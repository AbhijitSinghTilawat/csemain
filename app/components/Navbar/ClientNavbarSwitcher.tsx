"use client";

import { usePathname } from "next/navigation";
import HomeNavbar from "./HomeNavbar";
import Navbar from "./Navbar";

export default function ClientNavbarSwitcher() {
  const path = usePathname() || "/";

  // Show HomeNavbar ONLY on exact root path "/"
  if (path === "/") return <HomeNavbar />;

  // Otherwise show your existing full Navbar component
  return <Navbar />;
}
