import React from "react";

const Nutritional = () => {
  return (
    <div
      className="flex flex-col p-4 gap-4 border-2 border-yellow-950 rounded-2xl"
      style={{
        margin: "0 8%",
      }}
    >
      <h5 className="text-2xl border-b-4 border-yellow-900">
        Nutritional Values
      </h5>

      <div className="flex items-center justify-between">
        <p>Daily Return</p>
        <div
          style={{ height: "1px", border: "1px dotted black" }}
          className="w-full flex-1"
        />
        <p>8%</p>
      </div>

      <div className="flex items-center justify-between">
        <p>APR</p>
        <div
          style={{ height: "1px", border: "1px dotted black" }}
          className="w-full flex-1"
        />
        <p>2,929%</p>
      </div>

      <div className="flex items-center">
        <p>Dev Fee</p>
        <div
          style={{ height: "1px", border: "1px dotted black" }}
          className="w-full flex-1"
        />
        <p>5%</p>
      </div>
    </div>
  );
};

export default Nutritional;
