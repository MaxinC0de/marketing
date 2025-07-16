import { useGSAP } from "@gsap/react"
import gsap from "gsap"

export function useMarqueeAnimation(ref) {
  useGSAP(() => {
    if (!ref.current) return
    const el = ref.current
    const totalWidth = el.scrollWidth / 2
    gsap.fromTo(
      el,
      { x: 0 },
      {
        x: -totalWidth,
        duration: 20,
        repeat: -1,
        ease: "linear",
      },
    )
  }, [])
}
