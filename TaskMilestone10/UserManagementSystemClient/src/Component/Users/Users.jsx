import React from "react";
import { Link } from "react-router-dom";

export const Users = () => {
  return (
    <>
      <div className="flex justify-start p-7">
        <Link to="/newUser">
          <button className="btn bg-purple-500 text-white w-[15rem] rounded-full whitespace-nowrap">
            Add New users
          </button>
        </Link>
      </div>
    </>
  );
};
