"use client";
import React from "react";
import { useAllStates } from "../hooks";
import Documentation from "./Documentation";
import { RHSPropsTypes } from "./RHS";

const PathsDocumentation = ({
  currDocProp,
  currentDocumentation,
  setCurrDocProp,
  setCurrentDocumentation,
}: RHSPropsTypes) => {
  const { paths } = useAllStates();
  return (
    <div>
      {currDocProp === -1 && (
        <p className="text-xl font-sans">
          Click on Paths API properties to know about them.
        </p>
      )}
      <Documentation
        data={paths}
        currDocProp={currDocProp}
        currentDocumentation={currentDocumentation}
        setCurrDocProp={setCurrDocProp}
        setCurrentDocumentation={setCurrentDocumentation}
        key={`paths-api-documentation`}
      />
    </div>
  );
};

export default PathsDocumentation;
