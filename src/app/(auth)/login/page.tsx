"use client";
import Link from "next/link";
import React from "react";
import LoginGif from "../../images/gif-login.gif";
import Image from "next/image";

const LoginPage = () => {
  const handleLogin = (event: any) => {
    event.preventDefault();
    fetch("/api/auth/login", {
      method: "post",
      body: JSON.stringify({
        email: event.currentTarget.email.value,
        password: event.currentTarget.password.value,
      }),
    });
  };
  return (
    <>
      <div className="bg-sky-100 flex justify-center items-center h-screen overflow-hidden">
        <div className="w-1/2 h-screen hidden lg:block">
          <Image
            src={LoginGif}
            alt="Placeholder Image"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
          <h1 className="text-2xl font-semibold mb-4">Login</h1>
          <form onSubmit={handleLogin}>
            <div className="mb-4 bg-sky-100">
              <label htmlFor="email" className="block text-gray-600">
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                autoComplete="off"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-800">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                autoComplete="off"
              />
            </div>
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                className="text-red-500"
              />
              <label htmlFor="remember" className="text-green-900 ml-2">
                Remember Me
              </label>
            </div>
            <div className="mb-6 text-blue-500">
              <a href="#" className="hover:underline">
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
            >
              Login
            </button>
          </form>
          <div className="mt-6 text-slate-500 text-center">
            <Link href="/register" className="hover:underline">
              Sign up Here
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
