import React from "react";

import Menuleft from "./Components/leftPage/Menuleft";
import { Outlet } from "react-router";

const AccountDetails = () => {
  return (
    <div className="mt-10 flex md:flex-row flex-col gap-4">
      {/* Menüler */}
      <div className="w-[250px] flex flex-col gap-3">
        <Menuleft />
      </div>

      {/* Gösterilecek içerik */}
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default AccountDetails;
