"use client";

import { iUserAddress } from "@/code/dataModels";
// import G from "@/code/globalData";
import { useState, useEffect } from "react";
import { BiPlus, BiSolidPencil, BiSolidTrash } from "react-icons/bi";
const addresses: iUserAddress[] = [
  {
    id: 1,
    streetName: "123 Main St",
    address: "123 Main St, Apple Valley, CA 12345",
    city: "New York",
    country: "USA",
    zipcode: "10001",
    phone: "1234567890",
    isDefault: true,
  },
  {
    id: 2,
    streetName: "456 Main St",
    address: "456 Main St, Apple Valley, CA 12345",
    city: "New York",
    country: "USA",
    zipcode: "10001",
    phone: "1234567890",
    isDefault: false,
  },
];
export default function AddressContent() {
  // const currentUser = G.session.user;
  const [userAddresses, setUserAddresses] = useState<iUserAddress[]>([]);
  useEffect(() => {
    setUserAddresses(addresses);
  }, []);

  return (
    <div className="container px-0">
      <h2 className="text-2xl text-blackText font-bold mb-1">Address Book</h2>
      <span className="text-captionColor text-sm">Address Book Entries</span>
      {/* loop over addresses and display them in cards */}
      {userAddresses && userAddresses.length ? (
        userAddresses.map((address, i) => (
          <div
            className={`shadow-sm rounded-lg p-4 mb-4 border mt-3 ${
              address.isDefault ? "bg-bgBrimary" : "bg-white"
            }`}
            key={i + 1}
          >
            <h3 className="text-lg font-medium mb-2">Address {address.id}</h3>
            <div className="text-sm text-captionColor">
              <p>{address.streetName}</p>
              <p>{address.address}</p>
              <p>
                {address.city}, {address.zipcode}
              </p>
              <p>{address.country}</p>
              <p>{address.phone}</p>
            </div>
            <div className="mt-3 flex justify-center lg:justify-end text-sm font-medium">
              <button className="text-secondary mx-1 flex items-center">
                {" "}
                <BiSolidPencil className="mx-1" /> <span> Edit </span>{" "}
              </button>
              <button className="text-redColor mx-1 flex items-center">
                {" "}
                <BiSolidTrash className="mx-1" /> <span> Remove </span>{" "}
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className="text-sm text-captionColor text-center">
          No addresses found
        </div>
      )}

      <div className="flex justify-center lg:justify-end mt-3">
        <button
          type="submit"
          className="text-primary rounded-md px-3 py-2 mt-3 min-w-[260px] flex items-center justify-center border-2 border-solid border-primary bg-transparent font-medium hover:bg-primary hover:text-white transition-all duration-500 ease-in-out"
        >
          <BiPlus className="mx-1 text-xl" />
          <span className="mx-1">New Address</span>
        </button>
      </div>
    </div>
  );
}
