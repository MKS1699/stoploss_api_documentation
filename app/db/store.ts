/* This file contains all the information related to the
 * paths of the API server.
 */

// API paths object
// [
//   {
//     path: "",
//     requestType: "",
//     name: "",
//     about: "",
//     responses: [
//       {
//         status: "",
//         message: "",
//         operation: "",
//         result: "",
//       },
//     ],
//     bodyArgs: [
//       {
//         name: "",
//         type: "",
//         about: "",
//         values: [],
//         subArgs: [
//           {
//             name: "",
//             type: "",
//             about: "",
//           },
//         ],
//       },
//     ],
//     middlewares: [],
//   },
// ];

export interface OBJECT {
  key: string;
  keyType: Array<"Array" | "string" | "number" | "Object" | "boolean">;
  keySample: string;
}

interface response {
  code: number;
  message: string;
  operation: "error" | "success";
  containsErrorObject?: boolean;
  from: string | "route";
}

const API_ROUTES: {
  // route name
  route: string;
  // description of the route
  description: string;
  // method of the route
  method: "get" | "post" | "put" | "delete" | "none";
  // route request
  request?: {
    // route header section
    hasHeaders: boolean; // if route has headers
    headers?: OBJECT[]; // header data
    // route body section
    hasBody: boolean; // if route has body
    body?: OBJECT[]; // body data
    // route query section
    hasQuery: boolean; // if route has query
    query?: OBJECT[]; // query data
  };
  // routes relation to routers
  /* Home  --> Home router means all routes just related to HOME.
   * Users --> Users routes means all routes related to USERS.
   * Posts --> Posts routes means all routes related to POSTS.
   */
  routeRelated: Array<"Home" | "Users" | "Posts">;
  // route middlewares
  hasMiddlewares: boolean; // if route has middlewares
  middlewares?: string[]; // all middlewares in the route
  // route response
  response?: {
    onError: response[];
    onSuccess: response[];
  };
}[] = [
  {
    route: "/cronjob",
    description:
      "route for a cron job service provider to keep the free service on render running.",
    method: "get",
    request: { hasBody: false, hasHeaders: false, hasQuery: false },
    routeRelated: ["Home"],
    hasMiddlewares: false,
    response: {
      onError: [
        {
          code: 500,
          message: "Unable to perform cronjob . Server Error",
          operation: "error",
          containsErrorObject: true,
          from: "route",
        },
      ],
      onSuccess: [
        {
          code: 200,
          operation: "success",
          message: "Operation Successful",
          from: "route",
        },
      ],
    },
  },
  {
    route: "/api/users",
    description:
      "Standard API route for initiating all the further user related actions.",
    hasMiddlewares: false,
    routeRelated: ["Home"],
    method: "none",
  },
  {
    route: "/api/users/login",
    description:
      "Route for loggin in the user based on credentials provided by it.",
    hasMiddlewares: true,
    middlewares: ["validateCredentials", "userExists", "generateToken"],
    routeRelated: ["Users"],
    method: "post",
    request: {
      hasHeaders: false,
      hasBody: true,
      body: [
        {
          key: "userName",
          keyType: ["string"],
          keySample: "Bazooka",
        },
        {
          key: "userPassword",
          keyType: ["string", "number"],
          keySample: "ABC123abc",
        },
      ],
      hasQuery: false,
    },
    // todo : response
    // response: {
    // //   onError: [{}],
    // //   onSuccess: [{}],
    // },
  },
];

const MIDDLEWARES: {
  name: string;
  description: string;
}[] = [];
