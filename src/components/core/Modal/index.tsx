"use client";
import { useRouter } from "next/navigation";
import React, { MouseEventHandler, ReactNode, useRef } from "react";

const Modal = ({ children }: { children: ReactNode }) => {
  const overlay = useRef(null);
  const router = useRouter();
  const closeClick: MouseEventHandler = (event) => {
    if (event.target === overlay.current) {
      router.back();
    }
  };
  return (
    <div
      ref={overlay}
      className="fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/60 "
      onClick={closeClick}
    >
      <div className="absolute top-1/2 h-[98vh] left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 bg-white rounded-lg">
        {children}
      </div>
    </div>
  );
};

export default Modal;
