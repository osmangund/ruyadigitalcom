import Seal from "@components/Seal"
import Service from "@components/Service"
import { cubicBezier, motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

import { Fragment } from "react"

const ease = cubicBezier(0.32, 0, 0.67, 0)

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
    slug: "webdesign",
    title: "Web Tasarım & Yazılım",
    description:
      "Potansiyel müşterilerinizi her zaman yapmak istedikleri ama sürekli erteledikleri işler için harekete geçiriyor ve markanızı onların doğal tercihi haline getiriyoruz.",
    values: ["Google", "Facebook", "Instagram"],
  },
]

export default function Services() {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  })

  const titleScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.5], {
    ease,
  })

  const titleY = useTransform(scrollYProgress, [0, 0.15], [0, 100], {
    ease,
  })

  const titleOpacity = useTransform(scrollYProgress, [0, 0.135], [1, 0], {
    ease,
  })

  return (
    <section
      id="services"
      class="relative min-h-[200vh] p-sectionPadding bg-black -mt-[60vh]"
      ref={targetRef}
    >
      <motion.div
        class="flex justify-between mb-56 h-[30vh] sticky top-[30vh]"
        style={{ scale: titleScale, y: titleY, opacity: titleOpacity }}
      >
        <h2 class="uppercase text-8xl font-clash font-bold">Hizmetlerimiz</h2>
        <div class="absolute right-[5%]">
          <Seal color="var(--primary)" />
        </div>
      </motion.div>
      <ul id="servicesList" class="flex flex-col gap-8 md:gap-32 min-h-screen">
        {services?.map((service, i) => (
          <Fragment key={`srvc__${i}`}>
            <Service
              {...service}
              i={i}
              globalProgress={scrollYProgress}
              // 0 * 1/3
              //  1 * 1/3
              // 2 * 1/3
              range={[i * (1 / services.length) + 0.17, 1]}
            />
          </Fragment>
        ))}
      </ul>
    </section>
  )
}
