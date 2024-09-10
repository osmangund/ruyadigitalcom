export default function Button({ href = "/iletisim" }) {
  return (
    <a class="px-8 py-3 uppercase bg-white text-xs text-black rounded-default" href={href} target="">
      Ücretsiz Keşif Toplantısı &gt;
    </a>
  )
}
