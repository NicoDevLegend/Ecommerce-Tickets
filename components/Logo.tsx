import Image from "next/image";
import icon from "@/public/favicon.svg";

export default function Logo() {
  return (
    <Image
      src={icon}
      alt="icon"
      width={60}
      height={60}
      className="mx-auto text-pink-600"
    />
  );
}
