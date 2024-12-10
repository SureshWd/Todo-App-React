import React from "react";

const Header = () => {
  return (
    <div className="flex gap-4 justify-between shadow-lg  px-8 py-4 ">
      <div className="logo flex gap-2 items-center cursor-pointer">
        <img src="/favicon.ico" alt="" className="h-[20px] w-[20px]" />
        <h2 className="font-semibold">TodoApp</h2>
      </div>
      <ul className="links hidden xs:flex gap-4 ">
        <a href="/">
          <li>Home</li>
        </a>
        <a href="https://github.com/SureshWd" target="_blank">
          <li>Github</li>
        </a>
        <a href="https://www.linkedin.com/in/suresh-kumar-tiwari-930302245/" target="_blank">
          <li>Linkedin</li>
        </a>
      </ul>
    </div>
  );
};

export default Header;
