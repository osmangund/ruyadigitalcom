import { R, U, Y, A } from "@components/Letters"

export default function Footer() {
  return (
    <footer class="min-h-[80vh] bg-black px-sectionPaddingX pt-sectionPaddingY gap-16 flex flex-col justify-end">
      <div class="flex justify-between">
        <ul class="nav-ul !gap-3">
          <li>
            <a href="/gizlilik-politikasi">Gizlilik Politikası</a>
          </li>
          <li>
            <a href="/gizlilik-politikasi">Kullanma Koşulları</a>
          </li>
        </ul>
        <ul class="nav-ul !gap-3">
          <li>
            <a href="/hakkimizda">Hakkımızda</a>
          </li>
          <li>
            <a href="/hizmetlerimiz">Hizmetlerimiz</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
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
              href="https://instagram.com/ruyadigital.com"
              rel="noreferrer"
              target="_blank"
            >
              INSTAGRAM.COM/RUYADIGITAL
            </a>
          </li>
        </ul>
      </div>
      <div
        id="logo-letters"
        class="flex relative h-[200px] overflow-hidden opacity-85"
      >
        <div class="flex gap-16">
          <R />
          <U />
          <Y />
        </div>
        <div>
          <A />
        </div>
      </div>
    </footer>
  )
}
