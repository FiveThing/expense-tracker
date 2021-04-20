import React from "react";

import { RiLayoutGridFill, RiSearchLine } from "react-icons/ri";

const Header = () => {
  return (
    <div className="my-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl">Hello,</h1>
        <RiSearchLine className="text-2xl" />
      </div>

      <div className="flex items-center justify-between">
        <h1 className="text-5xl">Juan</h1>
        <RiLayoutGridFill className="text-2xl" />
      </div>
    </div>
  );
};

export default Header;
