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
    </div>
  )
}
