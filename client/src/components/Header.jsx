import React from "react";
import Logo1 from "../assets/Logo1.png";
import { FaCartPlus } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

function Header() {
  return (
    <>
      <div className="bg-slate-900 text-white p-3">
        <div className="flex justify-between w-full px-20">
          <div>
            <img
              src={Logo1}
              alt="logo"
              srcset=""
              className="h-[80px] w-[80px] rounded-full"
            />
          </div>
          <div className="flex gap-x-8 items-center">
            <div>
              <h1 className="text-xl font-semibold flex items-center gap-x-2">
                <FaCartPlus />
                Cart
              </h1>
            </div>
            <div>
              <h1 className="text-xl font-semibold flex items-center gap-x-2">
                <FaUser />
                Sign In
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
