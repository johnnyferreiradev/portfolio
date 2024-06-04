import { cn } from "@/lib/utils";
import Image from "next/image";

export function AboutMeItem({
  imageAlt,
  imageSrc,
  title,
  text,
}: {
  imageAlt: string;
  imageSrc: string;
  title: string;
  text: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-6 flex-1",
        "bg-slate-100 px-8 py-10 rounded-[56px]",
        "text-center"
      )}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={80}
        height={80}
        className="mb-2"
      />
      <h4 className="text-lg font-bold leading-6">{title}</h4>
      <p className="font-medium w-full max-w-96">{text}</p>
    </div>
  );
}
