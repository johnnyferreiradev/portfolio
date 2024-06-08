"use client";

import { cn } from "@/lib/utils";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

interface ProjectProps {
  imageAlt: string;
  imageSrc: string;
  title: string;
  text: string;
  techs: string[];
  accessTips: string | null;
  url: string;
}

export function Project({
  accessTips,
  imageAlt,
  imageSrc,
  title,
  text,
  techs,
  url,
}: ProjectProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
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
          <p className="text-sm mb-1">Tecnologias:</p>
          <div>
            {techs.map((item, index) => (
              <Fragment key={index}>
                <span>{item}</span> {index < techs.length - 1 ? "• " : ""}
              </Fragment>
            ))}
          </div>
        </div>
        <Button
          variant="link"
          asChild
          className="font-medium text-indigo-600 text-center md:text-start px-0 text-base"
        >
          <Link href={url} target="_blank">
            <span className="mr-2">Acessar</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Link>
        </Button>
        {accessTips && <p className="text-xs text-slate-500">{accessTips}</p>}
      </div>
      <Link href={url} target="_blank">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={80}
          height={80}
          className="w-full max-w-[600px] pt-8 flex-1"
        />
      </Link>
    </motion.div>
  );
}
