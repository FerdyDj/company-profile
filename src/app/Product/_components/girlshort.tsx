import Image from "next/image";

export default function GirlShort() {
  return (
    <div className="px-4 max-w-7xl sm:px-6 lg:px-8 py-4 mb-8">
      <h2 className="pt-8 md:pt-0 px-8 text-3xl font-bold text-gray-700 sm:text-4xl xl:text-5xl">
        Girl Shorts & Pants
      </h2>
      <div className="flex-row md:flex p-8 gap-3">
        <div className="bg-white rounded-xl overflow-hidden shadow-lg w-full md:max-w-sm my-8 md:my-0">
          <div className="relative">
            <Image
              className="w-full object-cover hover:scale-105 overflow-hidden transition ease-in duration-300"
              src="/g1sh.jpg"
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
              Belli - Distressed Wash
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Light blue denim skirt in organic cotton. The skirt is
              knee-length, has a regular fit, and the waist is equipped with
              belt loops, button and zip closure.
            </p>
            <div className="flex items-center justify-between">
              <span className="font-bold text-lg text-blue-500">
                $18.99{" "}
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
              src="/g2sh.jpg"
              alt="Product Image"
              width={500}
              height={300}
            ></Image>
            <div className="absolute top-0 right-0 bg-blue-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
              NEW
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-medium mb-2">Amberly - Jungle Power</h3>
            <p className="text-gray-600 text-sm mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              vitae ante vel eros fermentum faucibus sit amet euismod lorem.
            </p>
            <div className="flex items-center justify-between">
              <span className="font-bold text-lg text-blue-500">$22.99</span>
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
              src="/g3sh.jpg"
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
              Addy - Distressed Washed
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Blue denim jeans in organic cotton. These jeans have a slight
              trumpet-shaped silhouette with front and back pockets.
            </p>
            <div className="flex items-center justify-between">
              <span className="font-bold text-lg text-blue-500">
                $19.99{" "}
                <span className="text-base font-normal line-through text-red-500">
                  $28.99
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
