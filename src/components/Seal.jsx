import { Letters } from "@components/Letters"

export default function Seal({ color = "#fff", width = "164", height = "164" }) {
  return (
    <div
      class={`relative w-[${width}px] h-[${height}px] mt-24 shadow-circle rounded-full overflow-hidden flex justify-center items-center`}
    >
      <Letters letter="R" color={color} width={width} height={height} />
      {/* <img
          src="/assets/misc/curve-text.png"
          alt="Curve"
          width={196.8}
          height={196.8}
          class="absolute inset-0 w-[120%] h-[120%] animate-spin-slow rounded-full"
        />  */}
    </div>
  )
}
