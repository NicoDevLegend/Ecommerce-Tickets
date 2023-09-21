import Image from "next/image";

const callouts = [
  {
    name: "Rockpalooza",
    description:
      "A rock music festival featuring iconic bands from around the world a weekend filled with live performances.",
    imageSrc: "https://placeholder.pics/svg/",
    imageAlt: "Rockpalooza",
    href: "#",
  },
  {
    name: "Magic Mystique",
    description:
      "An enchanting magic show that combines astonishing illusions with elements of mystery and suspense to keep the audience spellbound.",
    imageSrc: "https://placeholder.pics/svg/",
    imageAlt: "Magic Mystique",
    href: "#",
  },
  {
    name: "Extreme X-Games",
    description:
      "An adrenaline-packed sports event that showcases extreme sports like skateboarding, BMX biking, motocross, and more, where athletes push the limits of what's possible in their respective disciplines.",
    imageSrc: "https://placeholder.pics/svg/",
    imageAlt: "Extreme X-Games",
    href: "#",
  },
];

export default function Previews() {
  return (
    <div className="bg-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-800">Upcoming Events</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <Image
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    width={100}
                    height={100}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-lg text-gray-500">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">
                  {callout.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
