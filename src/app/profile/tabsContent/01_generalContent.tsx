"use client";

import G from "@/code/globalData";
import { useState, useEffect } from "react";

export default function GeneralContent() {
  const [currentUser, setCurrentUser] = useState(G.session.user);

  useEffect(() => {}, []);
  return (
    <div className="container px-0">
      <h2 className="text-2xl text-blackText font-bold mb-1">
        {currentUser.fullName}
      </h2>
      <span className="text-captionColor text-sm">
        Customer since {currentUser.createdAt}
      </span>

      <form className="mt-6">
        <input
          type="text"
          name="firstName"
          id="firstName"
          autoComplete="firstName"
          className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
          placeholder="First Name"
        />
        <input
          type="text"
          name="lastName"
          id="lastName"
          autoComplete="lastName"
          className="block w-full rounded-md border-0 mt-4 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
          placeholder="Last Name"
        />
        <input
          type="text"
          name="email"
          id="email"
          autoComplete="email"
          className="block w-full rounded-md border-0 mt-4 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
          placeholder="Email"
        />
        <select
          id="country"
          name="country"
          autoComplete="country-name"
          className="block w-full rounded-md border-0 mt-4 py-2.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
        >
          <option>Saudi Arabia</option>
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        </select>
        <input
          type="text"
          name="phone"
          id="phone"
          autoComplete="phone"
          className="block w-full rounded-md border-0 mt-4 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
          placeholder="phone"
        />
        <div className="relative flex gap-x-3 pt-3">
          <div className="flex h-6 items-center">
            <input
              id="offers"
              name="offers"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
            />
          </div>
          <div className="text-sm leading-6">
            <label htmlFor="offers" className="text-captionColor text-sm">
              Newsletter
            </label>
          </div>
        </div>
        <div className="text-center lg:text-end">
          <button
            type="submit"
            className="text-white bg-primary rounded-md px-3 py-2 mt-3 min-w-[260px]"
          >
            Done
          </button>
        </div>
      </form>
    </div>
  );
}
