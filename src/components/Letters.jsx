import { motion } from "framer-motion"
import { twMerge } from "tailwind-merge"

const colorGlobal = "url(#gradient)"
const bgGlobal = "transparent"
const widthGlobal = 250
const heightGlobal = widthGlobal * 1.33

const transition = { duration: 4, yoyo: Infinity, ease: "easeInOut" }

const pathVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
}

export function Letters(props) {
  const {
    letter = "R",
    width = widthGlobal,
    height = heightGlobal,
    color = colorGlobal,
    bg = bgGlobal,
  } = props

  let letterPath = null

  if (letter === "R") {
    letterPath = (
      <g transform="translate(0, 271.661376)">
        <g>
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={transition}
            d="M 7.625 0 L 7.625 -2.546875 C 14.894531 -2.546875 20.179688 -4.742188 23.484375 -9.140625 C 26.785156 -13.546875 28.859375 -20.738281 29.703125 -30.71875 C 30.554688 -40.707031 30.984375 -54 30.984375 -70.59375 L 30.984375 -183.34375 C 30.984375 -200.101562 30.554688 -213.429688 29.703125 -223.328125 C 28.859375 -233.234375 26.785156 -240.382812 23.484375 -244.78125 C 20.179688 -249.1875 14.894531 -251.390625 7.625 -251.390625 L 7.625 -253.9375 L 38.09375 -253.9375 C 47.40625 -253.9375 55.910156 -254.359375 63.609375 -255.203125 C 71.316406 -256.054688 79.101562 -256.90625 86.96875 -257.75 C 94.84375 -258.59375 103.691406 -259.015625 113.515625 -259.015625 C 131.628906 -259.015625 146.945312 -255.925781 159.46875 -249.75 C 172 -243.570312 181.519531 -235.148438 188.03125 -224.484375 C 194.550781 -213.816406 197.8125 -201.539062 197.8125 -187.65625 C 197.8125 -176.144531 194.804688 -165.3125 188.796875 -155.15625 C 182.785156 -145 174.363281 -136.828125 163.53125 -130.640625 C 152.695312 -124.460938 139.914062 -121.375 125.1875 -121.375 C 119.257812 -121.375 113.753906 -122.175781 108.671875 -123.78125 C 103.597656 -125.394531 98.988281 -127.300781 94.84375 -129.5 C 90.695312 -131.707031 86.929688 -133.613281 83.546875 -135.21875 C 80.160156 -136.832031 77.113281 -137.640625 74.40625 -137.640625 C 72.882812 -137.640625 71.273438 -137.253906 69.578125 -136.484375 C 67.890625 -135.722656 67.046875 -133.90625 67.046875 -131.03125 C 67.046875 -127.8125 68.90625 -124.929688 72.625 -122.390625 C 76.351562 -119.859375 81.175781 -117.320312 87.09375 -114.78125 C 93.019531 -112.238281 99.367188 -109.441406 106.140625 -106.390625 C 112.910156 -103.347656 119.425781 -99.625 125.6875 -95.21875 C 131.957031 -90.820312 137.125 -85.40625 141.1875 -78.96875 C 146.269531 -71.1875 151.519531 -62.847656 156.9375 -53.953125 C 162.351562 -45.066406 168.066406 -36.726562 174.078125 -28.9375 C 180.085938 -21.15625 186.390625 -14.8125 192.984375 -9.90625 C 199.585938 -5 206.53125 -2.546875 213.8125 -2.546875 L 213.8125 0 L 174.96875 0 C 172.082031 0 169.242188 -1.179688 166.453125 -3.546875 C 163.660156 -5.921875 160.234375 -9.941406 156.171875 -15.609375 C 152.109375 -21.285156 146.898438 -29.03125 140.546875 -38.84375 C 134.203125 -48.664062 126.035156 -61.113281 116.046875 -76.1875 C 109.953125 -85.488281 103.859375 -92.847656 97.765625 -98.265625 C 91.671875 -103.691406 86.125 -108.050781 81.125 -111.34375 C 76.132812 -114.644531 72.113281 -117.773438 69.0625 -120.734375 C 66.019531 -123.703125 64.5 -127.304688 64.5 -131.546875 C 64.5 -134.585938 65.429688 -136.785156 67.296875 -138.140625 C 69.160156 -139.492188 71.191406 -140.171875 73.390625 -140.171875 C 77.109375 -140.171875 80.742188 -139.453125 84.296875 -138.015625 C 87.859375 -136.578125 91.539062 -134.882812 95.34375 -132.9375 C 99.15625 -130.988281 103.347656 -129.296875 107.921875 -127.859375 C 112.492188 -126.421875 117.742188 -125.703125 123.671875 -125.703125 C 131.628906 -125.703125 138.820312 -127.476562 145.25 -131.03125 C 151.6875 -134.582031 157.1875 -139.28125 161.75 -145.125 C 166.320312 -150.96875 169.835938 -157.570312 172.296875 -164.9375 C 174.753906 -172.300781 175.984375 -179.789062 175.984375 -187.40625 C 175.984375 -201.457031 172.847656 -213.5625 166.578125 -223.71875 C 160.316406 -233.875 151.429688 -241.703125 139.921875 -247.203125 C 128.410156 -252.710938 114.78125 -255.46875 99.03125 -255.46875 C 89.71875 -255.46875 81.59375 -254.832031 74.65625 -253.5625 C 67.71875 -252.289062 60.351562 -250.210938 52.5625 -247.328125 L 52.5625 -70.59375 C 52.5625 -54 52.984375 -40.707031 53.828125 -30.71875 C 54.679688 -20.738281 56.757812 -13.546875 60.0625 -9.140625 C 63.363281 -4.742188 68.648438 -2.546875 75.921875 -2.546875 L 75.921875 0 Z M 7.625 0 "
          />
        </g>
      </g>
    )
  } else if (letter === "U") {
    letterPath = (
      <g transform="translate(0, 272.456423)">
        <g>
          <path d="M 7.625 -251.875 L 7.625 -254.421875 L 76.328125 -254.421875 L 76.328125 -251.875 C 69.035156 -251.875 63.734375 -249.664062 60.421875 -245.25 C 57.117188 -240.84375 55.039062 -233.675781 54.1875 -223.75 C 53.34375 -213.832031 52.921875 -200.476562 52.921875 -183.6875 L 52.921875 -70.734375 C 52.921875 -54.273438 55.757812 -40.617188 61.4375 -29.765625 C 67.125 -18.910156 74.800781 -10.8125 84.46875 -5.46875 C 94.132812 -0.125 104.988281 2.546875 117.03125 2.546875 C 129.070312 2.546875 139.84375 -0.164062 149.34375 -5.59375 C 158.84375 -11.019531 166.347656 -19.160156 171.859375 -30.015625 C 177.367188 -40.878906 180.125 -54.453125 180.125 -70.734375 L 180.125 -183.6875 C 180.125 -200.476562 179.703125 -213.832031 178.859375 -223.75 C 178.015625 -233.675781 175.9375 -240.84375 172.625 -245.25 C 169.320312 -249.664062 164.019531 -251.875 156.71875 -251.875 L 156.71875 -254.421875 L 225.421875 -254.421875 L 225.421875 -251.875 C 218.128906 -251.875 212.828125 -249.664062 209.515625 -245.25 C 206.210938 -240.84375 204.132812 -233.675781 203.28125 -223.75 C 202.4375 -213.832031 202.015625 -200.476562 202.015625 -183.6875 L 202.015625 -70.734375 C 202.015625 -53.765625 198.195312 -39.679688 190.5625 -28.484375 C 182.925781 -17.296875 172.660156 -8.898438 159.765625 -3.296875 C 146.878906 2.296875 132.632812 5.09375 117.03125 5.09375 C 101.425781 5.09375 87.09375 2.335938 74.03125 -3.171875 C 60.976562 -8.691406 50.550781 -17.046875 42.75 -28.234375 C 34.945312 -39.429688 31.046875 -53.597656 31.046875 -70.734375 L 31.046875 -183.6875 C 31.046875 -200.476562 30.617188 -213.832031 29.765625 -223.75 C 28.921875 -233.675781 26.84375 -240.84375 23.53125 -245.25 C 20.226562 -249.664062 14.925781 -251.875 7.625 -251.875 Z M 7.625 -251.875 " />
        </g>
      </g>
    )
  } else if (letter === "Y") {
    letterPath = (
      <g transform="translate(4.442911, 272.456423)">
        <g>
          <path d="M 0 -251.875 L 0 -254.421875 L 70.734375 -254.421875 L 70.734375 -251.875 L 65.125 -251.875 C 61.570312 -251.875 58.394531 -250.898438 55.59375 -248.953125 C 52.789062 -247.003906 51.390625 -243.484375 51.390625 -238.390625 C 51.390625 -235.503906 52.535156 -231.132812 54.828125 -225.28125 C 57.117188 -219.4375 60.210938 -212.695312 64.109375 -205.0625 C 68.015625 -197.425781 72.296875 -189.328125 76.953125 -180.765625 C 81.617188 -172.203125 86.285156 -163.722656 90.953125 -155.328125 C 95.617188 -146.929688 100.03125 -139.039062 104.1875 -131.65625 C 108.34375 -124.28125 111.691406 -118.050781 114.234375 -112.96875 C 117.796875 -119.582031 122.117188 -127.632812 127.203125 -137.125 C 132.296875 -146.625 137.554688 -156.628906 142.984375 -167.140625 C 148.410156 -177.660156 153.539062 -187.835938 158.375 -197.671875 C 163.207031 -207.515625 167.109375 -216.207031 170.078125 -223.75 C 173.046875 -231.300781 174.53125 -236.773438 174.53125 -240.171875 C 174.53125 -244.753906 173.046875 -247.847656 170.078125 -249.453125 C 167.109375 -251.066406 163.84375 -251.875 160.28125 -251.875 L 153.671875 -251.875 L 153.671875 -254.421875 L 208.109375 -254.421875 L 208.109375 -251.875 C 201.671875 -251.875 196.285156 -249.664062 191.953125 -245.25 C 187.628906 -240.84375 183.09375 -233.972656 178.34375 -224.640625 C 173.59375 -215.316406 167.316406 -203.28125 159.515625 -188.53125 C 154.265625 -178.6875 148.753906 -168.59375 142.984375 -158.25 C 137.210938 -147.90625 131.828125 -138.28125 126.828125 -129.375 C 121.828125 -120.46875 117.882812 -113.21875 115 -107.625 L 115 -70.734375 C 115 -54.109375 115.421875 -40.789062 116.265625 -30.78125 C 117.117188 -20.78125 119.195312 -13.570312 122.5 -9.15625 C 125.8125 -4.75 131.113281 -2.546875 138.40625 -2.546875 L 138.40625 0 L 69.71875 0 L 69.71875 -2.546875 C 77.007812 -2.546875 82.304688 -4.75 85.609375 -9.15625 C 88.921875 -13.570312 91 -20.78125 91.84375 -30.78125 C 92.695312 -40.789062 93.125 -54.109375 93.125 -70.734375 L 93.125 -107.625 C 90.238281 -113.21875 86.289062 -120.46875 81.28125 -129.375 C 76.28125 -138.28125 70.894531 -147.90625 65.125 -158.25 C 59.363281 -168.59375 53.851562 -178.6875 48.59375 -188.53125 C 40.957031 -203.28125 34.722656 -215.316406 29.890625 -224.640625 C 25.054688 -233.972656 20.476562 -240.84375 16.15625 -245.25 C 11.832031 -249.664062 6.445312 -251.875 0 -251.875 Z M 0 -251.875 " />
        </g>
      </g>
    )
  } else if (letter === "A") {
    letterPath = (
      <g transform="translate(0, 272.456423)">
        <g>
          <path d="M 7.625 -44.53125 C 7.625 -55.039062 10.082031 -64.492188 15 -72.890625 C 19.925781 -81.285156 26.25 -88.914062 33.96875 -95.78125 C 41.6875 -102.65625 49.867188 -108.929688 58.515625 -114.609375 C 67.171875 -120.296875 75.351562 -125.554688 83.0625 -130.390625 C 90.78125 -135.222656 97.097656 -139.84375 102.015625 -144.25 C 106.941406 -148.664062 109.40625 -153.078125 109.40625 -157.484375 C 109.40625 -159.859375 108.8125 -161.597656 107.625 -162.703125 C 106.4375 -163.804688 104.992188 -164.359375 103.296875 -164.359375 C 100.242188 -164.359375 97.398438 -163 94.765625 -160.28125 C 92.140625 -157.570312 89.554688 -154.476562 87.015625 -151 C 84.472656 -147.519531 81.71875 -144.421875 78.75 -141.703125 C 75.78125 -138.992188 72.515625 -137.640625 68.953125 -137.640625 C 65.390625 -137.640625 63.222656 -139.082031 62.453125 -141.96875 C 61.691406 -144.851562 61.90625 -147.90625 63.09375 -151.125 C 67 -161.300781 70.5625 -170.753906 73.78125 -179.484375 C 77 -188.222656 80.175781 -196.707031 83.3125 -204.9375 C 86.457031 -213.164062 89.679688 -221.6875 92.984375 -230.5 C 96.296875 -239.320312 99.988281 -248.992188 104.0625 -259.515625 L 106.609375 -259.515625 L 188.015625 -44.53125 C 193.609375 -30.613281 198.863281 -20.132812 203.78125 -13.09375 C 208.707031 -6.0625 215.070312 -2.546875 222.875 -2.546875 L 222.875 0 L 139.421875 0 L 139.421875 -2.546875 C 148.410156 -2.546875 155.238281 -3.734375 159.90625 -6.109375 C 164.570312 -8.484375 167.582031 -11.789062 168.9375 -16.03125 C 170.289062 -20.269531 170.457031 -25.1875 169.4375 -30.78125 C 168.425781 -36.382812 166.734375 -42.40625 164.359375 -48.84375 L 132.8125 -132.046875 C 133.820312 -123.898438 134.328125 -113.722656 134.328125 -101.515625 C 134.328125 -80.992188 131.144531 -62.675781 124.78125 -46.5625 C 118.425781 -30.445312 109.269531 -17.804688 97.3125 -8.640625 C 85.351562 0.515625 70.894531 5.09375 53.9375 5.09375 C 44.101562 5.09375 35.75 2.800781 28.875 -1.78125 C 22.007812 -6.363281 16.75 -12.425781 13.09375 -19.96875 C 9.445312 -27.519531 7.625 -35.707031 7.625 -44.53125 Z M 29.265625 -49.359375 C 29.265625 -37.484375 32.820312 -27.472656 39.9375 -19.328125 C 47.0625 -11.191406 56.816406 -7.125 69.203125 -7.125 C 79.890625 -7.125 89.132812 -10.003906 96.9375 -15.765625 C 104.738281 -21.535156 111.222656 -29.082031 116.390625 -38.40625 C 121.566406 -47.738281 125.425781 -57.914062 127.96875 -68.9375 C 130.519531 -79.96875 131.796875 -90.65625 131.796875 -101 C 131.796875 -110.5 131.5 -118.976562 130.90625 -126.4375 C 130.3125 -133.90625 128.828125 -141.375 126.453125 -148.84375 L 95.65625 -230 L 66.40625 -152.140625 C 64.707031 -147.734375 64.238281 -144.640625 65 -142.859375 C 65.769531 -141.078125 67.171875 -140.1875 69.203125 -140.1875 C 72.085938 -140.1875 74.882812 -141.539062 77.59375 -144.25 C 80.3125 -146.96875 83.023438 -150.066406 85.734375 -153.546875 C 88.453125 -157.023438 91.296875 -160.117188 94.265625 -162.828125 C 97.234375 -165.546875 100.410156 -166.90625 103.796875 -166.90625 C 106.171875 -166.90625 108.164062 -166.097656 109.78125 -164.484375 C 111.394531 -162.867188 112.203125 -160.367188 112.203125 -156.984375 C 112.203125 -151.378906 110.207031 -146.242188 106.21875 -141.578125 C 102.238281 -136.921875 97.109375 -132.382812 90.828125 -127.96875 C 84.554688 -123.5625 77.859375 -118.898438 70.734375 -113.984375 C 63.609375 -109.066406 56.90625 -103.59375 50.625 -97.5625 C 44.351562 -91.539062 39.222656 -84.628906 35.234375 -76.828125 C 31.253906 -69.023438 29.265625 -59.867188 29.265625 -49.359375 Z M 29.265625 -49.359375 " />
        </g>
      </g>
    )
  } else {
    return null
  }

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={width}
      height={height}
      zoomAndPan="magnify"
      viewBox="0 0 217.5 289.500005"
      preserveAspectRatio="xMidYMid meet"
      version="1.0"
      className="w-full h-full"
    >
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fff" />
          <stop offset="95%" stopColor="#fff" />
          <stop offset="100%" stopColor="#000" />
        </linearGradient>
      </defs>
      <g fill={color} fillOpacity="1">
        {letterPath}
      </g>
    </motion.svg>
  )
}
