import Seal from "@components/Seal"
import Service, { services } from "@components/Service"
import {
  cubicBezier,
  easeInOut,
  motion,
  useScroll,
  useTransform,
} from "framer-motion"
import { useRef } from "react"

import { Fragment } from "react"

const ease = cubicBezier(0.32, 0, 0.67, 0)

export default function Services() {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  })

  const titleScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.5], {
    ease,
  })

  const titleY = useTransform(scrollYProgress, [0, 0.2], [0, 100], {
    ease,
  })

  const titleOpacity = useTransform(scrollYProgress, [0, 0.125], [1, 0], {
    ease,
  })

  return (
    <section
      id="services"
      class="relative min-h-[200vh] p-sectionPadding bg-black -mt-[70vh]"
      ref={targetRef}
    >
      <motion.div
        class="flex justify-between mb-56 h-[30vh] sticky top-[20vh]"
        style={{ scale: titleScale, y: titleY, opacity: titleOpacity }}
      >
        <h2 class="uppercase text-8xl font-clash font-bold">Hizmetlerimiz</h2>
        <div class="absolute right-[5%]">
          <Seal />
        </div>
      </motion.div>
      <ul id="servicesList" class="flex flex-col gap-20 min-h-screen">
        {services?.map((service, i) => (
          <Fragment key={`srvc__${i}`}>
            <Service
              {...service}
              i={i}
              globalProgress={scrollYProgress}
              servicesRange={[i * (1 / services.length), 1]}
            />
          </Fragment>
        ))}
      </ul>
    </section>
  )
}
