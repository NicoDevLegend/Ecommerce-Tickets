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
    <div>
      <p className="mb-3 text-lg underline">Seats:</p>
      {seatsDesc.map((s, i) => (
        <p key={i}>{s}</p>
      ))}
    </div>
  );
}
