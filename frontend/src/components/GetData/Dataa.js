import React, { useState } from "react";
import Data from "./Data";

const Dataa = () => {
  const [drop, setDrop] = useState(Data);
  return (
    <>
      <form className="w-full form" method="POST">
        <div className="flex flex-wrap mx-10 mb-2 mt-4">
          <div className="flex flex-wrap mx-10 mb-2 mt-4">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="university"
              >
                University
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full border border-gray-400 text-gray-700 py-1.5 px-3 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="university"
                >
                  {drop.map((drop, index) => (
                    <option key={index} value={index}>
                      {drop.courses}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="certificate"
              >
                Certificate
              </label>
              <div className="relative">
                <select
                  name="certificate"
                  value={"certificate"}
                  onChange={"handleChange"}
                  className="block appearance-none w-full border border-gray-400 text-gray-700 py-1.5 px-3 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="university"
                >
                  <option>New Mexico</option>
                  <option>Missouri</option>
                  <option>Texas</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Dataa;
