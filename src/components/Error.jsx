import React from "react";
import { BiError } from "react-icons/bi";
const Error = () => {
  return (
    <div className="errorPage">
      <BiError />
      Error while fetching the data... <br /> Please load after some time.
    </div>
  );
};

export default Error;
