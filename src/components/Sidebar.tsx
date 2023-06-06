"use client";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

import { FaHome, FaSearch } from "react-icons/fa";

interface ISidebar {
  children: React.ReactNode;
}

const Sidebar: React.FC<ISidebar> = ({ children }) => {
  const pathName = usePathname();

  const paths = useMemo(
    () => [
      { name: "Home", isActive: pathName === "/", href: "/", icon: FaHome },
      {
        name: "Search",
        isActive: pathName === "/Search",
        href: "/Search",
        icon: FaSearch,
      },
    ],
    [pathName]
  );
  return (
    <div className="flex h-full">
      <div className="hidden md:flex">SEARCH</div>
    </div>
  );
};

export default Sidebar;
