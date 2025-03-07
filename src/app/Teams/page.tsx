import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Teams() {
  return (
    <div className="py-4 bg-white sm:py-8 lg:py-12">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl">
            Meet Our Team Members
          </h2>
          <hr className="border-4 my-8 mx-8" />
          <p className="text-left px-8">
            At Kids Company, we believe that our people are the heartbeat of the
            brand. From our creative designers to our dedicated customer service
            professionals, we have a team of passionate individuals who bring
            their unique skills and ideas to every aspect of our work. Our team
            shares a common goal: to make every child feel confident,
            comfortable, and stylish.
          </p>
        </div>

        <div className="grid max-w-6xl grid-cols-1 px-20 mx-auto mt-12 text-center sm:px-0 sm:grid-cols-2 md:mt-20 gap-x-8 md:grid-cols-3 gap-y-12 lg:gap-x-16 xl:gap-x-20">
          <div>
            <Image
              className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 hover:transition hover:scale-105 hover:ease-in hover:duration-300"
              src="/shania.jpg"
              alt="CEO"
              width={176}
              height={176}
            />
            <p className="mt-5 text-lg font-bold text-gray-900 sm:text-xl sm:mt-8">
              Shania Twain
            </p>
            <p className="mt-2 text-base font-normal text-gray-600">
              Co Founder, Chief Executive Officer
            </p>
            <div className="flex gap-3 justify-center my-4">
              <Link href="/Teams">
                <FaFacebook className="w-5 h-5 text-blue-500 hover:text-fuchsia-700 hover:cursor-pointer" />
              </Link>
              <Link href="/Teams">
                <FaInstagram className="w-5 h-5 text-pink-500 hover:text-fuchsia-700 hover:cursor-pointer" />
              </Link>
              <Link href="/Teams">
                <FaXTwitter className="w-5 h-5 text-black hover:text-fuchsia-700 hover:cursor-pointer" />
              </Link>
            </div>
          </div>

          <div>
            <Image
              className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 hover:transition hover:scale-105 hover:ease-in hover:duration-300"
              src="/mark.jpg"
              alt="Operations Manager"
              width={176}
              height={176}
            />
            <p className="mt-5 text-lg font-bold text-gray-900 sm:text-xl sm:mt-8">
              Mark Davis
            </p>
            <p className="mt-2 text-base font-normal text-gray-600">
              Operations Manager
            </p>
            <div className="flex gap-3 justify-center my-4">
              <Link href="/Teams">
                <FaFacebook className="w-5 h-5 text-blue-500 hover:text-fuchsia-700 hover:cursor-pointer" />
              </Link>
              <Link href="/Teams">
                <FaInstagram className="w-5 h-5 text-pink-500 hover:text-fuchsia-700 hover:cursor-pointer" />
              </Link>
              <Link href="/Teams">
                <FaXTwitter className="w-5 h-5 text-black hover:text-fuchsia-700 hover:cursor-pointer" />
              </Link>
            </div>
          </div>

          <div>
            <Image
              className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 hover:transition hover:scale-105 hover:ease-in hover:duration-300"
              src="/emily.jpg"
              alt="Head Designer"
              width={176}
              height={176}
            />
            <p className="mt-5 text-lg font-bold text-gray-900 sm:text-xl sm:mt-8">
              Emily Johnson
            </p>
            <p className="mt-2 text-base font-normal text-gray-600">
              Head Designer
            </p>
            <div className="flex gap-3 justify-center my-4">
              <Link href="/Teams">
                <FaFacebook className="w-5 h-5 text-blue-500 hover:text-fuchsia-700 hover:cursor-pointer" />
              </Link>
              <Link href="/Teams">
                <FaInstagram className="w-5 h-5 text-pink-500 hover:text-fuchsia-700 hover:cursor-pointer" />
              </Link>
              <Link href="/Teams">
                <FaXTwitter className="w-5 h-5 text-black hover:text-fuchsia-700 hover:cursor-pointer" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 sm:mt-16">
          <svg
            className="w-auto h-4 mx-auto text-gray-300"
            viewBox="0 0 172 16"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              y1="-0.5"
              x2="18.0278"
              y2="-0.5"
              transform="matrix(-0.5547 0.83205 0.83205 0.5547 11 1)"
            />
            <line
              y1="-0.5"
              x2="18.0278"
              y2="-0.5"
              transform="matrix(-0.5547 0.83205 0.83205 0.5547 46 1)"
            />
            <line
              y1="-0.5"
              x2="18.0278"
              y2="-0.5"
              transform="matrix(-0.5547 0.83205 0.83205 0.5547 81 1)"
            />
            <line
              y1="-0.5"
              x2="18.0278"
              y2="-0.5"
              transform="matrix(-0.5547 0.83205 0.83205 0.5547 116 1)"
            />
            <line
              y1="-0.5"
              x2="18.0278"
              y2="-0.5"
              transform="matrix(-0.5547 0.83205 0.83205 0.5547 151 1)"
            />
            <line
              y1="-0.5"
              x2="18.0278"
              y2="-0.5"
              transform="matrix(-0.5547 0.83205 0.83205 0.5547 18 1)"
            />
            <line
              y1="-0.5"
              x2="18.0278"
              y2="-0.5"
              transform="matrix(-0.5547 0.83205 0.83205 0.5547 53 1)"
            />
            <line
              y1="-0.5"
              x2="18.0278"
              y2="-0.5"
              transform="matrix(-0.5547 0.83205 0.83205 0.5547 88 1)"
            />
            <line
              y1="-0.5"
              x2="18.0278"
              y2="-0.5"
              transform="matrix(-0.5547 0.83205 0.83205 0.5547 123 1)"
            />
            <line
              y1="-0.5"
              x2="18.0278"
              y2="-0.5"
              transform="matrix(-0.5547 0.83205 0.83205 0.5547 158 1)"
            />
            <line
              y1="-0.5"
              x2="18.0278"
              y2="-0.5"
              transform="matrix(-0.5547 0.83205 0.83205 0.5547 25 1)"
            />
            <line
              y1="-0.5"
              x2="18.0278"
              y2="-0.5"
              transform="matrix(-0.5547 0.83205 0.83205 0.5547 60 1)"
            />
            <line
              y1="-0.5"
              x2="18.0278"
              y2="-0.5"
              transform="matrix(-0.5547 0.83205 0.83205 0.5547 95 1)"
            />
            <line
              y1="-0.5"
              x2="18.0278"
              y2="-0.5"
              transform="matrix(-0.5547 0.83205 0.83205 0.5547 130 1)"
            />
            <line
              y1="-0.5"
              x2="18.0278"
              y2="-0.5"
              transform="matrix(-0.5547 0.83205 0.83205 0.5547 165 1)"
            />
            <line
              y1="-0.5"
              x2="18.0278"
              y2="-0.5"
              transform="matrix(-0.5547 0.83205 0.83205 0.5547 32 1)"
            />
            <line
              y1="-0.5"
              x2="18.0278"
              y2="-0.5"
              transform="matrix(-0.5547 0.83205 0.83205 0.5547 67 1)"
            />
            <line
              y1="-0.5"
              x2="18.0278"
              y2="-0.5"
              transform="matrix(-0.5547 0.83205 0.83205 0.5547 102 1)"
            />
            <line
              y1="-0.5"
              x2="18.0278"
              y2="-0.5"
              transform="matrix(-0.5547 0.83205 0.83205 0.5547 137 1)"
            />
            <line
              y1="-0.5"
              x2="18.0278"
              y2="-0.5"
              transform="matrix(-0.5547 0.83205 0.83205 0.5547 172 1)"
            />
            <line
              y1="-0.5"
              x2="18.0278"
              y2="-0.5"
              transform="matrix(-0.5547 0.83205 0.83205 0.5547 39 1)"
            />
            <line
              y1="-0.5"
              x2="18.0278"
              y2="-0.5"
              transform="matrix(-0.5547 0.83205 0.83205 0.5547 74 1)"
            />
            <line
              y1="-0.5"
              x2="18.0278"
              y2="-0.5"
              transform="matrix(-0.5547 0.83205 0.83205 0.5547 109 1)"
            />
            <line
              y1="-0.5"
              x2="18.0278"
              y2="-0.5"
              transform="matrix(-0.5547 0.83205 0.83205 0.5547 144 1)"
            />
          </svg>
        </div>

        <div className="max-w-3xl mx-auto mt-12 space-y-8 sm:space-y-0 sm:flex sm:items-center sm:justify-center sm:mt-16 sm:gap-x-16">
          <div>
            <Image
              className="w-auto mx-auto"
              src="/logo.png"
              alt="pic-logo"
              width={300}
              height={150}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
