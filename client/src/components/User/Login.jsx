import React from "react";

function Login() {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="card flex border-2">
          <div className="poster border-2">
            <h1>Login </h1>
            <h2>Get access to your Orders, Wishlist and Recommendations</h2>
          </div>
          <div className="form border-2">
            <form action="" className="flex flex-col">
              <input type="email" name="" id="" className="border-2" />
              <input type="password" name="" id="" className="border-2" />
              <button>Login</button>
              <h1>New to Dmart? Create an account</h1>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
