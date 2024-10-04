"use client";

import { useEffect, useState } from "react";
import { useAllStates } from "../hooks";
import { IoIosArrowDropdown } from "react-icons/io";

export interface RHSPropsTypes {
  currentDocumentation:
    | "paths"
    | "posts"
    | "users"
    | "middlewares"
    | "ipo"
    | "stoploss";
  currDocProp: number;
  setCurrentDocumentation: (
    documentation: RHSPropsTypes["currentDocumentation"]
  ) => void;
  setCurrDocProp: (doc: RHSPropsTypes["currDocProp"]) => void;
}
const RHS = ({
  currentDocumentation,
  currDocProp,
  setCurrentDocumentation,
  setCurrDocProp,
}: RHSPropsTypes) => {
  const data: any = useAllStates();
  const {
    postsApiNames,
    pathsNames,
    ipoApiNames,
    usersApiNames,
    middlewaresNames,
  } = data;

  const [showPathsMenu, setShowPathsMenu] = useState<boolean>(false);
  const [showPostsMenu, setShowPostsMenu] = useState<boolean>(false);
  const [showIPOMenu, setShowIPOMenu] = useState<boolean>(false);
  const [showUsersMenu, setShowUsersMenu] = useState<boolean>(false);
  const [showMiddlewaresMenu, setShowMiddlewaresMenu] =
    useState<boolean>(false);

  function handleCurrentDocumentation({
    menu = null,
    menuStatus,
  }: {
    menuStatus: boolean;
    menu: "ipo" | "posts" | "users" | "paths" | "middlewares" | null;
  }): void {
    if (menuStatus && menu !== null) {
      if (menu === "ipo") {
        setCurrentDocumentation("ipo");
      } else if (menu === "paths") {
        setCurrentDocumentation("paths");
      } else if (menu === "posts") {
        setCurrentDocumentation("posts");
      } else if (menu === "middlewares") {
        setCurrentDocumentation("middlewares");
      } else if (menu === "users") {
        setCurrentDocumentation("users");
      }
    } else {
      setCurrentDocumentation("stoploss");
    }
    // scrolling to top
    window.scrollTo(0, 0);
  }

  function handleMenu({
    menuOf = null,
  }: {
    menuOf?: "ipo" | "posts" | "users" | "paths" | "middlewares" | null;
  }): void {
    if (handleMenu !== null) {
      if (menuOf === "ipo") {
        // show menu
        setShowPathsMenu(false);
        setShowPostsMenu(false);
        setShowUsersMenu(false);
        setShowIPOMenu(!showIPOMenu);
        setShowMiddlewaresMenu(false);

        // updating currentDocumentation
        // handleCurrentDocumentation({ menuStatus: showIPOMenu, menu: "ipo" });
      } else if (menuOf === "middlewares") {
        // show menu
        setShowPathsMenu(false);
        setShowPostsMenu(false);
        setShowUsersMenu(false);
        setShowIPOMenu(false);
        setShowMiddlewaresMenu(!showMiddlewaresMenu);

        // updating currentDocumentation
        // handleCurrentDocumentation({
        //   menuStatus: showMiddlewaresMenu,
        //   menu: "middlewares",
        // });
      } else if (menuOf === "paths") {
        // show menu
        setShowPathsMenu(!showPathsMenu);
        setShowPostsMenu(false);
        setShowUsersMenu(false);
        setShowIPOMenu(false);
        setShowMiddlewaresMenu(false);

        // updating currentDocumentation
        // handleCurrentDocumentation({
        //   menuStatus: showPathsMenu,
        //   menu: "paths",
        // });
      } else if (menuOf === "posts") {
        // show menu
        setShowPathsMenu(false);
        setShowPostsMenu(!showPostsMenu);
        setShowUsersMenu(false);
        setShowIPOMenu(false);
        setShowMiddlewaresMenu(false);

        // updating currentDocumentation
        // handleCurrentDocumentation({
        //   menuStatus: showPostsMenu,
        //   menu: "posts",
        // });
      } else if (menuOf === "users") {
        // show menu
        setShowPathsMenu(false);
        setShowPostsMenu(false);
        setShowUsersMenu(!showUsersMenu);
        setShowIPOMenu(false);
        setShowMiddlewaresMenu(false);
        // updating currentDocumentation
        // handleCurrentDocumentation({
        //   menuStatus: showUsersMenu,
        //   menu: "users",
        // });
      }
    } else {
      setShowPathsMenu(false);
      setShowPostsMenu(false);
      setShowUsersMenu(false);
      setShowIPOMenu(false);
      setShowMiddlewaresMenu(false);

      // updating currentDocumentation
      // handleCurrentDocumentation({ menuStatus: false, menu: null });
    }
  }

  // updating currentDocumentation
  useEffect(() => {
    if (showIPOMenu) {
      handleCurrentDocumentation({ menu: "ipo", menuStatus: showIPOMenu });
    } else if (showMiddlewaresMenu) {
      handleCurrentDocumentation({
        menu: "middlewares",
        menuStatus: showMiddlewaresMenu,
      });
    } else if (showPathsMenu) {
      handleCurrentDocumentation({ menu: "paths", menuStatus: showPathsMenu });
    } else if (showPostsMenu) {
      handleCurrentDocumentation({ menu: "posts", menuStatus: showPostsMenu });
    } else if (showUsersMenu) {
      handleCurrentDocumentation({ menu: "users", menuStatus: showUsersMenu });
    } else {
      handleCurrentDocumentation({ menu: null, menuStatus: false });
    }
  }, [
    showIPOMenu,
    showMiddlewaresMenu,
    showPathsMenu,
    showPostsMenu,
    showUsersMenu,
  ]);
  // currDropProp on stoploss
  useEffect(() => {
    if (currentDocumentation === "stoploss") {
      setCurrDocProp(-1);
    }
  }, [currentDocumentation]);
  return (
    <div className="w-full h-full">
      <h1 className="w-full h-auto text-2xl font-bold text-center">Property</h1>
      {/* paths */}
      <div className="w-full h-auto">
        <div className="w-full h-auto font-bold flex flex-row px-2">
          <h1
            className="text-lg cursor-pointer w-full"
            onClick={() => handleMenu({ menuOf: "paths" })}
          >
            Paths
          </h1>
          <div
            className={`${
              showPathsMenu ? "rotate-180" : "rotate-0"
            }  w-5 h-5 justify-end self-center`}
          >
            <IoIosArrowDropdown className="w-full h-full" />
          </div>
        </div>
        {/* path menu */}
        {showPathsMenu && (
          <div className="w-full h-auto flex flex-col pl-5 flex-wrap">
            {pathsNames.map((name: string, index: number) => {
              return (
                <div
                  onClick={() => setCurrDocProp(index)}
                  className="cursor-pointer"
                  key={`Paths-${index}`}
                >
                  {name}
                </div>
              );
            })}
          </div>
        )}
      </div>
      {/* middlewares */}
      <div className="w-full h-auto">
        <div className="w-full h-auto font-bold flex flex-row px-2">
          <h1
            className="text-lg cursor-pointer w-full"
            onClick={() => handleMenu({ menuOf: "middlewares" })}
          >
            Middlewares
          </h1>
          <div
            className={`${
              showMiddlewaresMenu ? "rotate-180" : "rotate-0"
            }  w-5 h-5 justify-end self-center`}
          >
            <IoIosArrowDropdown className="w-full h-full" />
          </div>
        </div>
        {/* middleware menu */}
        {showMiddlewaresMenu && (
          <div className="w-full h-auto flex flex-col pl-5 flex-wrap">
            {middlewaresNames.map((name: string, index: number) => {
              return (
                <div
                  className="cursor-pointer"
                  key={`Middleware-${index}`}
                  onClick={() => setCurrDocProp(index)}
                >
                  {name}
                </div>
              );
            })}
          </div>
        )}
      </div>
      {/* users api */}
      <div className="w-full h-auto">
        <div className="w-full h-auto font-bold flex flex-row px-2">
          <h1
            className="text-lg cursor-pointer w-full"
            onClick={() => handleMenu({ menuOf: "users" })}
          >
            Users API
          </h1>
          <div
            className={`${
              showUsersMenu ? "rotate-180" : "rotate-0"
            }  w-5 h-5 justify-end self-center`}
          >
            <IoIosArrowDropdown className="w-full h-full" />
          </div>{" "}
        </div>
        {/* user menu */}
        {showUsersMenu && (
          <div className="w-full h-auto flex flex-col pl-5 flex-wrap">
            {usersApiNames.map((name: string, index: number) => {
              return (
                <div
                  onClick={() => setCurrDocProp(index)}
                  className="cursor-pointer"
                  key={`Users-${index}`}
                >
                  {name}
                </div>
              );
            })}
          </div>
        )}
      </div>
      {/* posts api */}
      <div className="w-full h-auto">
        <div className="w-full h-auto font-bold flex flex-row px-2">
          <h1
            className="text-lg cursor-pointer w-full"
            onClick={() => handleMenu({ menuOf: "posts" })}
          >
            Posts API
          </h1>
          <div
            className={`${
              showPostsMenu ? "rotate-180" : "rotate-0"
            }  w-5 h-5 justify-end self-center`}
          >
            <IoIosArrowDropdown className="w-full h-full" />
          </div>{" "}
        </div>
        {/* post menu */}
        {showPostsMenu && (
          <div className="w-full h-auto flex flex-col pl-5 flex-wrap">
            {postsApiNames.map((name: string, index: number) => {
              return (
                <div
                  onClick={() => setCurrDocProp(index)}
                  className="cursor-pointer"
                  key={`Posts-${index}`}
                >
                  {name}
                </div>
              );
            })}
          </div>
        )}
      </div>
      {/* ipo api */}
      <div className="w-full h-auto">
        <div className="w-full h-auto font-bold flex flex-row px-2">
          <h1
            className="text-lg cursor-pointer w-full"
            onClick={() => handleMenu({ menuOf: "ipo" })}
          >
            IPO API
          </h1>
          <div
            className={`${
              showIPOMenu ? "rotate-180" : "rotate-0"
            } w-5 h-5 justify-end self-center`}
          >
            <IoIosArrowDropdown className="w-full h-full" />
          </div>
        </div>
        {/* ipo menu */}
        {showIPOMenu && (
          <div className="w-full h-auto flex flex-col pl-5 flex-wrap">
            {ipoApiNames.map((name: string, index: number) => {
              return (
                <div
                  onClick={() => setCurrDocProp(index)}
                  className="cursor-pointer"
                  key={`IPO-${index}`}
                >
                  {name}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default RHS;
