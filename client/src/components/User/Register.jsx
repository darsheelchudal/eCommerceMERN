import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";

function Login() {
  const [previewSrc, setPreviewSrc] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2TgOv9CMmsUzYKCcLGWPvqcpUk6HXp2mnww&s"
  );

  const { register, handleSubmit } = useForm();

  const [formData, setFormData] = useState({
    profile_image: "",
    fullName: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const loadFile = (event) => {
    const input = event.target;
    const file = input.files[0];

    if (file) {
      setPreviewSrc(URL.createObjectURL(file));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
      [file]: value,
    }));
  };
  useEffect(() => {
    console.log(formData);
  }, [formData]);
  const userSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="card flex bg-white h-[800px] my-8">
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
              enctype="multipart/form-data"
              onSubmit={handleSubmit(userSubmit)}
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
                  name="profile_image"
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
                {...register("fullName", { required: true })}
                id="fullName"
                className="border-2 p-3 rounded-lg"
                placeholder="Full Name *"
                onChange={handleChange}
              />

              <input
                type="email"
                {...register("email", { required: true })}
                id="email"
                className="border-2 p-3 rounded-lg"
                placeholder="Email *"
                onChange={handleChange}
              />

              <input
                type="password"
                {...register("password", { required: true })}
                id="password"
                className="border-2 p-3 rounded-lg"
                placeholder="Password *"
                onChange={handleChange}
              />
              <input
                type="password"
                {...register("cpassword", { required: true })}
                id="cpassword"
                className="border-2 p-3 rounded-lg"
                placeholder="Confirm Password *"
                onChange={handleChange}
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
