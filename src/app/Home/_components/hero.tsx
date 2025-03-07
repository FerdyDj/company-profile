export default function Hero() {
  return (
    <div className="max-w-screen h-screen -mt-[68px]">
      <video
        className="w-full h-full object-cover overflow-hidden"
        autoPlay
        muted
        loop
      >
        <source src="/kidsvid.mp4" type="video/mp4" />
      </video>
      <div className="flex items-center w-full">
        <div className="absolute top-24 left-7 w-fit h-fit md:h-20 max-sm:text-4xl sm:text-5xl xl:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-amber-400 to-sky-400 shadow-2xl">
          &quot;Where comfort meets style,
        </div>
        <div className="absolute max-sm:left-4 right-7 bottom-16 w-fit h-24 md:h-20 max-sm:text-4xl sm:text-5xl xl:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-amber-400 to-sky-400 shadow-2xl">
          and every child shines bright!&quot;
        </div>
      </div>
    </div>
  );
}
