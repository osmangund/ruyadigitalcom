import { motion, useMotionValueEvent, useScroll } from "framer-motion"
import { useEffect } from "react"
import Button from "./Button"
import { heroToHeaderAnimationDelay } from "./sections/Hero"

export default function Header() {
  return (
    <motion.header
      className="absolute top-0 left-0 right-0 px-4 md:px-sectionPaddingX py-4 md:py-8 flex justify-between z-20 bg-bg backdrop-blur-xl bg-black/5 transition-all"
      initial={{ opacity: 0, translateY: -100 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{
        delay: heroToHeaderAnimationDelay,
        ease: "easeOut",
        duration: 1.5,
        type: "spring",
      }}
      viewport={{ once: true }}
    >
      <a id="header-logo" className="relative h-10" href="/">
        <img
          src="/assets/logos/logo-white.png"
          alt="Logo"
          className="h-full w-full object-fit"
        />
      </a>
      <div className="flex items-center gap-2 md:gap-8">
        <ul className="nav-ul">
          <li className="">
            <a href="/#iletisim">Hakkımızda</a>
          </li>
          <li>
            <a href="/#hizmetlerimiz">Hizmetlerimiz</a>
          </li>
          <li>
            <a href="/#iletisim">Blog</a>
          </li>
        </ul>
        <div className="hidden md:block">
          <Button />
        </div>
      </div>
    </motion.header>
  )
}
