import Image from "next/image";

const images = ["/images/hearth_visitors.png", "/images/boatride.png", "/images/hammer.jpg", "/images/spraycanhands.png", "/images/landscape.png", "/images/tlcflag.png"];

export default function MemoryBoard() {
  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <p className="uppercase tracking-[0.4em] text-zinc-500 text-xs">
            Field Archives
          </p>
          <h2 className="text-4xl md:text-5xl font-bold uppercase">
            Survivor Memory Board
          </h2>
        </div>

        {/* Scrapboard */}
        <div className="grid grid-cols-12 gap-4 auto-rows-[120px]">

          {/* Large feature image */}
          <div className="col-span-12 md:col-span-7 row-span-3 relative group overflow-hidden border border-white/10 rotate-[-1deg]">
            <Image
              src={images[0]}
              alt=""
              fill
              className="object-cover group-hover:scale-110 transition duration-700"
            />
          </div>

          {/* Medium image */}
          <div className="col-span-12 md:col-span-5 row-span-2 relative group overflow-hidden border border-white/10 rotate-[1deg]">
            <Image
              src={images[1]}
              alt=""
              fill
              className="object-cover group-hover:scale-110 transition duration-700"
            />
          </div>

          {/* Small clipped images */}
          <div className="col-span-6 md:col-span-3 row-span-2 relative group overflow-hidden border border-white/10 rotate-[2deg]">
            <Image
              src={images[2]}
              alt=""
              fill
              className="object-cover group-hover:scale-110 transition duration-700"
            />
          </div>

          <div className="col-span-6 md:col-span-3 row-span-2 relative group overflow-hidden border border-white/10 rotate-[-2deg]">
            <Image
              src={images[3]}
              alt=""
              fill
              className="object-cover group-hover:scale-110 transition duration-700"
            />
          </div>

          {/* Bottom wide image */}
          <div className="col-span-12 md:col-span-6 row-span-2 relative group overflow-hidden border border-white/10 rotate-[0.5deg]">
            <Image
              src={images[4]}
              alt=""
              fill
              className="object-cover group-hover:scale-110 transition duration-700"
            />
          </div>

          {/* Final small image */}
          <div className="col-span-12 md:col-span-6 row-span-2 relative group overflow-hidden border border-white/10 rotate-[-0.5deg]">
            <Image
              src={images[5]}
              alt=""
              fill
              className="object-cover group-hover:scale-110 transition duration-700"
            />
          </div>

        </div>
      </div>
    </section>
  );
}