import FromLeft from "@/components/fromLeft";
import FromRight from "@/components/fromRight";
import ScrollAnimation from "@/components/scrollanimation";
import Image from "next/image";

export default function About() {
  return (
    <div className="py-4 bg-white sm:py-8 lg:py-12">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl rounded-md">
            About Us
          </h2>
          <hr className="border-4 my-8 mx-8" />
          <p className="text-left px-8">
            Welcome to Kids Company, where creativity, style, and comfort come
            together to craft clothing that celebrates the spirit of childhood.
            We believe that every child deserves the chance to explore, create,
            and express themselves freely, and our mission is to help make that
            happen—one outfit at a time. More than just a clothing brand, we are
            a passionate community that understands the joy and energy of being
            a kid. We know that childhood is a time of discovery, imagination,
            and endless fun, and we are here to provide children with the tools
            to express their individuality. Whether they&apos;re dressing up for a
            special occasion or playing with friends in the backyard, our
            clothing is designed to keep up with their vibrant personalities and
            active lifestyles. From playful patterns and bold colors to soft,
            durable fabrics, every piece of our collection is made with care and
            attention to detail. We focus on creating stylish, comfortable, and
            long-lasting apparel that stands the test of time—because we believe
            that kids should feel confident, comfortable, and inspired every
            day. At Kids Company, we are more than just a brand—we&apos;re a family.
            We are committed to supporting parents and caregivers as they raise
            confident, creative, and happy children. By choosing our clothing,
            you&apos;re not just buying a product—you&apos;re becoming part of a community
            that values imagination, fun, and the simple joy of being a kid.
            Join us on this journey, and let&apos;s make childhood even more
            colorful, playful, and full of possibilities.
          </p>
          <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl xl:text-3xl rounded-md py-8 text-left px-8">
            Company History
          </h3>
          <p className="text-left px-8">
            Founded in 1985 by Shania Twain, Kids Company began with a simple
            vision: to create clothing that combines style, comfort, and
            durability. From the very beginning, Shania saw a gap in the market
            for kids clothing that could keep up with the energy and creativity
            of children, without compromising on quality or design. Over the
            years, Kids Company has grown into a trusted brand for parents and
            children alike, offering eco-friendly and ethically made clothing
            that reflects the vibrant spirit of childhood. With each milestone,
            we continue to expand our reach while staying true to our roots of
            quality, sustainability, and fun.
          </p>
          <ScrollAnimation>
          <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl xl:text-3xl py-8 text-center px-8 mt-8">
            Team Members
          </h3>
          <div className="grid max-w-6xl grid-cols-1 px-20 mx-auto mt-2 text-center sm:px-0 md:mt-12 gap-x-4 gap-y-8 lg:gap-x-8 xl:gap-x-16">
            <div className="flex-row md:flex w-full">
              <Image
                className="object-cover w-32 h-32 mx-auto my-8 md:my-0 md:mx-8 rounded-full lg:w-44 lg:h-44"
                src="/shania.jpg"
                alt="CEO"
                width={176}
                height={176}
              />
              <div className="flex-row place-content-center text-left w-full md:w-[70%]">
                <p className="text-lg font-bold text-gray-900 sm:text-xl py-2 max-md:text-center">
                  Co Founder, Chief Executive Officer
                </p>
                <p className="flex-1 text-base font-normal text-gray-600">
                  Shania Twain is the visionary founder and Chief Executive
                  Officer of Kids Company. With her deep commitment to creating
                  innovative, high-quality clothing for kids, she&apos;s driven
                  the company&apos;s growth while ensuring sustainability and
                  ethical practices remain at the core of the brand.
                </p>
              </div>
            </div>

            <div className="flex-row md:flex w-full">
              <Image
                className="object-cover w-32 h-32 mx-auto my-8 md:my-0 md:mx-8 rounded-full lg:w-44 lg:h-44"
                src="/mark.jpg"
                alt="Operations Manager"
                width={176}
                height={176}
              />
              <div className="flex-row place-content-center text-left w-full md:w-[70%]">
                <p className="text-lg font-bold text-gray-900 sm:text-xl py-2 max-md:text-center">
                  Operations Manager
                </p>
                <p className="flex-1 text-base font-normal text-gray-600">
                  Mark Davis oversees the day-to-day operations at Kids Company.
                  With his extensive experience in logistics and supply chain
                  management, Mark ensures our production runs smoothly, making
                  sure that every piece of clothing reaches our customers on
                  time and in perfect condition.
                </p>
              </div>
            </div>

            <div className="flex-row md:flex w-full">
              <Image
                className="object-cover w-32 h-32 mx-auto my-8 md:my-0 md:mx-8 rounded-full lg:w-44 lg:h-44"
                src="/emily.jpg"
                alt="Head Designer"
                width={176}
                height={176}
              />
              <div className="flex-row place-content-center text-left w-full md:w-[70%]">
                <p className="text-lg font-bold text-gray-900 sm:text-xl py-2 max-md:text-center">
                  Head Designer
                </p>
                <p className="flex-1 text-base font-normal text-gray-600">
                  Emily Johnson leads our design team with a keen eye for both
                  style and function. Emily&apos;s passion for design and her
                  understanding of children&apos;s needs in clothing allow her to
                  create collections that are both trendy and comfortable,
                  ensuring every child feels confident and free to express
                  themselves.
                </p>
              </div>
            </div>
          </div>
          </ScrollAnimation>
          <div className="grid max-w-6xl grid-cols-1 md:grid-cols-2 px-20 mx-auto mt-2 text-center sm:px-0 md:mt-12 gap-x-4 gap-y-8 lg:gap-x-8 xl:gap-x-16">
            <FromLeft>
            <div className="w-full">
              <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl xl:text-3xl py-8 text-center md:text-left">
                Culture and Values
              </h3>
              <p className="text-base font-normal text-gray-600 text-left">
                At Kids Company, we believe that a positive and collaborative
                culture is key to our success. We are a team of creative,
                innovative, and dedicated professionals who work together with a
                shared goal: to deliver the best clothing for children that
                supports their creativity and individuality. Our culture is
                rooted in respect, inclusivity, and a commitment to making a
                positive impact. Every member of our team is encouraged to bring
                their ideas to the table, and we value creativity,
                collaboration, and hard work. At the heart of our company is the
                belief that every child deserves to feel good in what they wear.
                We strive to create a welcoming and fun environment where our
                team thrives and can make a difference in the lives of children
                and families around the world.
              </p>
            </div>
            </FromLeft>
            <FromRight>
            <div className="w-full">
              <Image
                src={"/culture.jpg"}
                alt="culture-and-values"
                width={500}
                height={500}
                className="object-cover w-full h-full rounded-xl"
              ></Image>
            </div>
            </FromRight>
          </div>
        </div>
      </div>
    </div>
  );
}
