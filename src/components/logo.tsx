import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image src="/logo.png" alt="App Logo" width={20} height={20} />
    </Link>
  );
};

export default Logo;
