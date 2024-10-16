"use client";
import { useState } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState(0);
  return (
    <div className="">
      {/* test template */}
      {/* <div className="template-test">
        <div className="container bg-blue-500 text-center h-20">
          <p>Template State : {state}</p>
          <button
            className="border-emerald-400 border-4"
            onClick={() => setState(state + 1)}
          >
            +
          </button>
        </div>
      </div> */}
      {children}
    </div>
  );
}
