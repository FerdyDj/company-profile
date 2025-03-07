import Image from "next/image";

export default function Message() {
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-70deg] bg-white ring-1 shadow-xl shadow-indigo-600/10 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <figure className="mt-10">
          <blockquote className="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
            <p>
              “We continue our responsible journey to develop and improve our
              practices. We believe that certification is key to transparent,
              responsible practice, which is why we work with certified
              standards and are proud to be a GOTS*, GRS*, and OCS* certified
              brand. *Certified by Ecocert Greenlife, license number 111789.”
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <Image
              alt="pic-shania"
              src="/shania.jpg"
              width={50}
              height={50}
              className="mx-auto h-12 object-cover rounded-full"
            ></Image>
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">Shania Twain</div>
              <div className="text-gray-600">CEO of Kids Company</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
