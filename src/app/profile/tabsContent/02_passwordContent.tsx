"use client";

// import G from "@/code/globalData";
import { useState, useEffect } from "react";

export default function PasswordContent() {
  // const [currentUser, setCurrentUser] = useState(G.session.user);

  useEffect(() => {}, []);
  return (
    <div className="container px-0">
      <h2 className="text-2xl text-blackText font-bold mb-1">
        Chnage Password
      </h2>
      <span className="text-captionColor text-sm">Your Password</span>

      <form className="mt-6">
        <input
          type="password"
          name="password"
          id="password"
          autoComplete="password"
          className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
          placeholder="Password"
        />
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          autoComplete="confirmPassword"
          className="block w-full rounded-md border-0 mt-4 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
          placeholder="Confirm Password"
        />
      </form>
      <div className="text-center lg:text-end">
        <button
          type="submit"
          className="text-white bg-primary rounded-md px-3 py-2 mt-3 min-w-[260px]"
        >
          Done
        </button>
      </div>
    </div>
  );
}
