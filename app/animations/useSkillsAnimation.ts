import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"

export function useSkillsAnimation(refs, activeIndex) {
  useGSAP(() => {
    refs?.current?.forEach((ref, i) => {
      if (ref) {
        gsap.to(ref, {
          opacity: activeIndex === i ? 1 : 0,
          duration: 0.3,
        })
      }
    })
  }, [activeIndex])
}
