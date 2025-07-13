import { useGSAP } from "@gsap/react"
import gsap from "gsap"

export function useMarqueeAnimation(containerRef) {
  useGSAP(() => {
    if (containerRef.current) {
      gsap.to(containerRef.current, {
        x: -containerRef.current.offsetWidth / 2,
        duration: 20,
        repeat: -1,
        ease: "linear",
      })
    }
  })
}
