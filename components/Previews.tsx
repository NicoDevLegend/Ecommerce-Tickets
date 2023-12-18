import Image from "next/image";

const callouts = [
  {
    name: "ROCKPALOOZA",
    description:
      "A rock music festival featuring iconic bands from around the world a weekend filled with live performances.",
    imageSrc: "/rkc-image.jpg",
    imageAlt: "Rockpalooza",
    href: "#",
  },
  {
    name: "MAGIC MYSTIQUE",
    description:
      "An enchanting magic show that combines astonishing illusions with elements of mystery and suspense to keep the audience spellbound.",
    imageSrc: "/magic-show.jpg",
    imageAlt: "Magic Mystique",
    href: "#",
  },
  {
    name: "EXTREME X-GAMES",
    description:
      "An adrenaline-packed sports event that showcases extreme sports like skateboarding, BMX biking, motocross, and more, where athletes push the limits of what's possible in their respective disciplines.",
    imageSrc: "/extreme-sports.jpg",
    imageAlt: "Extreme X-Games",
    href: "#",
  },
];

export default function Previews() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl py-16 sm:py-12 lg:max-w-none lg:py-24">
        <h2 className="bg-black border-r-4 border-b-4 border-green-400 max-w-max p-6 text-3xl font-bold text-white">
          &#9733; Upcoming Special Events &#9733;
        </h2>

        <div className="my-12 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
          {callouts.map((callout) => (
            <div key={callout.name} className="group relative">
              <div className="relative h-80 w-full overflow-hidden bg-white border-2 border-green-400 sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-90 sm:h-64">
                <Image
                  src={callout.imageSrc}
                  alt={callout.imageAlt}
                  width={500}
                  height={500}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="h-auto mt-3 p-3 bg-black border-b-4 border-r-4 border-green-400">
                <h3 className="mb-3 text-lg font-bold text-pink-500">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    &#9733; {callout.name} &#9733;
                  </a>
                </h3>
                <p className="text-base font-semibold text-white">
                  {callout.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
