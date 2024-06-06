"use client";

import { INSTAGRAM_URL, LINKEDIN_URL } from "@/settings";
import {
  faLinkedin,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { motion } from "framer-motion";

export function ContactMe() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="text-white flex flex-col gap-12 text-center pb-8 md:pb-16"
    >
      <div className="flex flex-col justify-center items-center gap-12">
        <h2 className="text-2xl md:text-3xl font-bold">Vamos conversar!</h2>
        <p className="mt-2 w-full max-w-screen-sm">
          Se você gostaria de discutir projetos, oportunidades de colaboração ou
          simplesmente quer dizer olá, não hesite em me contatar.
        </p>
      </div>

      <div>
        <p>Me envie um e-mail em:</p>
        <p className="font-bold text-lg">johnnyferreiradevweb@gmail.com</p>
      </div>

      <div className="flex flex-col justify-center items-center gap-4">
        <p className="w-full max-w-96">
          se preferir, você também pode me encontrar nas redes sociais:
        </p>
        <div className="flex gap-4 items-center">
          <Link href={LINKEDIN_URL || ""} target="_blank">
            <FontAwesomeIcon icon={faLinkedin} size="3x" />
          </Link>
          <Link href={INSTAGRAM_URL || ""} target="_blank">
            <FontAwesomeIcon icon={faSquareInstagram} size="3x" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
