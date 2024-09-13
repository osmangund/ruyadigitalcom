import React from "react"
import { Letters } from "@components/Letters"

export default function Seal({ color = "#fff" }) {
  return (
    <div
      className={`
        relative mt-8 md:mt-24 shadow-circle rounded-full overflow-hidden 
        flex justify-center items-center opacity-85 w-sealMobile h-sealMobile md:w-seal md:h-seal
        
      `}
    >
      <Letters letter="R" color={color} />
      {/* <img src="/assets/misc/curve-text.png" alt="Curve" width={196.8} height={196.8} className="absolute inset-0 w-[120%] h-[120%] animate-spin-slow rounded-full" /> */}
    </div>
  )
}
