import Button from "@components/Button"
import { Letters } from "@components/Letters"
import { AuroraBackground } from "@components/ui/AuroraBackground"
import { easeIn, easeInOut, easeOut, motion, useAnimate, useScroll, useTransform } from "framer-motion"
import { useEffect, useRef } from "react"

const duration = 0.75,
  ease = "easeIn",
  delay = 0.5,
  animation = { opacity: 0.9 }

export const heroToHeaderAnimationDelay = delay

export default function Hero() {
  // Parallax effect

  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end -20%"],
  })
  const opacity = useTransform(scrollYProgress, [0.15, 0.85], [1, 0])
  const scale = useTransform(scrollYProgress, [0.15, 1], [1, 0.4], {
    ease: easeInOut,
  })

  // Appear effect

  const [scope, animate] = useAnimate()

  const handleAnimate = async () => {
    await animate("#target0", animation, { duration, delay, ease })
    await animate("#target5", animation, { duration: duration - 0.25, ease })
    await animate("#target6", animation, { duration: duration - 0.25, ease })
    // await animate("#target7", animation, { duration: duration - 0.25, delay, ease })
  }

  useEffect(() => {
    handleAnimate()
  }, [])

  return (
    <section id="hero" class="relative min-h-[200vh]" ref={targetRef}>
      {/* Wrapper for parallax effect */}
      <div class="sticky top-0 h-screen flex justify-center">
        {/* <!-- Sparkles Animation --> */}
        <div class="absolute inset-0 opacity-45 overflow-hidden" aria-hidden>
          {/* <!-- <SparklesCore particleColor="#ebebeb" background="transparent" client:load /> --> */}
          <AuroraBackground />
        </div>
        <motion.div
          class="content flex-col p-sectionPadding gap-5 justify-center items-center flex relative"
          ref={scope}
          style={{ scale, opacity }}
        >
          <div id="target0" class="flex [&>div]:relative opacity-0">
            <div id="target1">
              <Letters letter="R" />
            </div>
            <div class="ml-12" id="target2">
              <Letters letter="U" />
            </div>
            <div class="ml-12" id="target3">
              <Letters letter="Y" />
            </div>
            <div class="ml-0" id="target4">
              <Letters letter="A" />
            </div>
          </div>
          <h1
            class="text-white uppercase text-4xl tracking-[8px] md:text-4xl lg:text-5xl text-center font-clash opacity-0"
            id="target5"
          >
            Dijital Pazarlama Ajansı
          </h1>
          <p
            class="text-white font-light tracking-[1px] text-center md:text-lg lg:text-xl opacity-0"
            id="target6"
          >
            Gelece<span class='font-base"'>ğ</span>in pazarlama yöntemleriyle
            markanızın dijital kimliğini geliştirirken, <br />
            hedef kitlenize ulaşmanızı sağlıyoruz.
          </p>
          {/* <div id="target7" class="opacity-0">
          <Button />
        </div> */}
        </motion.div>
      </div>
    </section>
  )
}
