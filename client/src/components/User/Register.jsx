import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [previewSrc, setPreviewSrc] = useState(
    "https://lh3.googleusercontent.com/a-/AFdZucpC_6WFBIfaAbPHBwGM9z8SxyM1oV4wB4Ngwp_UyQ=s96-c"
  );

  const loadFile = (event) => {
    const input = event.target;
    const file = input.files[0];

    if (file) {
      setPreviewSrc(URL.createObjectURL(file));
    }
  };
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="card flex h-[700px] bg-white my-8">
          <div className="poster w-[300px] bg-blue-500 text-white p-8 flex flex-col gap-y-4 overflow-hidden">
            <h1 className="font-bold text-xl">Looks like you're new here!</h1>
            <h2 className="font-semibold">
              Sign up with your mobile number to get started
            </h2>
          </div>
          <div className="form p-9 w-[500px]">
            <form
              action=""
              className="flex flex-col space-y-8"
              encType="multipart/form-data"
            >
              <div className="shrink-0 mx-10">
                <img
                  id="preview_img"
                  className="h-20 w-20 object-cover rounded-full"
                  src={previewSrc}
                  alt="Current profile photo"
                />
                <span>Choose profile picture</span>
              </div>
              <label className="block">
                <span className="sr-only">Choose profile photo</span>
                <input
                  type="file"
                  onChange={loadFile}
                  className="block w-full text-sm text-slate-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-violet-50 file:text-violet-700
              hover:file:bg-violet-100
            "
                />
              </label>
              <input
                type="text"
                name=""
                id=""
                className="border-2 p-3 rounded-lg"
                placeholder="Full Name *"
              />

              <input
                type="email"
                name=""
                id=""
                className="border-2 p-3 rounded-lg"
                placeholder="Email *"
              />

              <input
                type="password"
                name="cpassword"
                id="cpassword"
                className="border-2 p-3 rounded-lg"
                placeholder="Password *"
              />
              <input
                type="password"
                name="cpassword"
                id="cpassword"
                className="border-2 p-3 rounded-lg"
                placeholder="Confirm Password *"
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
