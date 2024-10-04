import Image from "next/image";
import React from "react";
import LOGO from "@/public/logo.png";
const Header = () => {
  return (
    <div className="w-full h-fit flex flex-row justify-center items-center py-2 gap-2">
      <Image
        src={LOGO}
        width={100}
        height={100}
        quality={100}
        alt="Logo of stoploss.live"
        className="w-16 h-16 mx-4"
      />
      <h1 className="text-5xl font-light w-full h-auto text-center">
        Stoploss.live
      </h1>
      <div className="w-full h-auto text-right px-4 text-xl">
        API Documentation v1.0
      </div>
    </div>
  );
};

export default Header;
