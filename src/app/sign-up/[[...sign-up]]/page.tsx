"use client";

import { signIn } from "next-auth/react";
import signGoogle from "/public/assets/signGoogle.png";
import signInApple from "/public/assets/signInApple.png";
import Image from "next/image";
import Link from "next/link";
import { PiEye, PiEyeClosed } from "react-icons/pi";
import { useState } from "react";
import SignInUpSide from "@/components/sign_in_up_side";
import { SignInButton } from '@clerk/nextjs';

export default function SignUp() {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <main dir="ltr">
            <div className="flex flex-wrap">
                <div className="lg:basis-1/2 basis-full bg-bgBrimary lg:min-h-screen">
                    <SignInUpSide>
                        <div className="pt-8 mb-12">
                            <p className="text-sm font-bold text-blackText mb-6">If you already have an account with us</p>
                            <Link
                                href={"./sign-in"}
                                className="text-white bg-primary rounded-md px-3 py-2 w-[180px] cursor-pointer block mx-auto"
                            >
                                Login
                            </Link>
                        </div>
                    </SignInUpSide>
                </div>
                <div className="lg:basis-1/2 basis-full bg-mainBg lg:min-h-screen py-12 px-3 mx-auto">
                    <div className="max-w-[500px] mx-auto">
                        <h1 className="text-center text-3xl font-bold text-blackText mb-8">Sign up</h1>
                        <div className="flex flex-wrap lg:justify-between justify-center pb-6 mb-6 border-b">
                            <SignInButton strategy="oauth_google">
                                <button className="mx-3 mb-4" >
                                    <Image src={signGoogle} alt="google" width={210}></Image>
                                </button>
                                </SignInButton>
                                <button className="mx-3 mb-4" onClick={() => signIn("google")}>
                                    <Image src={signInApple} alt="google" width={210}></Image>
                                </button>
                        </div>
                        <form className="max-w-[600px] mx-auto text-center">
                            <div className="mx-auto">
                                <div className="flex flex-wrap justify-between">
                                    <div className="relative lg:w-[49%] w-full mb-4">
                                        <input
                                            type="text"
                                            name="firstName"
                                            id="firstName"
                                            autoComplete="firstName"
                                            className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-0 shadow-sm ring-1 ring-inset ring-gray-300 dark:text-white dark:border-gray-600 peer peer-focus:ring-1 peer-focus:ring-primary"
                                            placeholder=""
                                        />
                                        <label htmlFor="firstName" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-mainBg dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:mx-3">First Name</label>
                                    </div>
                                    <div className="relative lg:w-[49%] w-full mb-4">
                                        <input
                                            type="text"
                                            name="lastName"
                                            id="lastName"
                                            autoComplete="lastName"
                                            className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-0 shadow-sm ring-1 ring-inset ring-gray-300 dark:text-white dark:border-gray-600 peer peer-focus:ring-1 peer-focus:ring-primary"
                                            placeholder=""
                                        />
                                        <label htmlFor="lastName" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-mainBg dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:mx-3">Last Name</label>
                                    </div>
                                </div>
                                <div className="flex flex-wrap justify-between">
                                    <div className="relative lg:w-[49%] w-full mb-4">
                                        <input
                                            type="text"
                                            name="email"
                                            id="email"
                                            autoComplete="email"
                                            className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-0 shadow-sm ring-1 ring-inset ring-gray-300 dark:text-white dark:border-gray-600 peer peer-focus:ring-1 peer-focus:ring-primary"
                                            placeholder=""
                                        />
                                        <label htmlFor="email" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-mainBg dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:mx-3">Email</label>
                                    </div>
                                    <div className="relative lg:w-[49%] w-full mb-4">
                                        <input
                                            type="text"
                                            name="country"
                                            id="country"
                                            autoComplete="country"
                                            className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-0 shadow-sm ring-1 ring-inset ring-gray-300 dark:text-white dark:border-gray-600 peer peer-focus:ring-1 peer-focus:ring-primary"
                                            placeholder=""
                                        />
                                        <label htmlFor="country" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-mainBg dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:mx-3">Country</label>
                                    </div>
                                </div>
                                <div className="relative w-full mb-4">
                                    <input
                                        type="text"
                                        name="phone"
                                        id="phone"
                                        autoComplete="phone"
                                        className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-0 shadow-sm ring-1 ring-inset ring-gray-300 dark:text-white dark:border-gray-600 peer peer-focus:ring-1 peer-focus:ring-primary"
                                        placeholder=""
                                    />
                                    <label htmlFor="phone" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-mainBg dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:mx-3">Telephone</label>
                                </div>
                                <div className="flex flex-wrap justify-between border-b border-t pt-4 mb-4">

                                    <div className="relative lg:w-[49%] w-full mb-4">
                                        <input type={showPassword ? "text" : "password"} id="password" className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-0 shadow-sm ring-1 ring-inset ring-gray-300 dark:text-white dark:border-gray-600 peer peer-focus:ring-1 peer-focus:ring-primary" placeholder="" />
                                        <label htmlFor="password" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-mainBg dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:mx-3">Password</label>
                                        <div role="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 end-0 flex items-center p-3.5 z-10">
                                            {
                                                showPassword ? <PiEye /> : <PiEyeClosed />
                                            }
                                        </div>
                                    </div>
                                    <div className="relative lg:w-[49%] w-full mb-4">
                                        <input type={showPassword ? "text" : "password"} id="passwordConfirm" className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-0 shadow-sm ring-1 ring-inset ring-gray-300 dark:text-white dark:border-gray-600 peer peer-focus:ring-1 peer-focus:ring-primary" placeholder="" />
                                        <label htmlFor="passwordConfirm" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-mainBg dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:mx-3">Confirm Password</label>
                                        <div role="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 end-0 flex items-center p-3.5 z-10">
                                            {
                                                showPassword ? <PiEye /> : <PiEyeClosed />
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="relative flex gap-x-3 mb-1">
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
                                <div className="relative flex gap-x-3 mb-4">
                                    <div className="flex h-6 items-center">
                                        <input
                                            id="agreeTerms"
                                            name="agreeTerms"
                                            type="checkbox"
                                            className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                                        />
                                    </div>
                                    <div className="text-sm leading-6">
                                        <label htmlFor="agreeTerms" className="text-captionColor text-sm">
                                            I have read and agree to the <Link href="#" className="text-primary underline">Terms & Conditions</Link>
                                        </label>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button
                                        type="submit"
                                        className="block w-full text-white bg-graySubText rounded-md px-3 py-2"
                                    >
                                        Sign up
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}