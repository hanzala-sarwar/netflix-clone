"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import axios from "axios";
import { API_END_POINT } from "@/utils/constant";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "@/redux/userSlice";
import { useRouter } from "next/navigation";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const router = useRouter();
  const isLoading = useSelector((store) => store.app.isLoading);

  const toggleMode = () => setIsLogin(!isLogin);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));

    try {
      if (isLogin) {
        const res = await axios.post(
          `${API_END_POINT}/login`,
          { email, password },
          { withCredentials: true }
        );

        toast.success(res.data.message);
        dispatch(setUser(res.data.user));
        router.push("/browse");
      } else {
        const res = await axios.post(
          `${API_END_POINT}/register`,
          { fullName, email, password },
          { withCredentials: true }
        );

        toast.success(res.data.message);
        setIsLogin(true);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong");
    } finally {
      dispatch(setLoading(false));
    }

    setFullName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="relative h-screen w-full">
      <Header />

      {/* Background Image */}
      <img
        className="absolute w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        alt="banner"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      {/* Form */}
      <div className="relative flex items-center justify-center h-full">
        <form
          onSubmit={handleSubmit}
          className="w-[90%] sm:w-2/3 md:w-1/3 lg:w-1/4 
          bg-black/80 backdrop-blur-md 
          p-10 rounded-xl shadow-2xl 
          transition duration-300 hover:scale-[1.02]"
        >
          <h1 className="text-4xl font-bold text-white mb-8 text-center">
            {isLogin ? "Sign In" : "Sign Up"}
          </h1>

          <div className="flex flex-col">
            {!isLogin && (
              <input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                type="text"
                placeholder="Full Name"
                className="p-3 mb-3 rounded-md bg-gray-800 text-white 
                focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            )}

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              className="p-3 mb-3 rounded-md bg-gray-800 text-white 
              focus:outline-none focus:ring-2 focus:ring-red-600"
            />

            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              className="p-3 mb-5 rounded-md bg-gray-800 text-white 
              focus:outline-none focus:ring-2 focus:ring-red-600"
            />

            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 
              transition duration-200 
              p-3 rounded-md text-white font-semibold"
            >
              {isLoading
                ? "Please wait..."
                : isLogin
                ? "Sign In"
                : "Sign Up"}
            </button>

            <p className="text-gray-300 mt-6 text-sm text-center">
              {isLogin
                ? "New to Netflix?"
                : "Already have an account?"}
              <span
                onClick={toggleMode}
                className="ml-2 text-red-500 cursor-pointer hover:underline"
              >
                {isLogin ? "Sign Up" : "Sign In"}
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login; 