import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function useRatingsAnimation(animatedRef) {
  useGSAP(() => {
    if (animatedRef.current) {
      {
        gsap.to(animatedRef.current, {
          opacity: 1,
          duration: 1.5,
          delay: 0.3,

          scrollTrigger: {
            trigger: animatedRef.current,
            start: "bottom bottom",
            once: true,
          },
        })
      }
    }
  })
}
