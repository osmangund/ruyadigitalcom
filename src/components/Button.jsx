export default function Button({ href = "/#iletisim" }) {
  return (
    <a
      class="px-8 py-3 uppercase bg-primary text-white font-bold tracking-wide text-xs rounded-default"
      href={href}
    >
      Ücretsiz Keşif Toplantısı &gt;
    </a>
  )
}
