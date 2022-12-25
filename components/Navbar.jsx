import Link from "next/link";

import NavLinks from "../data/NavLinks";

const Navbar = () => {
  return (
    <div>
      <div></div>
      <div>
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
