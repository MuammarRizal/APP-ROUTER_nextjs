import React, { ReactNode } from "react";

const AboutLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <nav className="h-screen w-32 bg-slate-400 fixed z-10 top-100 right-0">
        <ul className="text-white flex flex-col items-center gap-5 py-10">
          <li>Home</li>
          <li>About</li>
          <li>Layout</li>
        </ul>
      </nav>
      <div className="main-about">{children}</div>
    </>
  );
};

export default AboutLayout;
