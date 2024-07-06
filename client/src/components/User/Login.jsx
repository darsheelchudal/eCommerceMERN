import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="card flex bg-white my-8">
          <div className="poster w-[300px] bg-blue-500 text-white p-10 flex flex-col gap-y-4 overflow-hidden">
            <h1 className="font-bold text-xl">Login </h1>
            <h2 className="font-semibold">
              Get access to your Orders, Wishlist and Recommendations
            </h2>
          </div>
          <div className="form p-9 w-[500px]">
            <form action="" className="flex flex-col space-y-8">
              <input
                type="email"
                name="email"
                id="email"
                className="border-2 p-3 rounded-lg"
                placeholder="Email *"
              />
              <input
                type="password"
                name="password"
                id="password"
                className="border-2 p-3 rounded-lg"
                placeholder="Password *"
              />

              <button className="flex justify-center bg-orange-500 text-white p-3 rounded-sm font-medium">
                Login
              </button>
              <span className="flex justify-center w-full text-blue-600 font-medium gap-x-2">
                <Link to="/register">New to Dmart? Create an account</Link>
              </span>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
