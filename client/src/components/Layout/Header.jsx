import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="p-3 bg-blue-600 text-white">
        <div className="flex justify-around items-center">
          <div className="flex gap-x-8">
            <Link to="/">
              <h1 className="text-2xl font-semibold">DMarket</h1>
            </Link>
            <div className="relative">
              <CiSearch className="sm:block hidden absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-800" />
              <input
                type="text"
                name=""
                id=""
                className="sm:block hidden bg-slate-100 w-[600px] p-2 px-8 outline-none rounded-lg"
                placeholder="Search for Products, Brands and More"
              />
            </div>
          </div>

          <div className="flex gap-x-6 items-center">
            {" "}
            <Link to="/login">
              <div className="flex gap-x-2 items-center">
                <FaRegUserCircle size={30} />
                <h2>Login</h2>
              </div>
            </Link>
            <div className="flex gap-x-2 items-center">
              <IoCartOutline size={30} />
              <h2>Cart </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
