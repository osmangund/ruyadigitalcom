import Logo from "@components/Logo"
import Button from "./Button"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function Service({
  title,
  description,
  values,
  i,
  globalProgress,
  range,
  slug,
}) {
  i += 1

  const targetRef = useRef(null)

  const scrollYProgress = globalProgress

  const scale = useTransform(globalProgress, range, [1, 0])

  return (
    <motion.li
      key={`srvc__${i}`}
      className="px-12 py-8 md:px-24 md:py-16 md:pb-8 flex flex-col gap-16 bg-[#1a1a1a] rounded-default drop-shadow-service sticky top-[15vh]"
      style={{
        scale,
      }}
    >
      {/* Top Section */}
      <div className="font-clash">
        <spa className="font-clash text-3xl opacity-40">(0{i})</spa>
      </div>
      <div className="relative w-full flex gap-16">
        {/* Left Section */}
        <div className="w-[55%] h-full flex flex-col items-start gap-8">
          {/* Logo & Title */}
          <div>
            <div className="logo w-12 h-12 relative">
              <Logo variation="ruya" />
            </div>
            <h2 className="text-5xl mt-0">{title}</h2>
          </div>
          {/* Description & Values & CTA */}
          <div className="flex flex-col gap-6 items-start">
            <p className="">{description}</p>
            <ul className="flex flex-wrap gap-2">
              {values?.map((value, i) => (
                <li
                  className="px-4 py-1 border rounded-default"
                  key={`vls__${i}`}
                >
                  <span className="uppercase text-xs">{value}</span>
                </li>
              ))}
            </ul>
            <Button />
          </div>
        </div>
        {/* Right Section (Image) */}
        <div className="w-[45%] relative">
          {Array.from({ length: 4 }).map((_, i) => (
            <img
              className="w-full h-full object-cover rounded-default absolute"
              src={`/assets/images/${slug}-${i + 1}.webp`}
              alt="Servise uygun yerleştilirmiş projeler veya tasarımlar"
            />
          ))}
        </div>
      </div>
    </motion.li>
  )
}
