import { cn } from "@/lib/utils";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export function Project({
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
        "flex flex-col-reverse lg:flex-row gap-6 justify-between items-center flex-1",
        "bg-slate-100 px-8 py-10 md:p-16 rounded-[56px] overflow-hidden"
      )}
    >
      <div className="flex flex-col gap-8 flex-1 w-full min-w-full md:min-w-64 items-center lg:items-start">
        <h4 className="text-xl font-bold leading-6 text-center lg:text-start">
          {title}
        </h4>
        <p className="font-medium w-full max-w-96 text-base text-center lg:text-start">
          {text}
        </p>
        <div className="text-slate-500 font-medium text-center lg:text-start">
          <p>Tecnologias:</p>
          <div>
            <span>Tec 1</span> •<span>Tec 1</span> •<span>Tec 1</span>
          </div>
        </div>
        <Link
          href="#"
          className="font-medium text-indigo-600 text-center md:text-start"
        >
          <span>Acessar </span>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </Link>
      </div>
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={80}
        height={80}
        className="w-full max-w-[600px] pt-8 flex-1"
      />
    </div>
  );
}
