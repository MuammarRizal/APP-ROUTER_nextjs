import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex bg-slate-500 py-5 px-10">
      <h2 className="text-slate-800 mr-8 font-bold">Logo</h2>
      <ul className="flex text-slate-300 gap-8">
        <Link href={"/"}>
          <li className="cursor-pointer">Home</li>
        </Link>
        <Link href={"/about"}>
          <li className="cursor-pointer">About</li>
        </Link>
        <Link href={"/about/profile"}>
          <li className="cursor-pointer">Profile</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
