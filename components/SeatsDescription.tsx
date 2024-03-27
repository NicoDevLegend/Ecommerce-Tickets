import { useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

export default function SeatsDescription({ desc }: { desc: [] | {} }) {
  const [seatsDesc, setSeatsDesc] = useState<string[]>([""]);

  useEffect(() => {
    if (desc instanceof Array) {
      setSeatsDesc(desc);
    } else if (desc instanceof Object) {
      const seatsKeys = Object.keys(desc);
      const seatsValues = Object.values(desc);

      const seatsArray = seatsKeys
        .map((seat, i) => `${seat} X${seatsValues[i]}`)
        .filter((_, i) => seatsValues[i] > 0);
      setSeatsDesc(seatsArray);
    }
  }, [desc]);

  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button>
            <ChevronUpIcon
              className={`${
                open ? "rotate-180 transform" : ""
              } h-7 w-7 mx-auto mt-3 mb-1 shadow shadow-black bg-pink-600 text-green-500 hover:text-pink-500 hover:bg-green-500`}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="bg-green-200 text-pink-900 border-b-2 border-r-2 border-green-600 text-center rounded-sm p-2">
            <p className="mb-3 text-lg">Seats:</p>
            {seatsDesc.map((s, i) => (
              <li key={i} className="mb-2 font-bold text-pink-600 list-none">
                &#9733; {s}
              </li>
            ))}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
