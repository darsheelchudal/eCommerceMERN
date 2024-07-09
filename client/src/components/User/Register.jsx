import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useRegisterUserMutation } from "../../services/user/userRegister";

function Register() {
  const [formData, setFormData] = useState({
    profile_image: null,
    fullName: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const [previewSrc, setPreviewSrc] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2TgOv9CMmsUzYKCcLGWPvqcpUk6HXp2mnww&s"
  );
  const { register, handleSubmit } = useForm();
  const [registerUser, { isLoading, isSuccess, isError, error }] =
    useRegisterUserMutation();

  const loadFile = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFormData({ ...formData, profile_image: file });
      setPreviewSrc(URL.createObjectURL(file));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const userSubmit = async () => {
    const formDataToSubmit = new FormData();
    formDataToSubmit.append("profile_image", formData.profile_image);
    formDataToSubmit.append("fullName", formData.fullName);
    formDataToSubmit.append("email", formData.email);
    formDataToSubmit.append("password", formData.password);
    formDataToSubmit.append("cpassword", formData.cpassword);

    try {
      await registerUser(formDataToSubmit);
      // Reset form data after successful registration
      setFormData({
        profile_image: null,
        fullName: "",
        email: "",
        password: "",
        cpassword: "",
      });
      setPreviewSrc(
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2TgOv9CMmsUzYKCcLGWPvqcpUk6HXp2mnww&s"
      );
    } catch (error) {
      console.error("Registration Error:", error);
    }
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
              encType="multipart/form-data"
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
                value={formData.fullName}
              />

              <input
                type="email"
                {...register("email", { required: true })}
                id="email"
                className="border-2 p-3 rounded-lg"
                placeholder="Email *"
                onChange={handleChange}
                value={formData.email}
                autoComplete="username"
              />

              <input
                type="password"
                {...register("password", { required: true })}
                id="password"
                className="border-2 p-3 rounded-lg"
                placeholder="Password *"
                onChange={handleChange}
                value={formData.password}
                autoComplete="new-password"
              />

              <input
                type="password"
                {...register("cpassword", { required: true })}
                id="cpassword"
                className="border-2 p-3 rounded-lg"
                placeholder="Confirm Password *"
                onChange={handleChange}
                value={formData.cpassword}
                autoComplete="new-password"
              />

              <button className="flex justify-center bg-orange-500 text-white p-3 rounded-sm font-medium">
                Signup
              </button>
              <span className="flex justify-center w-full text-blue-600 font-medium">
                <Link to="/login">Already have an account? Log in</Link>
              </span>
            </form>
            <div className="message text-center my-4 text-red-700 font-semibold">
              {isLoading && <p>Loading...</p>}
              {isSuccess && <p>Registration successful!</p>}
              {isError && <p>Error: {error.message}</p>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
