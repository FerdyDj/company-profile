import Image from "next/image";

export default function BoyShort() {
  return (
    <div className="px-4 max-w-7xl sm:px-6 lg:px-8 py-4">
      <h2 className="pt-8 md:pt-0 px-8 text-3xl font-bold text-gray-700 sm:text-4xl xl:text-5xl">
        Boy Shorts & Pants
      </h2>
      <div className="flex-row md:flex p-8 gap-3">
        <div className="bg-white rounded-xl overflow-hidden shadow-lg w-full md:max-w-sm my-8 md:my-0">
          <div className="relative">
            <Image
              className="w-full object-cover hover:scale-105 overflow-hidden transition ease-in duration-300"
              src="/b1sh.jpg"
              alt="Product Image"
              width={500}
              height={300}
            ></Image>
            <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
              SALE
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-medium mb-2">Amil - Big Smiley Blue</h3>
            <p className="text-gray-600 text-sm mb-4">
              Shorts in organic cotton jersey. The shorts are knee-length, have
              pockets at the front, and have a loose fit with an elastic waist,
              making them comfortable to wear. The shorts are blue with a print
              of smiling faces.
            </p>
            <div className="flex items-center justify-between">
              <span className="font-bold text-lg text-blue-500">
                $20.99{" "}
                <span className="text-base font-normal line-through text-red-500">
                  $25.99
                </span>
              </span>
              <a href="#">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                  Buy Now
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl overflow-hidden shadow-lg w-full md:max-w-sm my-8 md:my-0">
          <div className="relative">
            <Image
              className="w-full object-cover hover:scale-105 overflow-hidden transition ease-in duration-300"
              src="/b2sh.jpg"
              alt="Product Image"
              width={500}
              height={300}
            ></Image>
            <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
              SALE
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-medium mb-2">Aiden - Washed Down</h3>
            <p className="text-gray-600 text-sm mb-4">
              Light blue jeans in organic cotton with 5 pockets, straight legs,
              and a zip fly. These pants are inspired by the skateboarding scene
              and have a loose fit. The waistband of the jeans can be adjusted.
            </p>
            <div className="flex items-center justify-between">
              <span className="font-bold text-lg text-blue-500">
                $22.99{" "}
                <span className="text-base font-normal line-through text-red-500">
                  $29.99
                </span>
              </span>
              <a href="#">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                  Buy Now
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl overflow-hidden shadow-lg w-full md:max-w-sm my-8 md:my-0">
          <div className="relative">
            <Image
              className="w-full object-cover hover:scale-105 overflow-hidden transition ease-in duration-300"
              src="/b3sh.jpg"
              alt="Product Image"
              width={500}
              height={300}
            ></Image>
            <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
              SALE
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-medium mb-2">Alw - White Noise</h3>
            <p className="text-gray-600 text-sm mb-4">
              Beige baggy shorts in soft organic cotton. The shorts have a loose
              fit with a wide elastic waistband and drawstring, making them easy
              to adjust and comfortable to wear.
            </p>
            <div className="flex items-center justify-between">
              <span className="font-bold text-lg text-blue-500">
                $19.99{" "}
                <span className="text-base font-normal line-through text-red-500">
                  $25.99
                </span>
              </span>
              <a href="#">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                  Buy Now
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center">
        <a href="#">
          <button className="font-bold bg-gradient-to-r from-red-200 to-amber-200 text-gray-600 px-4 py-2 rounded-xl shadow-xl hover:from-amber-200 hover:to-red-200 hover:transition-transform hover:scale-105">
            Find More
          </button>
        </a>
      </div>
    </div>
  );
}
