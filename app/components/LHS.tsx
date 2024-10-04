"use client";
import React, { useEffect, useState } from "react";
import { RHSPropsTypes } from "./RHS";
import { useAllStates } from "../hooks";

import {
  StoplossDocumentation,
  IPOAPIDocumentation,
  MiddlewaresDocumentation,
  PathsDocumentation,
  PostsAPIDocumentation,
  UsersAPIDocumentation,
} from ".";

const LHS = ({
  currentDocumentation,
  setCurrentDocumentation,
  currDocProp,
  setCurrDocProp,
}: RHSPropsTypes) => {
  const data = useAllStates();
  const { ipoApi, middlewares, paths, postsApi, usersApi } = data;

  return (
    <div className="w-full h-auto">
      <h1 className="w-full h-auto text-2xl font-bold text-center">
        {currentDocumentation !== "ipo"
          ? currentDocumentation
              .split("")[0]
              .toUpperCase()
              .concat(currentDocumentation.slice(1))
          : "IPO"}
        &nbsp;API&nbsp;Documentation
      </h1>
      {/* documentation based on current documentation */}
      {currentDocumentation === "stoploss" && <StoplossDocumentation />}
      {currentDocumentation === "ipo" && (
        <IPOAPIDocumentation
          currDocProp={currDocProp}
          currentDocumentation={currentDocumentation}
          setCurrDocProp={setCurrDocProp}
          setCurrentDocumentation={setCurrentDocumentation}
        />
      )}
      {currentDocumentation === "middlewares" && (
        <MiddlewaresDocumentation
          currDocProp={currDocProp}
          currentDocumentation={currentDocumentation}
          setCurrDocProp={setCurrDocProp}
          setCurrentDocumentation={setCurrentDocumentation}
        />
      )}
      {currentDocumentation === "paths" && (
        <PathsDocumentation
          currDocProp={currDocProp}
          currentDocumentation={currentDocumentation}
          setCurrDocProp={setCurrDocProp}
          setCurrentDocumentation={setCurrentDocumentation}
        />
      )}
      {currentDocumentation === "posts" && (
        <PostsAPIDocumentation
          currDocProp={currDocProp}
          currentDocumentation={currentDocumentation}
          setCurrDocProp={setCurrDocProp}
          setCurrentDocumentation={setCurrentDocumentation}
        />
      )}
      {currentDocumentation === "users" && (
        <UsersAPIDocumentation
          currDocProp={currDocProp}
          currentDocumentation={currentDocumentation}
          setCurrDocProp={setCurrDocProp}
          setCurrentDocumentation={setCurrentDocumentation}
        />
      )}
    </div>
  );
};

export default LHS;
