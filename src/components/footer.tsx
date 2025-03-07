import Image from "next/image";
import Link from "next/link";
import { FaDiscord, FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <section className="py-10 bg-gradient-to-b from-gray-50 to-amber-50 sm:pt-16 lg:pt-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
          <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
            <Image
              src="/logo.png"
              alt="pic-logo"
              width={200}
              height={100}
            ></Image>

            <p className="text-base leading-relaxed text-gray-600 mt-7">
            &quot;Where comfort meets style,and every child shines bright!&quot;
            </p>

            <ul className="flex items-center space-x-3 mt-9">
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-fuchsia-700 focus:bg-fuchsia-700"
                >
                  <FaTwitter/>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-fuchsia-700 focus:bg-fuchsia-700"
                >
                  <FaFacebook />
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-fuchsia-700 focus:bg-fuchsia-700"
                >
                  <FaInstagram />
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-fuchsia-700 focus:bg-fuchsia-700"
                >
                  <FaDiscord />
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-fuchsia-700 focus:bg-fuchsia-700"
                >
                  <FaGithub />
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-fuchsia-700 focus:bg-fuchsia-700"
                >
                  <FaXTwitter />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Company
            </p>

            <ul className="mt-6 space-y-4">
              <li>
                <Link
                  href="/About"
                  className="flex text-base text-black transition-all duration-200 hover:text-fuchsia-700 focus:text-fuchsia-700"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/Product"
                  className="flex text-base text-black transition-all duration-200 hover:text-fuchsia-700 focus:text-fuchsia-700"
                >
                  Product
                </Link>
              </li>

              <li>
                <Link
                  href="/Teams"
                  className="flex text-base text-black transition-all duration-200 hover:text-fuchsia-700 focus:text-fuchsia-700"
                >
                  Teams
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Help
            </p>

            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href="#"
                  title="customer-support"
                  className="flex text-base text-black transition-all duration-200 hover:text-fuchsia-700 focus:text-fuchsia-700"
                >
                  Customer Support
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title="delivery-details"
                  className="flex text-base text-black transition-all duration-200 hover:text-fuchsia-700 focus:text-fuchsia-700"
                >
                  Delivery Details
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title="terms&conditions"
                  className="flex text-base text-black transition-all duration-200 hover:text-fuchsia-700 focus:text-fuchsia-700"
                >
                  Terms & Conditions
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title="privacy-policy"
                  className="flex text-base text-black transition-all duration-200 hover:text-fuchsia-700 focus:text-fuchsia-700"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Subscribe to newsletter
            </p>

            <form action="#" method="POST" className="mt-6">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-fuchsia-700 caret-fuchsia-700"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center px-6 py-4 mt-3 font-semibold text-white transition-all duration-200 bg-blue-700 rounded-xl hover:bg-fuchsia-700 focus:bg-fuchsia-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <hr className="mt-16 mb-10 border-gray-200" />

        <p className="text-sm text-center text-gray-600">
          © Copyright 2025, <span className="font-bold text-amber-500">KIDS</span> All Rights Reserved
        </p>
      </div>
    </section>
  );
}
