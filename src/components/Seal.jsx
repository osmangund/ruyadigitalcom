import { Letters } from "@components/Letters";

export default function Seal() {
  return (
    <div class="relative w-[164px] h-[164px] mt-24 shadow-circle rounded-full overflow-hidden flex justify-center items-center">
      <Letters letter="R" color="var(--primary)" />
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
