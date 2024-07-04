import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="card flex h-[500px] bg-white my-8">
          <div className="poster w-[300px] bg-blue-500 text-white p-8 flex flex-col gap-y-4 overflow-hidden">
            <h1 className="font-bold text-xl">Looks like you're new here!</h1>
            <h2 className="font-semibold">
              Sign up with your mobile number to get started
            </h2>
          </div>
          <div className="form p-9 w-[500px]">
            <form action="" className="flex flex-col space-y-8">
              <input
                type="email"
                name=""
                id=""
                className="border-2 p-3 rounded-lg"
                placeholder="Email *"
              />
              <input
                type="password"
                name=""
                id=""
                className="border-2 p-3 rounded-lg"
                placeholder="Password *"
              />

              <button className="flex justify-center bg-orange-500 text-white p-3 rounded-sm font-medium">
                Signup
              </button>
              <span className="flex justify-center w-full text-blue-600 font-medium">
                <Link to="/login">Already have an account? Log in</Link>
              </span>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
