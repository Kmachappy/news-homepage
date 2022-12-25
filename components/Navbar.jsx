import Link from "next/link";
import Image from "next/image";

import NavLinks from "../data/NavLinks";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center border border-red-500">
      <div className="flex">
        <Image
          src="/images/logo.svg"
          className=""
          width={60}
          height={60}
          alt="logo"
        />
      </div>
      <div className=" space-x-8">
        {NavLinks.map((link) => (
          <Link href={link.href} key={link.label} className="">
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
