"use client";
import React, { useEffect, useState } from "react";
import RHS from "./RHS";
import LHS from "./LHS";

// data import
import { useAllStates } from "../hooks";

const Body = () => {
  const data = useAllStates();
  const [currentDocumentation, setCurrentDocumentation] = useState<
    "paths" | "posts" | "users" | "middlewares" | "ipo" | "stoploss"
  >("stoploss");
  const [currDocProp, setCurrDocProp] = useState<number>(-1);
  return (
    <div className="w-full flex-1 grid grid-cols-[20%_1%_79%] grid-rows-1 gap-2">
      <RHS
        currentDocumentation={currentDocumentation}
        setCurrentDocumentation={setCurrentDocumentation}
        currDocProp={currDocProp}
        setCurrDocProp={setCurrDocProp}
      />
      {/* line */}
      <div className="w-[6px] h-full bg-gradient-to-b from-fuchsia-600 via-violet-600 to-pink-600 rounded-full"></div>
      <LHS
        currentDocumentation={currentDocumentation}
        setCurrentDocumentation={setCurrentDocumentation}
        currDocProp={currDocProp}
        setCurrDocProp={setCurrDocProp}
      />
    </div>
  );
};

export default Body;
