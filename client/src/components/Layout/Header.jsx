import React from "react";
import Logo from "../../assets/Logo2.png";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";

function Header() {
  return (
    <>
      <div className="p-6">
        <div className="flex justify-evenly items-center">
          <div>
            <img src={Logo} alt="" className="h-8" />
          </div>
          <div className="relative">
            <CiSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              name=""
              id=""
              className=" bg-slate-100 w-[350px] p-2 px-8 outline-none rounded-lg"
              placeholder="Search for Products, Brands and More"
            />
          </div>
          <div className="flex gap-x-2 items-center">
            <FaRegUserCircle size={30} />
            <h2>Login</h2>
          </div>
          <div className="flex gap-x-2 items-center">
            <IoCartOutline size={30} />
            <h2>Cart </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
