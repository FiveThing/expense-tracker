import React from "react";
import { MdAddBox } from "react-icons/md";
import { BsHouseFill } from "react-icons/bs";
import { DiGoogleAnalytics } from "react-icons/di";
import { FaUser } from "react-icons/fa";
const Navbar = () => {
  const cta = [
    {
      id: 1,
      button: <MdAddBox />,
      alert: "ADD",
    },
    {
      id: 2,
      button: <BsHouseFill />,
      alert: "HOME",
    },
    {
      id: 3,
      button: <DiGoogleAnalytics />,
      alert: "ANALYTICS",
    },
    {
      id: 4,
      button: <FaUser />,
      alert: "USER",
    },
  ];

  return (
    <div className="flex flex-col h-screen justify-center ">
      {cta.map((btn) => (
        <span
          className="text-white m-6 text-3xl hover:text-blue-400    "
          onClick={() => alert(`${btn.alert}`)}
        >
          {btn.button}
        </span>
      ))}
    </div>
  );
};

export default Navbar;
