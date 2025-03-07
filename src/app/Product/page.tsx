import ScrollAnimation from "@/components/scrollanimation";
import Testi from "../Home/_components/testimonial";
import BoyShirt from "./_components/boyshirt";
import BoyShort from "./_components/boyshort";
import GirlShirt from "./_components/girlshirt";
import GirlShort from "./_components/girlshort";
import Message from "./_components/message";

export default function Product() {
  return (
    <div className="pt-4 bg-white sm:pt-8 lg:pt-12">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl">
            Our Products
          </h2>
          <hr className="border-4 my-8 mx-8" />
          <p className="text-left px-8">
            At Kids Company, we specialize in high-quality clothing that
            combines style, comfort, and durability for children of all ages.
            Our collection is designed with both kids and parents in
            mind—offering a range of apparel that allows children to express
            themselves freely, while parents can trust that each piece is made
            to last. We use eco-friendly materials and ethical manufacturing
            practices to ensure that every product is as sustainable as it is
            fun. Whether you're looking for everyday essentials or something
            special, we have the perfect clothing for every occasion.
          </p>
        </div>
      </div>
      <ScrollAnimation>
        <BoyShirt />
      </ScrollAnimation>
      <ScrollAnimation>
        <BoyShort />
      </ScrollAnimation>
      <ScrollAnimation>
        <GirlShirt />
      </ScrollAnimation>
      <ScrollAnimation>
        <GirlShort />
      </ScrollAnimation>
      <Message />
      <Testi />
    </div>
  );
}
