"use client";
import { useEffect, useState } from "react";
import { PATHS, MIDDLEWARES, IPO_API, POSTS_API, USERS_API } from "../db";
const useAllStates = () => {
  // static data
  const [paths, setPaths] = useState<any>(PATHS);
  const [middlewares, setMiddlewares] = useState<any>(MIDDLEWARES);
  const [ipoApi, setIpoApi] = useState<any>(IPO_API);
  const [usersApi, setUsersApi] = useState<any>(USERS_API);
  const [postsApi, setPostsApi] = useState<any>(POSTS_API);

  // dynamic data
  const [pathsNames, setPathsNames] = useState<string[]>([]);
  const [middlewaresNames, setMiddlewaresNames] = useState<string[]>([]);
  const [ipoApiNames, setIpoApiNames] = useState<string[]>([]);
  const [postsApiNames, setPostsApiNames] = useState<string[]>([]);
  const [usersApiNames, setUsersApiNames] = useState<string[]>([]);

  useEffect(() => {
    // pathNames
    for (let path of paths) {
      let pathNamesArr = pathsNames;
      pathNamesArr.push(path.name);
      setPathsNames(pathNamesArr);
    }
    // middlewares
    for (let middleware of middlewares) {
      let middlewaresNamesArr = middlewaresNames;
      middlewaresNamesArr.push(middleware.name);
      setMiddlewaresNames(middlewaresNamesArr);
    }
    // ipoApiNames
    for (let ipoAPI of ipoApi) {
      let ipoApiNamesArr = ipoApiNames;
      ipoApiNamesArr.push(ipoAPI.name);
      setIpoApiNames(ipoApiNamesArr);
    }
    // usersApiNames
    for (let userApi of usersApi) {
      let usersApiNamesArr = usersApiNames;
      usersApiNamesArr.push(userApi.name);
      setUsersApiNames(usersApiNamesArr);
    }
    // postsApiNames
    for (let postApi of postsApi) {
      let postsApiNamesArr = postsApiNames;
      postsApiNamesArr.push(postApi.name);
      setPostsApiNames(postsApiNamesArr);
    }
  }, [paths, ipoApi, usersApi, postsApi, middlewares]);

  return {
    // static
    paths,
    middlewares,
    postsApi,
    ipoApi,
    usersApi,
    // dynamic
    pathsNames,
    ipoApiNames,
    middlewaresNames,
    postsApiNames,
    usersApiNames,
  };
};

export default useAllStates;
