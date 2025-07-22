import React from "react";
import Button from "./Button";

const Product = ({val}) => {
  return (
    <div className="w-full py-20 text-white">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
              <h1 className="basis-1/2 font-medium text-4xl capitalize">{val.title }</h1>
        <div className="w-1/3">
          <p className="text-sm">
            {val.description}
                  </p>
                  <div className="flex gap-2 mt-6">
                      {val.live && (<Button name="Live Website" />)}
                      {val.case && (<Button name="Case Study" />)}
                  </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
