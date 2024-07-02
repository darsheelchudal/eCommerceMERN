import React from "react";

function Header() {
  return (
    <>
      <div className="bg-slate-900 text-white p-3">
        <div className="flex justify-between w-full px-20">
          <div>
            <img src="" alt="logo" srcset="" />
          </div>
          <div className="flex gap-x-8">
            <div>
              <h1>Cart</h1>
            </div>
            <div>
              <h1>Sign in</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
