import type { NextPage } from "next";
import Navbar1 from "./navbar1";

const Navbar: NextPage = () => {
  return (
    <header className="self-stretch bg-dark-green flex flex-row items-start justify-start top-[0] z-[99] sticky max-w-full text-center text-13xl text-darkgoldenrod font-section-title">
      <Navbar1 />
    </header>
  );
};

export default Navbar;
