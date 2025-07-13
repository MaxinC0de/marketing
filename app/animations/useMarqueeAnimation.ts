import { useGSAP } from "@gsap/react"
import gsap from "gsap"

export function useMarqueeAnimation(containerRef) {
  useGSAP(() => {
    gsap.to(containerRef.current, {
      x: "-50%",
      duration: 10,
      repeat: -1,
      ease: "linear",
    })
  })
}
