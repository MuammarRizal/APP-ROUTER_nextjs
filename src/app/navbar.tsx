import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { status }: { status: string } = useSession();
  return (
    <nav className="flex bg-slate-500 py-5 px-10">
      <h2 className="text-slate-800 mr-8 font-bold">Logo</h2>
      <ul className="flex text-slate-300 gap-8 items-center">
        <Link
          href={"/"}
          className={pathname === "/" ? "text-blue-700" : "text-white"}
        >
          <li className="cursor-pointer">Home</li>
        </Link>
        <Link
          href={"/about"}
          className={pathname === "/about" ? "text-blue-700" : "text-white"}
        >
          <li className="cursor-pointer">About</li>
        </Link>
        <Link
          href={"/about/profile"}
          className={
            pathname === "/about/profile" ? "text-blue-700" : "text-white"
          }
        >
          <li className="cursor-pointer">Profile</li>
        </Link>
      </ul>
      {status === "authenticated" ? (
        <div className="button-auth ms-auto" onClick={() => signOut()}>
          <button className="bg-blue-500 text-white font-bold py-1 px-4 rounded hover:bg-blue-700">
            Logout
          </button>
        </div>
      ) : (
        <div className="button-auth ms-auto" onClick={() => signIn()}>
          <button className="bg-blue-500 text-white font-bold py-1 px-4 rounded hover:bg-blue-700">
            Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
