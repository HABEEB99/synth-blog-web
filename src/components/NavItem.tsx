import Link from "next/link";
import { IconType } from "react-icons/lib";
import { twMerge } from "tailwind-merge";

interface INavItemProp {
  // name: "Home", isActive: pathName === "/", href: "/", icon: FaHome
  name: string;
  isActive: boolean;
  href: string;
  Icon: IconType;
}

const NavItem: React.FC<INavItemProp> = ({ name, isActive, href, Icon }) => {
  return (
    <Link
      href={href}
      className={twMerge(
        `flex items-center space-x-3 hover:text-btn transition  ${
          isActive ? "text-btn" : "text-white"
        }`
      )}
    >
      <Icon />
      <span>{name}</span>
    </Link>
  );
};

export default NavItem;
