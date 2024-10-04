"use client";
import React from "react";
import { useAllStates } from "../hooks";
import Documentation from "./Documentation";
import { RHSPropsTypes } from "./RHS";

const UsersAPIDocumentation = ({
  currDocProp,
  currentDocumentation,
  setCurrDocProp,
  setCurrentDocumentation,
}: RHSPropsTypes) => {
  const { usersApi } = useAllStates();
  return (
    <div>
      {currDocProp === -1 && (
        <p className="text-xl font-sans">
          Click on Users API properties to know about them.
        </p>
      )}
      <Documentation
        data={usersApi}
        currDocProp={currDocProp}
        currentDocumentation={currentDocumentation}
        setCurrDocProp={setCurrDocProp}
        setCurrentDocumentation={setCurrentDocumentation}
        key={`users-api-documentation`}
      />
    </div>
  );
};

export default UsersAPIDocumentation;
