"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
  const { data: session, status }: { data: any; status: string } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (status === "unauthenticated" || session?.user.role !== "admin") {
      router.push("/login");
    } else {
      if (session !== undefined && session?.user.role !== "admin") {
        router.push("/");
      }
    }
  }, [status, router, session, session?.user.role]);
  return (
    <div className="h-60 flex justify-center items-center bg-slate-500 p-3 rounded-[12px] w-full">
      Dashboard
    </div>
  );
}
