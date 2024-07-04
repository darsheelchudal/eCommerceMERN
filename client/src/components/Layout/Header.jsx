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
          <div>
            <h1 className="text-2xl font-semibold">DMarket</h1>
          </div>
          <div className="relative">
            <CiSearch className="sm:block hidden absolute left-2 top-1/2 transform -translate-y-1/2 text-blue-800" />
            <input
              type="text"
              name=""
              id=""
              className="sm:block hidden bg-slate-100 w-[350px] p-2 px-8 outline-none rounded-lg"
              placeholder="Search for Products, Brands and More"
            />
          </div>
          <div className="flex gap-x-6 items-center">
            <div className="flex gap-x-2 items-center">
              <Link to="/login">
                <FaRegUserCircle size={30} />
                <h2>Login</h2>
              </Link>
            </div>
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
