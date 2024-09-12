import { Letters } from "@components/Letters"

export default function Footer() {
  return (
    // <footer class="min-h-[20vh] md:min-h-[80vh] bg-black pt-sectionPaddingYMobile px-sectionPaddingXMobile md:pt-sectionPaddingY md:px-sectionPaddingX gap-4 md:gap-16 flex flex-col justify-end">
    <footer class="bg-black flex flex-col justify-end gap-4 md:gap-4 min-h-[30vh] md:min-h-[80vh] pt-sectionPaddingYMobile px-sectionPaddingXMobile md:pt-sectionPaddingY md:px-sectionPaddingX">
      <div class="flex flex-col flex-wrap gap-8 md:gap-0 md:flex-nowrap md:flex-row md:justify-between">
        <ul class="nav-ul !gap-3">
          <li>
            <a href="/gizlilik-politikasi">Gizlilik Politikası</a>
          </li>
          <li>
            <a href="/kullanma-kosullari">Kullanma Koşulları</a>
          </li>
        </ul>
        <ul class="nav-ul !gap-3">
          <li>
            <a href="/#iletisim">Hakkımızda</a>
          </li>
          <li>
            <a href="/#hizmetlerimiz">Hizmetlerimiz</a>
          </li>
          <li>
            <a href="/#iletisim">Blog</a>
          </li>
        </ul>
        <ul class="nav-ul !gap-0.5 flex-col">
          <li>
            <a
              href="mailto:hello@ruyadigital.com"
              class="!opacity-100 !text-xl"
            >
              HELLO@RUYADIGITAL.COM
            </a>
          </li>
          <li>
            <a href="tel:+905362221429" class="!opacity-100 !text-xl">
              +90 536 222 1429
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/ruyadigitalcom"
              rel="noreferrer"
              target="_blank"
            >
              INSTAGRAM.COM/RUYADIGITALCOM
            </a>
          </li>
        </ul>
      </div>
      <div
        id="logo-letters"
        class="flex relative h-[150px] md:h-[300px] overflow-hidden opacity-80 justify-center"
      >
        <div class="relative w-full flex justify-center translate-y-[40%] md:translate-y-1/2 gap-1 md:gap-16">
          <div class="flex gap-4 md:gap-32">
            <Letters letter="R" />
            <Letters letter="U" />
            <Letters letter="Y" />
          </div>
          <div class="flex">
            <Letters letter="A" />
          </div>
        </div>
      </div>
    </footer>
  )
}
