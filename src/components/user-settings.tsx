import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Link from "next/link";
import { User } from "lucide-react";

const UserSettings = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <User className="w-4 h-4 font-bold hover:text-btn cursor-pointer" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <Link href="/login">Login</Link>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <Link href="/register">Register</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserSettings;
