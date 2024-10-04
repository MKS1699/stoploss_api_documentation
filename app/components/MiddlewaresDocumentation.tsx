"use client";
import React from "react";
import { useAllStates } from "../hooks";
import Documentation from "./Documentation";
import { RHSPropsTypes } from "./RHS";

const MiddlewaresDocumentation = ({
  currDocProp,
  currentDocumentation,
  setCurrDocProp,
  setCurrentDocumentation,
}: RHSPropsTypes) => {
  const { middlewares } = useAllStates();
  return (
    <div>
      {currDocProp === -1 && (
        <p className="text-xl font-sans">
          Click on Middleware API properties to know about them.
        </p>
      )}
      <Documentation
        data={middlewares}
        currDocProp={currDocProp}
        currentDocumentation={currentDocumentation}
        setCurrDocProp={setCurrDocProp}
        setCurrentDocumentation={setCurrentDocumentation}
        key={`middlewares-documentation`}
      />
    </div>
  );
};

export default MiddlewaresDocumentation;
