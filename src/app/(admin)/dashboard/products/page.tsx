"use client";

import { useState } from "react";

export default function AdminProductPage() {
  const [status, setStatus] = useState("");
  const revalidate = async () => {
    const res = await fetch(
      "http://localhost:3000/api/revalidate?tag=products&secret=RIZAL12345",
      {
        method: "POST",
      }
    );

    if (!res.ok) {
      setStatus("Revalidate Failed");
    } else {
      const responses = await res.json();
      if (responses.revalidate) {
        setStatus("Revalidate Success");
      }
    }

    // window.location.href = "/products";
  };
  return (
    <div className="container m-auto text-center">
      <h1>{status}</h1>
      <button
        className="button border-y-2 bg-blue-300 text-black p-5"
        onClick={revalidate}
      >
        Revalidate
      </button>
    </div>
  );
}
