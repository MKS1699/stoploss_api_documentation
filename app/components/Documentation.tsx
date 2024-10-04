"use client";
import React, { useEffect, useState } from "react";
import { RHSPropsTypes } from "./RHS";
import { useAllStates } from "../hooks";

interface DocumentationPropsTypes extends RHSPropsTypes {
  data: any;
}

const Documentation = ({
  data,
  currDocProp,
  currentDocumentation,
  setCurrDocProp,
  setCurrentDocumentation,
}: DocumentationPropsTypes) => {
  const [dataSet, setDataSet] = useState<any>({});

  useEffect(() => {
    if (currDocProp >= 0) {
      for (let d in data) {
        if (+d === currDocProp) {
          setDataSet(data[d]);
        }
      }
    } else {
      setDataSet({});
    }
  }, [currDocProp]);

  const { path, name, about, method, responses, middlewares, bodyArgs } =
    dataSet;

  const { middlewares: M } = useAllStates();
  return (
    <div className="grid grid-flow-row gap-1">
      {/* paths */}
      {path && (
        <div className="flex flex-row gap-4">
          <h3 className="text-2xl">Path</h3>
          <div className="font-medium text-xl">{path}</div>
        </div>
      )}
      {/* name */}
      {name && (
        <div className="flex flex-row gap-4">
          <h3 className="text-2xl">Name</h3>
          <div className="font-medium text-xl">{name}</div>
        </div>
      )}
      {/* about */}
      {about && (
        <div className="flex flex-row gap-4">
          <h3 className="text-2xl">About</h3>
          <div className="font-medium text-xl">{about}</div>
        </div>
      )}
      {/* method */}
      {method && (
        <div className="flex flex-row gap-4">
          <h3 className="text-2xl">Method</h3>
          <div className="font-medium text-xl">{method}</div>
        </div>
      )}
      {/* middlewares */}
      {middlewares && middlewares.length > 0 && (
        <div className="flex flex-row gap-4">
          <h3 className="text-2xl">Middlewares</h3>
          <div className="font-medium text-xl flex flex-row gap-1 flex-wrap">
            {middlewares.map((middleware: string, i: number) => {
              return (
                <a
                  href=""
                  onClick={() => {
                    const mIndex: number = M.map(
                      (m: any, index: number): number => {
                        if (m.name === middleware) {
                          return index;
                        } else {
                          return -1;
                        }
                      }
                    );
                    if (mIndex > -1) {
                      setCurrentDocumentation("middlewares");
                      setCurrDocProp(mIndex);
                    }
                  }}
                  key={`${currentDocumentation}-${currDocProp}-middleware-${i}`}
                >
                  {middlewares.indexOf(middleware) + 1 !== middlewares.length
                    ? middleware + ", "
                    : middleware}
                </a>
              );
            })}
          </div>
        </div>
      )}
      {/* body arguments */}
      {bodyArgs && bodyArgs.length > 0 && (
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl">Body Arguments</h3>
          <div className="font-medium text-xl flex flex-col gap-1 w-full p-2">
            {bodyArgs.map((args: any, aIndex: number) => {
              const { name, type, about, subArgs } = args;
              return (
                <div key={`body-args-${aIndex}`}>
                  {name && name.length > 0 && (
                    <div
                      className="flex flex-col border-2 border-solid border-blue-500 p-2 rounded-md"
                      key={`body-args-${name}-${aIndex}`}
                    >
                      {/* name */}
                      {name && (
                        <div className="grid grid-cols-[20%_80%] grid-rows-1 gap-2">
                          <div className="font-medium">Name</div>
                          <div className="font-semibold">{name}</div>
                        </div>
                      )}
                      {/* type */}
                      {type && (
                        <div className="grid grid-cols-[20%_80%] grid-rows-1 gap-2">
                          <div className="font-medium">Type</div>
                          <div className="font-semibold">{type}</div>
                        </div>
                      )}
                      {/* about */}
                      {about && (
                        <div className="grid grid-cols-[20%_80%] grid-rows-1 gap-2">
                          <div className="font-medium">About</div>
                          <div className="font-semibold">{about}</div>
                        </div>
                      )}
                      {/* subAgrs */}
                      {subArgs && subArgs.length > 0 && (
                        <div
                          key={`body-args-${aIndex}-sub-args-${name}`}
                          className="grid grid-flow-row gap-2"
                        >
                          {subArgs[0]?.name.length > 0 && (
                            <div className="font-medium">Sub Args</div>
                          )}
                          {subArgs.map((sArgs: any, sIndex: number) => {
                            const { name, type, about, subArgs } = sArgs;
                            return (
                              <>
                                {name.length > 0 && (
                                  <div
                                    className="flex flex-col border-2 border-solid border-red-500 p-2 rounded-md"
                                    key={`response-${name}-${sIndex}`}
                                  >
                                    {/* name */}
                                    <div className="grid grid-cols-[20%_80%] grid-rows-1 gap-2">
                                      <div className="font-medium">Name</div>
                                      <div className="font-semibold">
                                        {name}
                                      </div>
                                    </div>
                                    {/* about */}
                                    <div className="grid grid-cols-[20%_80%] grid-rows-1 gap-2">
                                      <div className="font-medium">About</div>
                                      <div className="font-semibold">
                                        {about}
                                      </div>
                                    </div>
                                    {/* type */}
                                    <div className="grid grid-cols-[20%_80%] grid-rows-1 gap-2">
                                      <div className="font-medium">Type</div>
                                      <div className="font-semibold">
                                        {type}
                                      </div>
                                    </div>
                                    {/* sArgsArgs */}
                                    <div
                                      key={`body-args-${aIndex}-sub-args-${sIndex}-${name}`}
                                      className="grid grid-flow-row gap-2"
                                    >
                                      {subArgs && (
                                        <div className="font-medium">
                                          Sub Args
                                        </div>
                                      )}
                                      {subArgs &&
                                        subArgs.map(
                                          (s: any, SSIndex: number) => {
                                            const { name, type, about } = s;
                                            return (
                                              <div
                                                className="flex flex-col border-2 border-solid border-green-500 p-2 rounded-md"
                                                key={`response-${name}-${SSIndex}`}
                                              >
                                                {/* name */}
                                                <div className="grid grid-cols-[20%_80%] grid-rows-1 gap-2">
                                                  <div className="font-medium">
                                                    Name
                                                  </div>
                                                  <div className="font-semibold">
                                                    {name}
                                                  </div>
                                                </div>
                                                {/* type */}
                                                <div className="grid grid-cols-[20%_80%] grid-rows-1 gap-2">
                                                  <div className="font-medium">
                                                    Type
                                                  </div>
                                                  <div className="font-semibold">
                                                    {type}
                                                  </div>
                                                </div>
                                                <div className="grid grid-cols-[20%_80%] grid-rows-1 gap-2">
                                                  <div className="font-medium">
                                                    About
                                                  </div>
                                                  <div className="font-semibold">
                                                    {about}
                                                  </div>
                                                </div>
                                              </div>
                                            );
                                          }
                                        )}
                                    </div>
                                  </div>
                                )}
                              </>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
      {/* responses */}
      {responses && responses.length > 0 && (
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl">Responses</h3>
          <div className="font-medium text-xl flex flex-col gap-1 w-full p-2">
            {responses.map((response: any, index: number) => {
              const { status, message, operation, result } = response;
              return (
                <div
                  className="flex flex-col border-2 border-solid border-blue-500 p-2 rounded-md"
                  key={`response-${status}-${index}`}
                >
                  {/* status */}
                  {status && (
                    <div className="grid grid-cols-[20%_80%] grid-rows-1 gap-2">
                      <div className="font-medium">Status</div>
                      <div className="font-semibold">{status}</div>
                    </div>
                  )}
                  {/* message */}
                  {message && (
                    <div className="grid grid-cols-[20%_80%] grid-rows-1 gap-2">
                      <div className="font-medium">Message</div>
                      <div className="font-semibold">{message}</div>
                    </div>
                  )}
                  {/* operation */}
                  {operation && (
                    <div className="grid grid-cols-[20%_80%] grid-rows-1 gap-2">
                      <div className="font-medium">Operation</div>
                      <div className="font-semibold">{operation}</div>
                    </div>
                  )}
                  {/* result */}
                  {result && (
                    <div className="grid grid-cols-[20%_80%] grid-rows-1 gap-2">
                      <div className="font-medium">Result</div>
                      <div className="font-semibold">{result}</div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Documentation;
