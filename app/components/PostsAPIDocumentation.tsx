"use client";
import React from "react";
import { useAllStates } from "../hooks";
import Documentation from "./Documentation";
import { RHSPropsTypes } from "./RHS";

const PostsAPIDocumentation = ({
  currDocProp,
  currentDocumentation,
  setCurrDocProp,
  setCurrentDocumentation,
}: RHSPropsTypes) => {
  const { postsApi } = useAllStates();
  return (
    <div>
      {currDocProp === -1 && (
        <p className="text-xl font-sans">
          Click on Posts API properties to know about them.
        </p>
      )}
      <Documentation
        data={postsApi}
        currDocProp={currDocProp}
        currentDocumentation={currentDocumentation}
        setCurrDocProp={setCurrDocProp}
        setCurrentDocumentation={setCurrentDocumentation}
        key={`posts-api-documentation`}
      />
    </div>
  );
};

export default PostsAPIDocumentation;
