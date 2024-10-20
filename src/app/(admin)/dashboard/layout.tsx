import { ReactNode } from "react";

export default function Layout({
  children,
  products,
  analytics,
  payments,
}: {
  children: ReactNode;
  products: ReactNode;
  analytics: ReactNode;
  payments: ReactNode;
}) {
  return (
    <div className="p-2">
      <div className="w-full">{children}</div>
      <div className="w-full flex justify-center items-center gap-10 mt-2">
        {products}
        {analytics}
      </div>
      <div className="w-full">{payments}</div>
    </div>
  );
}
