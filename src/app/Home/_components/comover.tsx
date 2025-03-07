import FromRight from "@/components/fromRight";

export default function ComOver() {
  return (
    <div className="relative w-full h-full">
      <FromRight>
        <div className="absolute right-16 top-10 w-96 h-96 rounded-full bg-emerald-200 blur-2xl mix-blend-multiply max-lg:opacity-0"></div>
        <div className="absolute right-56 top-80 w-96 h-96 rounded-full bg-sky-200 blur-2xl mix-blend-multiply max-lg:opacity-0"></div>
        <div className="absolute right-36 bottom-16 w-96 h-96 rounded-full bg-amber-200 blur-2xl mix-blend-multiply max-lg:opacity-0"></div>
      </FromRight>
      <h2 className="max-sm:pl-4 pl-20 pt-8 sm:pt-20 font-bold text-4xl text-gray-700">
        About The Company
      </h2>
      <p className="max-sm:pl-4 sm:pl-20 mt-8 w-[480px] text-gray-700">
        <span className="font-extrabold text-amber-400">Kids Company</span> is a
        kid&apos;s clothing brand committed to offering stylish, comfortable,
        and durable apparel for children. Founded in 1985, our mission is to
        create high-quality clothing that not only looks great but also stands
        up to the energy and creativity of childhood. We use eco-friendly
        materials and ethical manufacturing practices to ensure that every piece
        is as sustainable as it is fun. Our journey began when
      </p>
      <h2 className="max-sm:pl-4 sm:pl-20 max-sm:pt-8 sm:pt-20 font-bold text-4xl text-gray-700">
        History
      </h2>
      <p className="max-sm:pl-4 sm:pl-20 pt-8 sm:pt-8 w-[480px] text-gray-700">
        <span className="font-bold">Shania Twain</span>&nbsp;
        <i>
          realized there was a need for clothing that combined style, comfort,
          and durability for kids. Since then, we&apos;ve grown into a brand
          that parents trust and children love. As a team, we are passionate
          about providing clothing that reflects the joy and individuality of
          childhood, with designs that appeal to both kids and their families.
        </i>
      </p>
      <h2 className="max-sm:pl-4 sm:pl-20 max-sm:pt-8 sm:pt-20 font-bold text-4xl text-gray-700">
        Culture and Team
      </h2>
      <p className="max-sm:pl-4 sm:pl-20 max-sm:pt-8 sm:pt-8 w-[480px] max-sm:mb-8 sm:mb-20 text-gray-700">
        At <span className="font-extrabold text-amber-400">Kids Company</span>,
        our culture is built on creativity, collaboration, and a commitment to
        making a positive impact. We&apos;re a diverse group of designers,
        manufacturers, and customer service professionals who work together to
        bring innovative designs to life. We believe in supporting each other
        and fostering an environment where everyone&apos;s ideas are valued. Our
        team is dedicated to ensuring that every piece of clothing we create not
        only meets the highest quality standards but also helps our customers
        feel confident and happy.
      </p>
    </div>
  );
}
