import React from "react";
import { RHSPropsTypes } from "./RHS";

const StoplossDocumentation = () => {
  return (
    <div className="w-full tex-xl font-sans">
      <p className="text-xl">
        This is API documentation for{" "}
        <span className="text-blue-500">
          <a href="https://www.stoploss.live">stoploss.live</a>
        </span>{" "}
        website&apos;s server which is hosted at{" "}
        <span className="text-blue-500">
          <a href="https://www.render.com">Render</a>
        </span>
        .
      </p>
      <p className="text-xl">
        Click on the properties on the properties tab and then click on the
        property which you want to know about.
      </p>
    </div>
  );
};

export default StoplossDocumentation;
