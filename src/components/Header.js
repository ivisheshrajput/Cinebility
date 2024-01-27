import React from "react";
import NameLogo from "../assets/Cinebility-Block.svg";

const Header = () => {
  return (
    <div className="fixed z-50 p-8      ">
      <img src={NameLogo} alt="" className="w-60" />
    </div>
  );
};

export default Header;
