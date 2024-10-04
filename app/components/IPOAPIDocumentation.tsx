"use client";
import React from "react";
import { useAllStates } from "../hooks";
import Documentation from "./Documentation";
import { RHSPropsTypes } from "./RHS";

const IPOAPIDocumentation = ({
  currDocProp,
  currentDocumentation,
  setCurrDocProp,
  setCurrentDocumentation,
}: RHSPropsTypes) => {
  const { ipoApi } = useAllStates();
  return (
    <div className="w-full h-auto">
      {currDocProp === -1 && (
        <p className="text-xl font-sans">
          Click on IPO API properties to know about them.
        </p>
      )}
      <Documentation
        data={ipoApi}
        currDocProp={currDocProp}
        currentDocumentation={currentDocumentation}
        setCurrDocProp={setCurrDocProp}
        setCurrentDocumentation={setCurrentDocumentation}
        key={`ipo-api-documentation`}
      />
    </div>
  );
};

export default IPOAPIDocumentation;
