import clsx from "clsx";
import Image from "next/image";

type Props = {
  className?: string;
  source: string;
  alt: string;
};

export default function Photo({ className, source, alt }: Props) {
  return (
    <div className={clsx("")}>
      <Image
        src={
          source ||
          "/Images/Screenshot 2025-02-02 at 18-07-01 Vite React TS.png"
        }
        alt={alt || "image"}
        width={300}
        height={300}
        className={clsx(
          "rounded-[5rem] h-80 w-[18rem] object-top object-contain",
          className
        )}
      />
    </div>
  );
}
