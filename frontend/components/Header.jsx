"use client";

import React from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { API_END_POINT } from "@/utils/constant";
import axios from "axios";
import { setUser } from "@/redux/userSlice";
import Image from "next/image";
import toast from "react-hot-toast";
import { setToggle } from "@/redux/movieSlice";
import { useRouter } from "next/navigation";

const Header = () => {
    const user = useSelector((store) => store.app.user);
    const toggle = useSelector((store) => store.movie.toggle);
    const dispatch = useDispatch();
    const router = useRouter();

    const logoutHandler = async () => {
        try {
            const res = await axios.get(`${API_END_POINT}/logout`, {
                withCredentials: true,
            });
            toast.success(res.data.message);
            dispatch(setUser(null));
            router.push("/");
        } catch (error) {
            console.log(error);
        }
    };

    const toggleHandler = () => dispatch(setToggle());

    return (
        <div
            className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-3 bg-linear-to-b from-black/90 to-transparent backdrop-blur-md" >

            {/* Logo */}
            <Image
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" // ✅ use local image (recommended)
                alt="netflix-logo"
                width={140}
                height={40}
                className="cursor-pointer"
                onClick={() => router.push("/")}
            />

            {/* Right Section */}
            {user && (
                <div className="flex items-center gap-6 text-white">

                    {/* Toggle Button */}
                    <button
                        onClick={toggleHandler}
                        className="bg-red-600 hover:bg-red-700 transition px-4 py-2 rounded-md text-sm font-medium" >


                        {toggle ? "Home" : "Search"}
                    </button>

                    {/* Profile Section */}
                    <div className="flex items-center gap-2 cursor-pointer group">
                        <div className="w-8 h-8 rounded bg-gray-600 flex items-center justify-center text-sm font-bold">
                            {user.fullName?.charAt(0).toUpperCase()}
                        </div>

                        <span className="hidden sm:block text-sm">
                            {user.fullName}
                        </span>

                        <IoIosArrowDropdown
                            size={20}
                            className="group-hover:rotate-180 transition duration-200"
                        />
                    </div>

                    {/* Logout */}
                    <button
                        onClick={logoutHandler}
                        className="text-sm text-gray-300 hover:text-white transition"
                    >
                        Logout
                    </button>
                </div>
            )}
        </div>
    );
};

export default Header;