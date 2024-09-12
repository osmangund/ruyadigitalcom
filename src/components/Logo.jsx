export default function Logo({
  width = "64px",
  height = "128px",
  variation = "default",
}) {
  if (variation === "ruya") {
    return (
      <img
        src="/assets/logos/logo-ruya.svg"
        alt="Logo"
        width={width}
        height={height}
        className="h-full w-full object-fit"
      />
    )
  }
  return (
    <img
      src="/assets/logos/logo-white.png"
      alt="Logo"
      width={width}
      height={height}
      className="h-full w-full object-fit"
    />
  )
}
