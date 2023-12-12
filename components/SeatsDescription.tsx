import { useEffect, useState } from "react";

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
    <div className="bg-black text-white border-b-4 border-r-4 border-lime-500 p-6">
      <p className="mb-3 text-lg underline">Seats:</p>
      {seatsDesc.map((s, i) => (
        <li key={i} className="mb-2 font-bold text-fuchsia-600 list-none">
          &#9733; {s}
        </li>
      ))}
    </div>
  );
}
