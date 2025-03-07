import Image from "next/image";

export default function BoyShirt() {
  return (
    <div className="px-4 max-w-7xl sm:px-6 lg:px-8 pt-4 sm:pt-8 lg:pt-12">
      <h2 className="pt-8 md:pt-0 px-8 text-3xl font-bold text-gray-700 sm:text-4xl xl:text-5xl">
        Boys T-Shirts
      </h2>
      <div className="flex-row md:flex p-8 gap-3">
        <div className="bg-white rounded-xl overflow-hidden shadow-lg w-full md:max-w-sm my-8 md:my-0">
          <div className="relative">
            <Image
              className="w-full object-cover hover:scale-105 overflow-hidden transition ease-in duration-300"
              src="/b1s.jpg"
              alt="Product Image"
              width={500}
              height={300}
            ></Image>
            <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
              SALE
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-medium mb-2">
              Monti - Big Smiley Blue
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Dark blue sweatshirt in soft organic cotton with ribbed edges at
              the neck, sleeves, and bottom of the sweatshirt. The sweatshirt
              has a loose fit with an all-over print of smiling beige faces.
            </p>
            <div className="flex items-center justify-between">
              <span className="font-bold text-lg text-blue-500">
                $17.99{" "}
                <span className="text-base font-normal line-through text-red-500">
                  $21.99
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
              src="/b2s.jpg"
              alt="Product Image"
              width={500}
              height={300}
            ></Image>
            <div className="absolute top-0 right-0 bg-blue-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
              NEW
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-medium mb-2">Riley - Football Calm</h3>
            <p className="text-gray-600 text-sm mb-4">
              Beige t-shirt in soft organic cotton with short sleeves and ribbed
              neckline. The t-shirt has a loose fit with an all-over print of
              the pattern on a football in light grey and beige colours.
            </p>
            <div className="flex items-center justify-between">
              <span className="font-bold text-lg text-blue-500">$19.99</span>
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
              src="/b3s.jpg"
              alt="Product Image"
              width={500}
              height={300}
            ></Image>
            <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
              SALE
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-medium mb-2">Mike - White Noise</h3>
            <p className="text-gray-600 text-sm mb-4">
              Off-white sweatshirt in soft organic cotton with raglan sleeves,
              ribbed edges at the neck, sleeves, and bottom of the sweatshirt.
              The sweatshirt has a loose fit with a green and soft smiling
              embroidery on the front.
            </p>
            <div className="flex items-center justify-between">
              <span className="font-bold text-lg text-blue-500">
                $17.99{" "}
                <span className="text-base font-normal line-through text-red-500">
                  $21.99
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
