import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Search className="w-4 h-4 hover:text-btn cursor-pointer" />
      </PopoverTrigger>
      <PopoverContent className="w-60 h-10 mt-6 bg-slate-400 rounded-md flex items-center justify-center z-[999]">
        <form className="flex items-center justify-center w-full h-full px-3">
          <div className="flex items-center justify-center space-x-1">
            <Search className="w-4 h-4 hover:text-btn cursor-pointer" />
            <input
              type="text"
              placeholder="Search Posts"
              className="flex-1 outline-none bg-transparent text-gray-200"
            />
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
};

export default SearchBar;
