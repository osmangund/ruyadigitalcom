import Logo from "@components/Logo"
import Button from "./Button"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export const services = [
  {
    title: "Sosyal Medya Yönetimi",
    description:
      "Potansiyel müşterilerinizi her zaman yapmak istedikleri ama sürekli erteledikleri işler için harekete geçiriyor ve markanızı onların doğal tercihi haline getiriyoruz.",
    values: ["Google", "Facebook", "Instagram"],
    img: "",
  },
  {
    title: "Dijital Pazarlama",
    description:
      "Potansiyel müşterilerinizi her zaman yapmak istedikleri ama sürekli erteledikleri işler için harekete geçiriyor ve markanızı onların doğal tercihi haline getiriyoruz.",
    values: ["Google", "Facebook", "Instagram"],
    img: "",
  },
  {
    title: "Web Tasarım & Yazılım",
    description:
      "Potansiyel müşterilerinizi her zaman yapmak istedikleri ama sürekli erteledikleri işler için harekete geçiriyor ve markanızı onların doğal tercihi haline getiriyoruz.",
    values: ["Google", "Facebook", "Instagram"],
  },
]

export default function Service({
  title,
  description,
  values,
  i,
  globalProgress,
  servicesRange,
}) {
  i += 1

  const targetRef = useRef(null)

  const scrollYProgress = globalProgress,
    range = servicesRange

  const CARD_SCALE = useTransform(globalProgress, range, [1, 0])
  return (
    <motion.li
      key={`srvc__${i}`}
      class="px-12 py-8 md:px-32 md:py-12 md:pb-8 flex flex-col gap-16 bg-[#1a1a1a] rounded-default drop-shadow-service sticky top-[15vh]"
      style={{ scale: CARD_SCALE }}
    >
      {/* Top Section */}
      <div class="font-clash">
        <spa class="font-clash text-3xl opacity-40">(0{i})</spa>
      </div>
      {/* Left Section */}
      <div class="w-[45%] flex flex-col items-start gap-8">
        {/* Logo & Title */}
        <div>
          <div class="logo w-12 h-12 relative">
            <Logo variation="ruya" />
          </div>
          <h2 class="text-5xl mt-0">{title}</h2>
        </div>
        {/* Description & Values & CTA */}
        <div class="flex flex-col gap-6 items-start">
          <p className="">{description}</p>
          <ul class="flex flex-wrap gap-2">
            {values?.map((value) => (
              <li class="px-4 py-1 border rounded-default">
                <span class="uppercase text-xs">{value}</span>
              </li>
            ))}
          </ul>
          <Button />
        </div>
      </div>
      {/* Right Section (Image) */}
      <div class="w-[55%]"></div>
    </motion.li>
  )
}
