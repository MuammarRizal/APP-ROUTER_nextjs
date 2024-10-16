import React, { ReactNode } from "react";

const ProfileLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <p className="bg-red-500 text-white">Ini dari halaman layout page</p>
      {children}
    </div>
  );
};

export default ProfileLayout;
