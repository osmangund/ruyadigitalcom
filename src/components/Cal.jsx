import { useEffect, useState } from "react"
import Cal, { getCalApi } from "@calcom/embed-react"

const CalComponent = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          observer.disconnect() // stop observing once the component is visible
        }
      },
      { threshold: 0.1 } // trigger when 10% of the section is visible
    )

    const section = document.getElementById("iletisim")
    if (section) {
      observer.observe(section)
    }

    return () => {
      if (section) observer.disconnect()
    }
  }, [])

  useEffect(() => {
    if (isVisible) {
      ;(async () => {
        const cal = await getCalApi({ namespace: "on-gorusme" })
        cal("ui", {
          styles: { branding: { brandColor: "#000000" } },
          hideEventTypeDetails: false,
          layout: "month_view",
        })
      })()
    }
  }, [isVisible])

  return isVisible ? (
    <Cal
      namespace="on-gorusme"
      calLink="ruyadigital/on-gorusme"
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
      config={{ layout: "month_view" }}
    />
  ) : null // Don't render anything if not visible
}

export default CalComponent
