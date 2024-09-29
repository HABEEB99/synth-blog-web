import { Logo, SearchBar, ThemeToggler, UserSettings } from "@/components";

const Header = () => {
  return (
    <header
      className="w-screen h-14 sticky z-[100]  top-0 backdrop-blur-lg 
  transition-all shadow-sm shadow-modal bg-light/70 dark:bg-dark/70"
    >
      <div className="flex items-center justify-between wrapper w-full h-full">
        <Logo />

        <div className="flex items-center justify-center space-x-3">
          <SearchBar />
          <ThemeToggler />
          <UserSettings />
        </div>
      </div>
    </header>
  );
};

export default Header;
